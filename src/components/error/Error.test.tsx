import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { ProviderMock } from "../../test/mocks/providerMock";
import { Error } from "./Error";

describe("Error", () => {
  it("renders component", () => {
    const { getByText } = render(
      <ProviderMock>
        <Error />
      </ProviderMock>
    );
    const componentElement = getByText("Pokemon not found");
    expect(componentElement).toBeInTheDocument();
  });
});
