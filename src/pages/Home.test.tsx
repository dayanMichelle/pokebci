import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { Home } from "./Home";
import { ProviderMock } from "../test/mocks/providerMock";

describe("Home", () => {
  it("renders page", () => {
    const { container } = render(
      <ProviderMock>
        <Home />
      </ProviderMock>
    );
    expect(container).toBeInTheDocument();
  });
});
