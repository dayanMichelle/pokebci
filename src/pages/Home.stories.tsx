import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Home } from "./Home";
import { ProviderMock } from "../test/mocks/providerMock";
import "../index.css";

export default {
  title: "Home",
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => (
  <ProviderMock>
    <Home />
  </ProviderMock>
);

export const Default = Template.bind({});

Default.args = {};
