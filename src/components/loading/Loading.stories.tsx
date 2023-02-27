import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Loading } from "./Loading";
import "../../index.css";

export default {
  title: "Loading",
  component: Loading,
  argTypes: {},
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const Default = Template.bind({});

Default.args = {};
