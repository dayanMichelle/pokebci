import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Error } from "./Error";
import { ProviderMock } from "../../test/mocks/providerMock";
import "../../index.css";

export default {
  title: "Error",
  component: Error,
  argTypes: {},
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => (
  <ProviderMock>
    <Error {...args} />
  </ProviderMock>
);

export const Default = Template.bind({});

Default.args = {};
