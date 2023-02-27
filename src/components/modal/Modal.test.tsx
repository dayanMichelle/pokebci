import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("renders component", () => {
    const { container } = render(
      <Modal>
        <p>Hola mundo</p>
      </Modal>
    );
    expect(container).toBeInTheDocument();
  });
  it("esta el children", () => {
    const { getByText } = render(
      <Modal>
        <p>Hola mundo</p>
      </Modal>
    );
    const element = getByText("Hola mundo");
    expect(element).toBeInTheDocument();
  });
});
