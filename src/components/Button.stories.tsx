import { IonContent } from "@ionic/react";
import { Meta, Story } from '@storybook/react';
import React from 'react';

import IonicStyled from "../core/IonicStyled";
import Button  from './Button';
import { type ButtonProps } from "./Button"

export default {
  title: 'Ionic Styled/Button',
  component: Button,
  argTypes: {}
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = args => (
    <IonicStyled>
      <IonContent>
        <Button {...args} />
      </IonContent>
    </IonicStyled>
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  children: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: false,
  children: "Secondary"
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

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  children: 'Default'
};

export const Large = Template.bind({});
Large.args = {
  disabled: false,
  size:"large",
  children: 'Large'
};