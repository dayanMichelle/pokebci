import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Logo } from "./Logo";
import "../../index.css";

export default {
  title: "Logo",
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});

Default.args = {
  animate: false,
  width: "30px",
};

export const Animate = Template.bind({});

Animate.args = {
  animate: true,
};
