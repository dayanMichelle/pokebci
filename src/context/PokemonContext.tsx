import { createContext, useContext, useMemo } from "react";
import { getCategory } from "../helpers";
import { useFilter } from "../hooks/useFilter";
import { usePokemons } from "../hooks/usePokemons";
import { Filter, PokemonContract } from "../types";

// Context
export type ContextProps = {
  pokemons: PokemonContract[];
  abilities: string[];
  moves: string[];
  filter: {
    addFilter: (type: string) => (predicate: Filter<PokemonContract>) => void;
    clearFilter: (type: string) => void;
  };
  getPokemons: () => Promise<void>;
  error: string;
  isLoading: boolean;
};
export const PokemonContext = createContext({} as ContextProps);

// Provider
type PokemonProviderProps = {
  children: React.ReactNode;
};

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const { pokemons, getPokemons, error, isLoading } = usePokemons();
  const [pokemonsFiltered, addFilterPokemons, clearFilterPokemons] = useFilter(
    pokemons,
    0
  );

  const abilities = useMemo(
    () => getCategory(pokemons, "abilities"),
    [pokemons]
  );

  const moves = useMemo(() => getCategory(pokemons, "moves"), [pokemons]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons: pokemonsFiltered,
        abilities,
        moves,
        filter: {
          addFilter: addFilterPokemons,
          clearFilter: clearFilterPokemons,
        },
        getPokemons,
        error,
        isLoading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

// Hook
export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
};
