import axios from "axios";
import {
  Chain,
  Evolution,
  PokeData,
  Pokemon,
  PokemonContract,
  PokeResponse,
  ResponseEvolution,
} from "../types";

const BASE_URL = "https://pokeapi.co/api/v2";
export interface Params {
  limit?: number;
  offset?: number;
}

export const getNormalizedPokemons = async ({
  limit = 10,
  offset = 0,
}: Params): Promise<[PokemonContract[], Params]> => {
  // get All pokemons in format simple
  const { results, next } = await getPokemons({ limit, offset });

  // get all pokemons in format raw
  const rawPokemons = await transformAndResolve<PokeData, Pokemon>(
    results,
    getPokemon
  );

  // get all pokemons in format normalized
  const pokemons = await transformAndResolve<Pokemon, PokemonContract>(
    rawPokemons,
    normalizePokemon
  );

  // get params
  const newParams = getParams(next);

  return [pokemons, newParams];
};

const getPokemons = async ({
  limit = 10,
  offset = 0,
}: Params): Promise<PokeResponse> => {
  const { data } = await axios<PokeResponse>(`${BASE_URL}/pokemon`, {
    params: {
      limit,
      offset,
    },
  });
  return data;
};

const getPokemon = async ({ url }: { url: string }): Promise<Pokemon> => {
  const { data } = await axios<Pokemon>(url);
  return data;
};

const transformAndResolve = async <T, U>(
  data: T[],
  callback: (item: T) => Promise<U>
): Promise<U[]> => {
  const actionsList = data.map(callback);
  const promisePokemons = await Promise.allSettled(actionsList);
  const pokemons = resolveAllSettled<U>(promisePokemons);
  return pokemons;
};

const resolveAllSettled = <T>(
  promises: Array<PromiseSettledResult<any>>
): T[] => {
  return (
    promises
      .filter((promise) => promise.status === "fulfilled")
      // @ts-ignore
      .map((promise) => promise.value)
  );
};

const normalizePokemon = async ({
  abilities,
  types,
  moves,
  sprites,
  name,
  id,
  location_area_encounters,
  species,
}: Pokemon): Promise<PokemonContract> => {
  const location = await getLocation(location_area_encounters);
  const evolutions = await getEvolutions(species.url);

  return {
    abilities: abilities.map(({ ability }) => ability.name),
    type: types[0].type.name,
    evolutions,
    moves: moves.map(({ move }) => move.name),
    location,
    img: sprites.other.home.front_default,
    name,
    id,
  };
};

const getLocation = async (url: string): Promise<string> => {
  const { data } = await axios(url);
  const location = data[0]?.location_area?.name || "Everywhere";
  return location;
};

const getEvolutions = async (url: string): Promise<Evolution[]> => {
  // get especies to get evolutions
  const { data } = await axios(url);

  // get evolution chain
  const { data: evolution } = await axios<ResponseEvolution>(
    data.evolution_chain.url
  );

  const rawEvolutions = recursiveEvolutions(evolution.chain); // ["charmande", "el otro"]
  const evolutions = await normalizeEvolution(rawEvolutions); // [{name, id, icon},{name, id, icon}]
  return evolutions;
};

const recursiveEvolutions = (chain: Chain): string[] => {
  const { evolves_to, species } = chain;
  const evolutions = [species && species?.name];

  if (evolves_to) {
    evolves_to.forEach((evolves) => {
      evolutions.push(...recursiveEvolutions(evolves));
    });
  }
  return evolutions;
};

const normalizeEvolution = async (
  evolution: string[]
): Promise<Evolution[]> => {
  const actions = evolution?.map((name) =>
    getPokemon({ url: `${BASE_URL}/pokemon/${name}` })
  );
  const rawPokemons = await Promise.all(actions);
  const evolutionNormalized: Evolution[] = rawPokemons.map(
    ({ name, sprites, id }) => ({
      name,
      icon: sprites.front_default,
      id,
    })
  );
  return evolutionNormalized;
};

const getParams = (url: string): Params => {
  const draftUrl = new URL(url);
  const params = new URLSearchParams(draftUrl.search);
  const limit = Number(params.get("limit"));
  const offset = Number(params.get("offset"));
  return { limit, offset };
};
