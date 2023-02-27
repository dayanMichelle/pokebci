import { it, describe, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import { CardSkills } from "./CardSkills";

describe("CardSkills", () => {
  const pokemon = {
    name: pokemonMock.fire.name,
    moves: pokemonMock.fire.moves,
    abilities: pokemonMock.fire.abilities,
  };
  it("renders component", () => {
    const { container } = render(<CardSkills {...pokemon} />);
    expect(container).toBeInTheDocument();
  });
  it("list of moves default", () => {
    const { getByText, queryByText } = render(<CardSkills {...pokemon} />);
    pokemon.moves.forEach((move) => {
      const componentElement = getByText(move);
      expect(componentElement).toBeInTheDocument();
    });

    pokemon.abilities.forEach((ability) => {
      const componentElement = queryByText(ability);
      expect(componentElement).not.toBeInTheDocument();
    });
  });

  it("shows the list of abilities when I click on the button", () => {
    const { getByRole, queryByText } = render(<CardSkills {...pokemon} />);
    const buttonAbilities = getByRole("button", { name: "abilities" });
    fireEvent.click(buttonAbilities);

    pokemon.moves.forEach((move) => {
      const componentElement = queryByText(move);
      expect(componentElement).not.toBeInTheDocument();
    });

    pokemon.abilities.forEach((ability) => {
      const componentElement = queryByText(ability);
      expect(componentElement).toBeInTheDocument();
    });
  });

  it("shows the list of moves when I click on the button", () => {
    const { getByRole, queryByText } = render(<CardSkills {...pokemon} />);
    const buttonAbilities = getByRole("button", { name: "abilities" });
    fireEvent.click(buttonAbilities);

    const buttonMoves = getByRole("button", { name: "moves" });
    fireEvent.click(buttonMoves);

    pokemon.moves.forEach((move) => {
      const componentElement = queryByText(move);
      expect(componentElement).toBeInTheDocument();
    });

    pokemon.abilities.forEach((ability) => {
      const componentElement = queryByText(ability);
      expect(componentElement).not.toBeInTheDocument();
    });
  });
});
