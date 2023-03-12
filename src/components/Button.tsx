import styled from '@emotion/styled';
import { IonButton, IonIcon } from '@ionic/react';
import React from 'react';

import mapStyles from '../util/mapStyles';

type Size = 'default' | 'small' | 'large';
type Expand = 'full' | 'block';
type Shape = 'round';
type Fill = 'solid' | 'outline' | 'clear';
type Color = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark';

const CssPropMap = {
  background: '--background',
  backgroundActivated: '--background-activated',
  backgroundActivatedOpacity: '--background-activated-opacity',
  backgroundFocused: '--background-focused',
  backgroundFocusedOpacity: '--background-focused-opacity',
  backgroundHover: '--background-hover',
  backgroundHoverOpacity: '--background-hover-opacity',
  borderColor: '--border-color',
  borderRadius: '--border-radius',
  borderStyle: '--border-style',
  borderWidth: '--border-width',
  boxShadow: '--box-shadow',
  color: '--color',
  colorActivated: '--color-activated',
  colorFocused: '--color-focused',
  colorHover: '--color-hover',
  opacity: '--opacity',
  paddingBottom: '--padding-bottom',
  paddingEnd: '--padding-end',
  paddingStart: '--padding-start',
  paddingTop: '--padding-top',
  rippleColor: '--ripple-color',
  transition: '--transition'
};

type MapKey = keyof typeof CssPropMap;

type Map = { [key in MapKey]?: string };

export type ButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
  leftIcon?: string;
  rightIcon?: string;
  expand?: Expand;
  fill?: Fill;
  size?: Size;
  shape?: Shape;
  color?: Color;
} & typeof IonButton.defaultProps & Map;

const StyledIonButton = styled(IonButton)<ButtonProps>(mapStyles(CssPropMap));

const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  size = 'default',
  shape,
  ...props
}) => {
  const getIcon = () => {
    if (leftIcon) {
      return <IonIcon icon={leftIcon} slot="start" src={leftIcon} />;
    }

    if (rightIcon) {
      return <IonIcon icon={rightIcon} slot="end" src={rightIcon} />;
    }

    return null;
  };

  return (
    <StyledIonButton {...props} shape={shape} size={size || 'small'}>
      {getIcon()}
      {children}
    </StyledIonButton>
  );
};

export default Button;
