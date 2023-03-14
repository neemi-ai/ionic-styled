import styled from '@emotion/styled';
import { IonIcon } from '@ionic/react';

import mapStyles from "../util/mapStyles";

const CssPropMap = {};

type MapKey = keyof typeof CssPropMap;

type Map = { [key in MapKey]?: string };

export type IconProps = {
  src?: string;
  icon?: string;
  fontSize?: string | number;
  cursor?: string;
  onClick?: () => void;
  id?: string;
} & typeof IonIcon.defaultProps & Map;

const StyledIcon = styled(IonIcon)<IconProps>(
  mapStyles(CssPropMap),
  ({ cursor }: { cursor?: string }) => ({ cursor: cursor || 'default' }),
  ({ fontSize }: { fontSize?: string | number }) => {
    if (typeof fontSize === 'number' && fontSize < 8) {
      return {
        fontSize: `${16 + fontSize + (4 * (fontSize - 1))}px`
      };
    } else if (typeof fontSize === 'number') {
      return {
        fontSize: `${fontSize}px`
      };
    } else {
      return {
        fontSize: fontSize
      };
    }
  }
)

const Icon: React.FC<IconProps> = ({
  fontSize = 16,
  src,
  icon,
  onClick,
  id,
  color = 'primary',
  ...props
}) => {
  return (
    <StyledIcon
      color={color}
      fontSize={fontSize}
      icon={icon}
      id={id}
      src={src}
      onClick={onClick}
      {...props} />
  );
};

export default Icon;