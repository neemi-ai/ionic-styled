import { Meta, Story } from '@storybook/react';
import { logoChrome,logoIonic } from 'ionicons/icons'

import Icon, { type IconProps } from "../components/Icon"
import flip from "../custom/flip.svg"
import PreviewTemplate from "./PreviewTemplate";

const IconMeta: Meta<IconProps> = {
  title: 'Ionic Styled/Icon',
  component: Icon,
  argTypes: {
    fontSize: {
      defaultValue: 24,
      control: {
        type: 'text'
      }
    }
  }
};
export default IconMeta;
const Template: Story<IconProps> = args => (
  <PreviewTemplate>
    <Icon {...args} />
  </PreviewTemplate>
);

export const Default: Story<IconProps> = Template.bind({});
Default.args = {
  icon: logoIonic
};

export const CursorPointer: Story<IconProps>  = Template.bind({});
CursorPointer.args = {
  icon: logoChrome,
  cursor: 'pointer'
};

export const FontSizeExample: Story<IconProps>  = Template.bind({});
FontSizeExample.args = {
  icon: logoIonic,
  fontSize: 36
};

export const CustomIcon: Story<IconProps>  = Template.bind({});
CustomIcon.args = {
  src: flip,
  fontSize: 36
};