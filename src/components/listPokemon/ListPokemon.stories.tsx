import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ListPokemon } from "./ListPokemon";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import "../../index.css";

export default {
  title: "ListPokemon",
  component: ListPokemon,
  argTypes: {},
} as ComponentMeta<typeof ListPokemon>;

const Template: ComponentStory<typeof ListPokemon> = (args) => (
  <ListPokemon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  pokemons: [pokemonMock.fire, pokemonMock.grass],
};
