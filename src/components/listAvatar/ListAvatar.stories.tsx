import { ComponentStory, ComponentMeta } from "@storybook/react";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import { ListAvatar } from "./ListAvatar";

export default {
  title: "ListAvatar",
  component: ListAvatar,
  argTypes: {},
} as ComponentMeta<typeof ListAvatar>;

const Template: ComponentStory<typeof ListAvatar> = (args) => (
  <ListAvatar {...args} />
);

export const Default = Template.bind({});

Default.args = {
  evolutions: pokemonMock.fire.evolutions,
};

export const WithoutIcon = Template.bind({});

WithoutIcon.args = {
  evolutions: [
    { name: "charmander", id: 4, icon: undefined! },
    { name: "charmeleon", id: 5, icon: undefined! },
    { name: "charizard", id: 6, icon: undefined! },
  ],
};
