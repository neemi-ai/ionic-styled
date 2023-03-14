import { Meta, Story } from '@storybook/react';
import { logoChrome,logoIonic } from 'ionicons/icons'

import Icon  from '../components/Icon';
import { type IconProps } from "../components/Icon"
import PreviewTemplate from "./PreviewTemplate";

export default {
  title: 'Ionic Styled/Icon',
  component: Icon,
  argTypes: {}
} as Meta<typeof Icon>;

const Template: Story<IconProps> = args => (
  <PreviewTemplate>
    <Icon {...args} />
  </PreviewTemplate>
);

export const Default = Template.bind({});
Default.args = {
  icon: logoIonic
};

export const CursorPointer = Template.bind({});
CursorPointer.args = {
  icon: logoChrome,
  cursor: 'pointer'
};

export const FontSizeExample = Template.bind({});
FontSizeExample.args = {
  icon: logoIonic,
  fontSize: 36
};