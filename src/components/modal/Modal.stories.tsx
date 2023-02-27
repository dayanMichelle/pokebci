import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "./Modal";
import "../../index.css";

export default {
  title: "Modal",
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <p>Hola mundo</p>,
};
