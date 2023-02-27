import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InfoPokemon } from "./InfoPokemon";

export default {
  title: "InfoPokemon",
  component: InfoPokemon,
  argTypes: {},
} as ComponentMeta<typeof InfoPokemon>;

const Template: ComponentStory<typeof InfoPokemon> = (args) => (
  <InfoPokemon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  id: 3,
  name: "pikachu",
};
