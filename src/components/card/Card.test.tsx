import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import { Card } from "./Card";

describe("Card", () => {
  it("renders component", () => {
    const pokemon = pokemonMock.fire;
    const { container } = render(<Card pokemon={pokemon} />);
    expect(container).toBeInTheDocument();
  });
  it("que se muestre correctamente la informacion de un pokemon", () => {
    const pokemon = pokemonMock.fire;
    const { getByText, getAllByText } = render(<Card pokemon={pokemon} />);

    const elementType = getByText(pokemon.type);
    expect(elementType).toBeInTheDocument();

    const elementName = getAllByText(pokemon.name);
    expect(elementName).toHaveLength(2);

    const elementLocation = getByText(pokemon.location);
    expect(elementLocation).toBeInTheDocument();
  });
});
