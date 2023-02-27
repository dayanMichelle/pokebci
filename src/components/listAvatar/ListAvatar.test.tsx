import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { ListAvatar } from "./ListAvatar";
import { pokemonMock } from "../../test/mocks/pokemonMock";

describe("ListAvatar", () => {
  it("renders list avatars", () => {
    const { getByAltText } = render(
      <ListAvatar evolutions={pokemonMock.fire.evolutions} />
    );
    pokemonMock.fire.evolutions.forEach(({ name }) => {
      const componentElement = getByAltText(`Icono de ${name}`);
      expect(componentElement).toBeInTheDocument();
    });
  });

  it("shows the evolution by default when it does not have an icon", () => {
    const evolutionsWhitoutIcons = [
      { name: "charmander", id: 4, icon: undefined! },
      { name: "charmeleon", id: 5, icon: undefined! },
      { name: "charizard", id: 6, icon: undefined! },
    ];
    const { getByAltText } = render(
      <ListAvatar evolutions={evolutionsWhitoutIcons} />
    );

    evolutionsWhitoutIcons.forEach(({ name }) => {
      const componentElement = getByAltText(`Icono de ${name}`);
      expect(componentElement).toBeInTheDocument();
    });
  });
});
