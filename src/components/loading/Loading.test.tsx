import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading", () => {
  it("renders component", () => {
    const { getByAltText } = render(<Loading />);
    const componentElement = getByAltText("logo pokemon");
    expect(componentElement).toBeInTheDocument();
  });
});
