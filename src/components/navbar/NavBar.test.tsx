import { it, describe, expect, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { ProviderMock } from "../../test/mocks/providerMock";

describe("NavBar", () => {
  const handleShowMock = vi.fn();
  it("renders component", () => {
    const { container } = render(
      <ProviderMock>
        <NavBar show={false} handleShow={handleShowMock} />
      </ProviderMock>
    );

    expect(container).toBeInTheDocument();
  });

  it("the click of the menu button works", () => {
    const { container, getByRole } = render(
      <ProviderMock>
        <NavBar show={false} handleShow={handleShowMock} />
      </ProviderMock>
    );

    expect(container).toBeInTheDocument();

    const componentMenuButton = getByRole("button");
    fireEvent.click(componentMenuButton);

    expect(handleShowMock).toBeCalledTimes(1);
  });
});
