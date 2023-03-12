import { Meta, Story } from '@storybook/react';
import React from 'react';

import Button  from '../components/Button';
import { type ButtonProps } from "../components/Button"
import PreviewTemplate from "../core/PreviewTemplate";

export default {
  title: 'Ionic Styled/Button',
  component: Button,
  argTypes: {}
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = args => (
  <PreviewTemplate>
    <Button {...args} />
  </PreviewTemplate>
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  children: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: false,
  children: "Secondary",
  color: "secondary"
};

export const Teriary = Template.bind({});
Teriary.args = {
  disabled: false,
  children: "Teriary",
  color: "tertiary"
};

export const Outline = Template.bind({});
Outline.args = {
  disabled: false,
  children: "Outline",
  fill: "outline"
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled'
};

export const Small = Template.bind({});
Small.args = {
  disabled: false,
  size:"small",
  children: 'Small'
};

export const Large = Template.bind({});
Large.args = {
  disabled: false,
  size:"large",
  children: 'Large'
};

export const Padding = Template.bind({});
Padding.args = {
  disabled: false,
  padding: "8px",
  children: 'Padding'
};