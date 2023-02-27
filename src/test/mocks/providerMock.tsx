import React from "react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import { ContextProps, PokemonContext } from "../../context/PokemonContext";
import { Filter, PokemonContract } from "../../types";
import { pokemonMock } from "./pokemonMock";

const filter = {
  addFilter: (type: string) => (predicate: Filter<PokemonContract>) => {},
  clearFilter: () => {},
};

const mockValue = {
  filter,
  pokemons: [pokemonMock.fire, pokemonMock.grass],
  abilities: pokemonMock.fire.abilities,
  moves: pokemonMock.fire.moves,
  getPokemons: async () => {},
  error: "",
  isLoading: false,
};

type ProviderMockProps = {
  children: React.ReactNode;
  value?: ContextProps;
};

export const ProviderMock = ({
  children,
  value = mockValue,
}: ProviderMockProps) => {
  return (
    <MemoryRouter>
      <PokemonContext.Provider value={value}>
        {children}
      </PokemonContext.Provider>
    </MemoryRouter>
  );
};
