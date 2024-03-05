import React from "react";
import { Meta, Story } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";
import { defaultTheme, darkTheme } from "../../utils";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};
export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  primary: true,
  text: 'Button',
};
DefaultTheme.decorators = [(Story) => (
  // <ThemeProvider theme={defaultTheme}>
    <Story />
  // </ThemeProvider>
)];


export const DarkTheme = Template.bind({});
DarkTheme.args = {
  primary:true,
  text: 'Dark Theme Button'
};
DarkTheme.decorators = [(Story) => (
  // <ThemeProvider theme = {darkTheme}>
    <Story />
  // </ThemeProvider>
)];


export const Small = Template.bind({});
Small.args = {
  primary: true,
  text: 'Small Button',
};
// Small.decorators = [(Story) => (
//   // <ThemeProvider theme={defaultTheme}>
//     <Story />
//   // </ThemeProvider>
// )];

export const Large = Template.bind({});
Large.args = {
  primary: true,
  text: 'Large Button',
}
Large.decorators = [(Story) => (
  // <ThemeProvider theme={defaultTheme}>
    <Story />
  // </ThemeProvider>
)];

export const Disabled = Template.bind({});
Disabled.args = {
  primary: true,
  text: 'Disabled',
  disabled: true,
};
Disabled.decorators = [(Story) => (
  // <ThemeProvider theme={darkTheme}>
    <Story />
  // </ThemeProvider>
)];

export const Success = Template.bind({});
Success.args = {
  primary: true,
  text: 'Success',
  // isSuccess: true,
};
Success.decorators = [(Story) => (
  // <ThemeProvider theme={darkTheme}>
    <Story />
  // </ThemeProvider>
)];


export const Error = Template.bind({});
Error.args = {
  primary: true,
  text: 'Error',
  // isError: true,
};
Error.decorators = [(Story) => (
  // <ThemeProvider theme={darkTheme}>
    <Story />
  // </ThemeProvider>
)];

export const Warning = Template.bind({});
Warning.args = {
  primary: true,
  text: 'Warning',
  // isWarning: true,
};
Warning.decorators = [(Story) => (
  // <ThemeProvider theme={darkTheme}>
    <Story />
  // </ThemeProvider>
)];
