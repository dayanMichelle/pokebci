import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders component", () => {
    const { getByAltText } = render(
      <Avatar icon="https://image.pngaaa.com/819/3998819-middle.png" />
    );
    const componentElement = getByAltText("Icono de la evolucion");
    expect(componentElement).toBeInTheDocument();
  });
});
