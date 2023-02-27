import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardSkills } from "./CardSkills";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import "../../index.css";

export default {
  title: "CardSkills",
  component: CardSkills,
  argTypes: {},
} as ComponentMeta<typeof CardSkills>;

const Template: ComponentStory<typeof CardSkills> = (args) => (
  <CardSkills {...args} />
);

export const Default = Template.bind({});

Default.args = {
  name: pokemonMock.fire.name,
  moves: pokemonMock.fire.moves.slice(0, 4),
  abilities: pokemonMock.fire.abilities.slice(0, 4),
};
