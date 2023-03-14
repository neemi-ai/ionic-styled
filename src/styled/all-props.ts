import {
  background, type BackgroundProps,
  border, type BorderProps,
  color, type ColorProps,
  flexbox, type FlexboxProps,
  layout, type LayoutProps, position, PositionProps,
  shadow, type ShadowProps,
  size, type SizeProps,
  space, type SpaceProps,
  typography, type TypographyProps
} from "styled-system";

export type AllProps = React.ComponentProps<any>
    & BackgroundProps
    & BorderProps
    & ColorProps
    & FlexboxProps
    & LayoutProps
    & PositionProps
    & ShadowProps
    & SizeProps
    & SpaceProps
    & TypographyProps
    & { cursor?: string; };

export const allProps = [
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  size,
  space,
  typography,
  (cursor?: string) => ({ cursor: cursor || 'default' })
];
