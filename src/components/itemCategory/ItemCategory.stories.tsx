import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ItemCategory } from "./ItemCategory";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import { ProviderMock } from "../../test/mocks/providerMock";
import "../../index.css";

export default {
  title: "ItemCategory",
  component: ItemCategory,
  argTypes: {},
} as ComponentMeta<typeof ItemCategory>;

const Template: ComponentStory<typeof ItemCategory> = (args) => (
  <ProviderMock>
    <ItemCategory {...args} />
  </ProviderMock>
);

export const Default = Template.bind({});

Default.args = {
  category: "abilities",
  type: pokemonMock.fire.abilities[0],
};
