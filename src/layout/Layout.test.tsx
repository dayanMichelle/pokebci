import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { Layout } from "./Layout";
import { ProviderMock } from "../test/mocks/providerMock";

describe("Layout", () => {
  it("renders component", () => {
    const { container } = render(
      <ProviderMock>
        <Layout  />
      </ProviderMock>
    );
    expect(container).toBeInTheDocument();
  });
});
