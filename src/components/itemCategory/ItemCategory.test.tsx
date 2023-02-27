import { render } from "@testing-library/react";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import { ProviderMock } from "../../test/mocks/providerMock";
import { ItemCategory } from "./ItemCategory";

describe("ItemCategory", () => {
  const category = "abilities";
  const type = pokemonMock.fire.abilities[0];

  test("renders component", () => {
    const { getByText } = render(
      <ProviderMock>
        <ItemCategory category={category} type={type} />
      </ProviderMock>
    );
    const componentElement = getByText(type);
    expect(componentElement).toBeInTheDocument();
  });

  it("renders the category link with the correct URL and text", () => {
    const { getByText } = render(
      <ProviderMock>
        <ItemCategory category={category} type={type} />
      </ProviderMock>
    );

    const linkElement = getByText(type);
    expect(linkElement).toHaveAttribute("href", `/${category}/${type}`);
  });
});
