import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from "./Layout";
import { ProviderMock } from "../test/mocks/providerMock";
import "../index.css";

export default {
  title: "Layout",
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = () => (
  <ProviderMock>
    <Layout />
  </ProviderMock>
);
export const Default = Template.bind({});

Default.args = {};
