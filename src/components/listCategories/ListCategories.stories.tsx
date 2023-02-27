import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ListCategories } from "./ListCategories";
import { ProviderMock } from "../../test/mocks/providerMock";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import "../../index.css";

export default {
  title: "ListCategories",
  component: ListCategories,
  argTypes: {},
} as ComponentMeta<typeof ListCategories>;

const Template: ComponentStory<typeof ListCategories> = (args) => (
  <ProviderMock>
    <ListCategories {...args} />
  </ProviderMock>
);

export const Default = Template.bind({});

Default.args = {
  listTypes: pokemonMock.fire.abilities,
  title: "Abilities",
  category: "abilities",
};
