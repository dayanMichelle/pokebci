import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import { ListPokemon } from "./ListPokemon";

describe("ListPokemon", () => {
  it("renders component", () => {
    const pokemons = [pokemonMock.fire, pokemonMock.grass];
    const { container } = render(<ListPokemon pokemons={pokemons} />);
    expect(container).toBeInTheDocument();
  });

  it("shows the correct amount of cards", () => {
    const pokemons = [pokemonMock.fire, pokemonMock.grass];
    const { getAllByTestId } = render(<ListPokemon pokemons={pokemons} />);
    const cards = getAllByTestId("card");
    expect(cards).toHaveLength(pokemons.length);
  });
});
