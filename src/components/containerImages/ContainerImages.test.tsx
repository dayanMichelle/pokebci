import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { ContainerImages } from "./ContainerImages";
import { pokemonMock } from "../../test/mocks/pokemonMock";

describe("ContainerImages", () => {
  const pokemon = {
    evolutions: pokemonMock.fire.evolutions,
    location: pokemonMock.fire.location,
    img: pokemonMock.fire.img,
    name: pokemonMock.fire.name,
  };

  it("renders component", () => {
    const { container } = render(<ContainerImages {...pokemon} />);
    expect(container).toBeInTheDocument;
  });

  it("there is a picture of the pokemon", () => {
    const { getByAltText } = render(<ContainerImages {...pokemon} />);
    const componentElement = getByAltText(`imagen del pokemon ${pokemon.name}`);
    expect(componentElement).toBeInTheDocument();
  });

  it("renders list avatars", () => {
    const { getByAltText } = render(<ContainerImages {...pokemon} />);
    pokemonMock.fire.evolutions.forEach(({ name }) => {
      const componentElement = getByAltText(`Icono de ${name}`);
      expect(componentElement).toBeInTheDocument();
    });
  });
});
