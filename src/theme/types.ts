import {
  BackgroundProps,
  BorderProps, ColorProps,
  FlexboxProps,
  LayoutProps,
  ShadowProps,
  SizeProps,
  SpaceProps,
  TypographyProps
} from 'styled-system';

export type IonColors = {

  /** primary * */
  ionColorPrimary: string;
  ionColorPrimaryRgb: string;
  ionColorPrimaryContrast: string;
  ionColorPrimaryContrastRgb: string;
  ionColorPrimaryShade: string;
  ionColorPrimaryTint: string;

  /** secondary * */
  ionColorSecondary: string;
  ionColorSecondaryRgb: string;
  ionColorSecondaryContrast: string;
  ionColorSecondaryContrastRgb: string;
  ionColorSecondaryShade: string;
  ionColorSecondaryTint: string;

  /** tertiary * */
  ionColorTertiary: string;
  ionColorTertiaryRgb: string;
  ionColorTertiaryContrast: string;
  ionColorTertiaryContrastRgb: string;
  ionColorTertiaryShade: string;
  ionColorTertiaryTint: string;

  /** success * */
  ionColorSuccess: string;
  ionColorSuccessRgb: string;
  ionColorSuccessContrast: string;
  ionColorSuccessContrastRgb: string;
  ionColorSuccessShade: string;
  ionColorSuccessTint: string;

  /** warning * */
  ionColorWarning: string;
  ionColorWarningRgb: string;
  ionColorWarningContrast: string;
  ionColorWarningContrastRgb: string;
  ionColorWarningShade: string;
  ionColorWarningTint: string;

  /** danger * */
  ionColorDanger: string;
  ionColorDangerRgb: string;
  ionColorDangerContrast: string;
  ionColorDangerContrastRgb: string;
  ionColorDangerShade: string;
  ionColorDangerTint: string;

  /** dark * */
  ionColorDark: string;
  ionColorDarkRgb: string;
  ionColorDarkContrast: string;
  ionColorDarkContrastRgb: string;
  ionColorDarkShade: string;
  ionColorDarkTint: string;

  /** medium * */
  ionColorMedium: string;
  ionColorMediumRgb: string;
  ionColorMediumContrast: string;
  ionColorMediumContrastRgb: string;
  ionColorMediumShade: string;
  ionColorMediumTint: string;

  /** light * */
  ionColorLight: string;
  ionColorLightRgb: string;
  ionColorLightContrast: string;
  ionColorLightContrastRgb: string;
  ionColorLightShade: string;
  ionColorLightTint: string;

  /** white * */
  ionColorWhite: string;
  ionColorWhiteRgb: string;
  ionColorWhiteContrast: string;
  ionColorWhiteContrastRgb: string;
  ionColorWhiteShade: string;
  ionColorWhiteTint: string;
};

export type Colors = {
  primary: string;
  secondary: string;
  tertiary: string;
  blue: string;
  green: string;
  yellow: string;
  pink: string;
  purple: string;
  orange: string;
  white: string;
  puertoRico: string;
  cornflower: string;
  poppy: string;
  salmon: string;
  iceberg: string;
  perfume: string;
  buttermilk: string;
  linen: string;
  whisper: string;
  athens: string;
  santas: string;
  mid: string;
  black: string;
  accent: object;
  greyScale: object;
  text: { light: string, medium: string, dark: string };
  background: string;
  borders: string;
  inputBackground: string;
};

export type Shadows = {
  primary: string;
  elevated: string;
};

export type Borders = {
  primary: string;
};

export type Radii = {
  primary: string,
  secondary: string
};

export type ThemeType = {
  colors: Colors;
  shadows: Shadows;
  radii: Radii;
  borders: Borders;
};

export type StyledProps = {
  theme?: ThemeType;
};

export type BoxStyleProps = React.ComponentProps<any>
& SpaceProps
& FlexboxProps
& SizeProps
& ShadowProps
& LayoutProps
& BorderProps
& BackgroundProps
& ColorProps
& TypographyProps
& {
  cursor?: string;
};
