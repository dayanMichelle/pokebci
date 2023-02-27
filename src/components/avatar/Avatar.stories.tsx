import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const WithAvatar = Template.bind({});

WithAvatar.args = {
  icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  name: "charmander",
};
