import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("renders component", () => {
    const { getByAltText } = render(<Logo />);
    const componentElement = getByAltText("logo pokemon");
    expect(componentElement).toBeInTheDocument();
  });
});
