import { it, describe, expect, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { LoadMore } from "./LoadMore";

describe("LoadMore", () => {
  it("renders component", () => {
    const { getByRole } = render(<LoadMore getPokemons={() => {}} />);
    const buttonElement = getByRole("button", {
      name: "Load More Pokemons...",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it("the button executes the getPokemons function", () => {
    const mockFunction = vi.fn();
    const { getByRole } = render(<LoadMore getPokemons={mockFunction} />);
    const buttonElement = getByRole("button", {
      name: "Load More Pokemons...",
    });

    fireEvent.click(buttonElement);
    expect(mockFunction).toBeCalled();
  });
});
