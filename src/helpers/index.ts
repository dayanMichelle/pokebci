import { PokemonContract } from "../types";

export const getCategory = (
  pokemons: PokemonContract[],
  key: "abilities" | "moves"
): string[] => {
  const category = pokemons.reduce((acc, obj) => {
    obj[key].forEach((name) => {
      acc.add(name);
    });
    return acc;
  }, new Set<string>());
  return [...category];
};
