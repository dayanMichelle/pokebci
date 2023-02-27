import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoadMore } from "./LoadMore";
import "../../index.css";

export default {
  title: "LoadMore",
  component: LoadMore,
  argTypes: {},
} as ComponentMeta<typeof LoadMore>;

const Template: ComponentStory<typeof LoadMore> = (args) => (
  <LoadMore {...args} />
);

export const Default = Template.bind({});

Default.args = {
  getPokemons: () => console.log("click"),
};
