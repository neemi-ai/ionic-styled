import { IonContent } from '@ionic/react';
import React from 'react';

import paddingProps from "../core/paddingProps";
import ionicStyled from "../util/ionicStyled";
import mapStyles from '../util/mapStyles';

type Color = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark';

const CssPropMap = {
  background: "--background",
  color: "--color",
  keyboardOffset: "--keyboard-offset",
  offsetBottom: "--offset-bottom",
  offsetTop: "--offset-top",
  ...paddingProps
};

type MapKey = keyof typeof CssPropMap;

type Map = { [key in MapKey]?: string | number }

export type ContentProps = {
  children?: React.ReactNode;
  color?: Color;
} & typeof IonContent.defaultProps & Map;

const StyledIonContent = ionicStyled(IonContent)<ContentProps>(mapStyles(CssPropMap));
const Content: React.FC<ContentProps> = ({ ...props }) => {
  return (
    <StyledIonContent {...props} />
  );
};

export default Content;