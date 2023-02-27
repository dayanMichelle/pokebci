import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ListSkills } from "./ListSkills";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import '../../index.css'

export default {
  title: "ListSkills",
  component: ListSkills,
  argTypes: {},
} as ComponentMeta<typeof ListSkills>;

const Template: ComponentStory<typeof ListSkills> = (args) => (
  <ListSkills {...args} />
);

export const Abilities = Template.bind({});

Abilities.args = {
  skills: pokemonMock.fire.abilities.slice(0,4),
};

export const Moves = Template.bind({});

Moves.args = {
  skills: pokemonMock.fire.moves.slice(0,4),
};
