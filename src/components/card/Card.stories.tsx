import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./Card";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import "../../index.css";

export default {
  title: "Card",
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  pokemon: pokemonMock.fire,
};
