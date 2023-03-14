import { IonButton, IonIcon } from '@ionic/react';

import paddingProps from "../custom/paddingProps";
import ionicStyled from "../util/ionicStyled";
import mapStyles from '../util/mapStyles';

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
  rippleColor: '--ripple-color',
  transition: '--transition',
  ...paddingProps
};

type MapKey = keyof typeof CssPropMap;

type Map = { [key in MapKey]?: string };

export type ButtonProps = {
  leftIcon?: string;
  rightIcon?: string;
} & typeof IonButton.defaultProps & Map;

const StyledIonButton = ionicStyled(IonButton)<ButtonProps>(mapStyles(CssPropMap));

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
