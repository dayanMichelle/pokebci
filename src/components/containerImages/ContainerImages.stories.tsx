import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ContainerImages } from "./ContainerImages";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import "../../index.css";

export default {
  title: "ContainerImages",
  component: ContainerImages,
  argTypes: {},
} as ComponentMeta<typeof ContainerImages>;

const Template: ComponentStory<typeof ContainerImages> = (args) => (
  <ContainerImages {...args} />
);

export const Default = Template.bind({});

Default.args = {
  evolutions: pokemonMock.fire.evolutions,
  location: pokemonMock.fire.location,
  img: pokemonMock.fire.img,
};

export const WithoutIcons = Template.bind({});

WithoutIcons.args = {
  evolutions: [
    { name: "charmander", id: 1, icon: undefined! },
    { name: "charizard", id: 2, icon: undefined! },
    { name: "charmileon", id: 3, icon: undefined! },
  ],
  location: pokemonMock.fire.location,
  img: pokemonMock.fire.img,
};
