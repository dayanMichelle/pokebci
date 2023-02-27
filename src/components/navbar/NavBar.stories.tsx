import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavBar } from "./NavBar";
import { ProviderMock } from "../../test/mocks/providerMock";
import "../../index.css";

export default {
  title: "NavBar",
  component: NavBar,
  argTypes: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => (
  <ProviderMock>
    <NavBar {...args} />
  </ProviderMock>
);
export const Default = Template.bind({});

Default.args = {
  show: false,
  handleShow: () => {},
};

export const ShowSideBar = Template.bind({});

ShowSideBar.args = {
  show: true,
  handleShow: () => {},
};
