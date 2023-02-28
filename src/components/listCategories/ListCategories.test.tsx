import { it, describe, expect } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import { ProviderMock } from "../../test/mocks/providerMock";
import { ListCategories } from "./ListCategories";

describe("ListCategories", () => {
  const listTypes = pokemonMock.fire.abilities;
  const title = "Abilities";
  const category = "abilities";

  it("renders component", () => {
    const { container } = render(
      <ProviderMock>
        <ListCategories
          listTypes={listTypes}
          title={title}
          category={category}
        />
      </ProviderMock>
    );
    expect(container).toBeInTheDocument();
  });

  it("render title and quantity", () => {
    const { getByText } = render(
      <ProviderMock>
        <ListCategories
          listTypes={listTypes}
          title={title}
          category={category}
        />
      </ProviderMock>
    );

    const componentTitle = getByText(`${title}:`);
    expect(componentTitle).toBeInTheDocument();

    const componentCount = getByText(listTypes.length);
    expect(componentCount).toBeInTheDocument();
  });

  it("renders the list of items when I click on the category", () => {
    const { getByText } = render(
      <ProviderMock>
        <ListCategories
          listTypes={listTypes}
          title={title}
          category={category}
        />
      </ProviderMock>
    );

    const componentTitle = getByText(`${title}:`);
    fireEvent.click(componentTitle);

    listTypes.forEach((type) => {
      const componentType = getByText(type);
      expect(componentType).toBeInTheDocument();
    });
  });
});
