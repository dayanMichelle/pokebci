import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import { InfoPokemon } from "./InfoPokemon";

describe("InfoPokemon", () => {
  it("show pokemon's name and id", () => {
    const infoPokemon = {
      name: pokemonMock.fire.name,
      id: pokemonMock.fire.id,
    };
    const { getByText } = render(<InfoPokemon {...infoPokemon} />);
    const componentName = getByText(infoPokemon.name);
    expect(componentName).toBeInTheDocument();

    const componentId = getByText(`#${infoPokemon.id}`);
    expect(componentId).toBeInTheDocument();
  });
});
