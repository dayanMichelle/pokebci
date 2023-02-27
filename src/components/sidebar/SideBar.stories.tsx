import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SideBar } from "./SideBar";
import { ProviderMock } from "../../test/mocks/providerMock";
import "../../index.css";

export default {
  title: "SideBar",
  component: SideBar,
  argTypes: {},
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => (
  <ProviderMock>
    <SideBar {...args} />
  </ProviderMock>
);
export const Default = Template.bind({});

Default.args = {
  show: false,
};

export const Show = Template.bind({});

Show.args = {
  show: true,
};
