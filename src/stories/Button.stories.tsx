import { Meta, Story } from '@storybook/react';
import React from 'react';

import Button  from '../components/Button';
import { type ButtonProps } from "../components/Button"
import PreviewTemplate from "./PreviewTemplate";

const ButtonMeta: Meta<ButtonProps> = {
  title: 'Ionic Styled/Button',
  component: Button,
  argTypes: {}
};

export default ButtonMeta;

const Template: Story<ButtonProps> = args => (
  <PreviewTemplate>
    <Button {...args} />
  </PreviewTemplate>
);

export const Primary: Story<ButtonProps> = Template.bind({});
Primary.args = {
  disabled: false,
  children: 'Primary'
};

export const Secondary: Story<ButtonProps>  = Template.bind({});
Secondary.args = {
  disabled: false,
  children: "Secondary",
  color: "secondary"
};

export const Teriary: Story<ButtonProps>  = Template.bind({});
Teriary.args = {
  disabled: false,
  children: "Teriary",
  color: "tertiary"
};

export const Outline: Story<ButtonProps>  = Template.bind({});
Outline.args = {
  disabled: false,
  children: "Outline",
  fill: "outline"
};

export const Disabled: Story<ButtonProps>  = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled'
};

export const Small: Story<ButtonProps>  = Template.bind({});
Small.args = {
  disabled: false,
  size:"small",
  children: 'Small'
};

export const Large: Story<ButtonProps>  = Template.bind({});
Large.args = {
  disabled: false,
  size:"large",
  children: 'Large'
};

export const Padding: Story<ButtonProps>  = Template.bind({});
Padding.args = {
  disabled: false,
  padding: "8px",
  children: 'Padding'
};