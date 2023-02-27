import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { ProviderMock } from "../../test/mocks/providerMock";
import { SideBar } from "./SideBar";

describe("sidebar", () => {
  it("renders component", () => {
    const { container } = render(
      <ProviderMock>
        <SideBar show={false} />
      </ProviderMock>
    );

    expect(container).toBeInTheDocument();
  });
});
