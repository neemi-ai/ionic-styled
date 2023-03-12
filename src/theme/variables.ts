import { colors } from './colors';
import { IonColors } from './types';

const ionColors: IonColors = {
  /** primary * */
  ionColorPrimary: colors.primary,
  ionColorPrimaryRgb: '46, 196, 182',
  ionColorPrimaryContrast: '#FFFFFF',
  ionColorPrimaryContrastRgb: '255, 255, 255',
  ionColorPrimaryShade: '#20897f',
  ionColorPrimaryTint: '#DFF5F3',

  /** secondary * */
  ionColorSecondary: colors.secondary,
  ionColorSecondaryRgb: '255, 159, 28',
  ionColorSecondaryContrast: '#ffffff',
  ionColorSecondaryContrastRgb: '255, 255, 255',
  ionColorSecondaryShade: '#E68F19',
  ionColorSecondaryTint: '#FFECB5',

  /** tertiary * */
  ionColorTertiary: colors.tertiary,
  ionColorTertiaryRgb: '82, 96, 255',
  ionColorTertiaryContrast: '#ffffff',
  ionColorTertiaryContrastRgb: '255, 255, 255',
  ionColorTertiaryShade: '#5354a6',
  ionColorTertiaryTint: '#E9E8FC',

  /** success * */
  ionColorSuccess: '#2dd36f',
  ionColorSuccessRgb: '45, 211, 111',
  ionColorSuccessContrast: '#ffffff',
  ionColorSuccessContrastRgb: '255, 255, 255',
  ionColorSuccessShade: '#28ba62',
  ionColorSuccessTint: '#42d77d',

  /** warning * */
  ionColorWarning: '#ffc409',
  ionColorWarningRgb: '255, 196, 9',
  ionColorWarningContrast: '#000000',
  ionColorWarningContrastRgb: '0, 0, 0',
  ionColorWarningShade: '#e0ac08',
  ionColorWarningTint: '#ffca22',

  /** danger * */
  ionColorDanger: '#eb445a',
  ionColorDangerRgb: '235, 68, 90',
  ionColorDangerContrast: '#ffffff',
  ionColorDangerContrastRgb: '255, 255, 255',
  ionColorDangerShade: '#cf3c4f',
  ionColorDangerTint: '#ed576b',

  /** dark * */
  ionColorDark: '#1F2127',
  ionColorDarkRgb: '31, 33, 39',
  ionColorDarkContrast: '#ffffff',
  ionColorDarkContrastRgb: '255, 255, 255',
  ionColorDarkShade: '#16171B',
  ionColorDarkTint: '#E9E9E9',

  /** medium * */
  ionColorMedium: '#62636A',
  ionColorMediumRgb: '98, 99, 106',
  ionColorMediumContrast: '#ffffff',
  ionColorMediumContrastRgb: '255, 255, 255',
  ionColorMediumShade: '#3B3B40',
  ionColorMediumTint: '#E0E0E1',

  /** light * */
  ionColorLight: '#A0A2A8',
  ionColorLightRgb: '160, 162, 168',
  ionColorLightContrast: '#000000',
  ionColorLightContrastRgb: '0, 0, 0',
  ionColorLightShade: '#707176',
  ionColorLightTint: '#ECECEE',

  /** white * */
  ionColorWhite: '#FFFFFF',
  ionColorWhiteRgb: '255, 255, 255',
  ionColorWhiteContrast: '#1F2127',
  ionColorWhiteContrastRgb: '31, 33, 39',
  ionColorWhiteShade: '#F9F9Fc',
  ionColorWhiteTint: '#FFFFFF'
};

const variables = `
  /** Ionic CSS Variables **/
  :root {
    /** primary **/
    --ion-color-primary: ${ionColors.ionColorPrimary};
    --ion-color-primary-rgb: ${ionColors.ionColorPrimaryRgb};
    --ion-color-primary-contrast: ${ionColors.ionColorPrimaryContrast};
    --ion-color-primary-contrast-rgb: ${ionColors.ionColorPrimaryContrastRgb};
    --ion-color-primary-shade: ${ionColors.ionColorPrimaryShade};
    --ion-color-primary-tint: ${ionColors.ionColorPrimaryTint};
  
    /** secondary **/
    --ion-color-secondary: ${ionColors.ionColorSecondary};
    --ion-color-secondary-rgb: ${ionColors.ionColorSecondaryRgb};
    --ion-color-secondary-contrast: ${ionColors.ionColorSecondaryContrast};
    --ion-color-secondary-contrast-rgb: ${ionColors.ionColorSecondaryContrastRgb};
    --ion-color-secondary-shade: ${ionColors.ionColorSecondaryShade};
    --ion-color-secondary-tint: ${ionColors.ionColorSecondaryTint};
  
    /** tertiary **/
    --ion-color-tertiary: ${ionColors.ionColorTertiary};
    --ion-color-tertiary-rgb: ${ionColors.ionColorTertiaryRgb};
    --ion-color-tertiary-contrast: ${ionColors.ionColorTertiaryContrast};
    --ion-color-tertiary-contrast-rgb: ${ionColors.ionColorTertiaryContrastRgb};
    --ion-color-tertiary-shade: ${ionColors.ionColorTertiaryShade};
    --ion-color-tertiary-tint: ${ionColors.ionColorTertiaryTint};
  
    /** success **/
    --ion-color-success: ${ionColors.ionColorSuccess};
    --ion-color-success-rgb: ${ionColors.ionColorSuccessRgb};
    --ion-color-success-contrast: ${ionColors.ionColorSuccessContrast};
    --ion-color-success-contrast-rgb: ${ionColors.ionColorSuccessContrastRgb};
    --ion-color-success-shade: ${ionColors.ionColorSuccessShade};
    --ion-color-success-tint: ${ionColors.ionColorSuccessTint};
  
    /** warning **/
    --ion-color-warning: ${ionColors.ionColorWarning};
    --ion-color-warning-rgb: ${ionColors.ionColorWarningRgb};
    --ion-color-warning-contrast: ${ionColors.ionColorWarningContrast};
    --ion-color-warning-contrast-rgb: ${ionColors.ionColorWarningContrastRgb};
    --ion-color-warning-shade: ${ionColors.ionColorWarningShade};
    --ion-color-warning-tint: ${ionColors.ionColorWarningTint};
  
    /** danger **/
    --ion-color-danger: ${ionColors.ionColorDanger};
    --ion-color-danger-rgb: ${ionColors.ionColorDangerRgb};
    --ion-color-danger-contrast: ${ionColors.ionColorDangerContrast};
    --ion-color-danger-contrast-rgb: ${ionColors.ionColorDangerContrastRgb};
    --ion-color-danger-shade: ${ionColors.ionColorDangerShade};
    --ion-color-danger-tint: ${ionColors.ionColorDangerTint};
  
    /** dark **/
    --ion-color-dark: ${ionColors.ionColorDark};
    --ion-color-dark-rgb: ${ionColors.ionColorDarkRgb};
    --ion-color-dark-contrast: ${ionColors.ionColorDarkContrast};
    --ion-color-dark-contrast-rgb: ${ionColors.ionColorDarkContrastRgb};
    --ion-color-dark-shade: ${ionColors.ionColorDarkShade};
    --ion-color-dark-tint: ${ionColors.ionColorDarkTint};
  
    /** medium **/
    --ion-color-medium: ${ionColors.ionColorMedium};
    --ion-color-medium-rgb: ${ionColors.ionColorMediumRgb};
    --ion-color-medium-contrast: ${ionColors.ionColorMediumContrast};
    --ion-color-medium-contrast-rgb: ${ionColors.ionColorMediumContrastRgb};
    --ion-color-medium-shade: ${ionColors.ionColorMediumShade};
    --ion-color-medium-tint: ${ionColors.ionColorMediumTint};
  
    /** light **/
    --ion-color-light: ${ionColors.ionColorLight};
    --ion-color-light-rgb: ${ionColors.ionColorLightRgb};
    --ion-color-light-contrast: ${ionColors.ionColorLightContrast};
    --ion-color-light-contrast-rgb: ${ionColors.ionColorLightContrastRgb};
    --ion-color-light-shade: ${ionColors.ionColorLightShade};
    --ion-color-light-tint: ${ionColors.ionColorLightTint};
    
    /** white **/
    --ion-color-white: ${ionColors.ionColorWhite};
    --ion-color-white-rgb: ${ionColors.ionColorWhiteRgb};
    --ion-color-white-contrast: ${ionColors.ionColorWhiteContrast};
    --ion-color-white-contrast-rgb: ${ionColors.ionColorWhiteContrastRgb};
    --ion-color-white-shade: ${ionColors.ionColorWhiteShade};
    --ion-color-white-tint: ${ionColors.ionColorWhiteTint};
  }
  
  @media (prefers-color-scheme: dark) {
    /*
     * Dark Colors
     * -------------------------------------------
     */
  
    body {
      /** primary **/
    --ion-color-primary: ${ionColors.ionColorPrimary};
    --ion-color-primary-rgb: ${ionColors.ionColorPrimaryRgb};
    --ion-color-primary-contrast: ${ionColors.ionColorPrimaryContrast};
    --ion-color-primary-contrast-rgb: ${ionColors.ionColorPrimaryContrastRgb};
    --ion-color-primary-shade: ${ionColors.ionColorPrimaryShade};
    --ion-color-primary-tint: ${ionColors.ionColorPrimaryTint};
  
    /** secondary **/
    --ion-color-secondary: ${ionColors.ionColorSecondary};
    --ion-color-secondary-rgb: ${ionColors.ionColorSecondaryRgb};
    --ion-color-secondary-contrast: ${ionColors.ionColorSecondaryContrast};
    --ion-color-secondary-contrast-rgb: ${ionColors.ionColorSecondaryContrastRgb};
    --ion-color-secondary-shade: ${ionColors.ionColorSecondaryShade};
    --ion-color-secondary-tint: ${ionColors.ionColorSecondaryTint};
  
    /** tertiary **/
    --ion-color-tertiary: ${ionColors.ionColorTertiary};
    --ion-color-tertiary-rgb: ${ionColors.ionColorTertiaryRgb};
    --ion-color-tertiary-contrast: ${ionColors.ionColorTertiaryContrast};
    --ion-color-tertiary-contrast-rgb: ${ionColors.ionColorTertiaryContrastRgb};
    --ion-color-tertiary-shade: ${ionColors.ionColorTertiaryShade};
    --ion-color-tertiary-tint: ${ionColors.ionColorTertiaryTint};
  
    /** success **/
    --ion-color-success: ${ionColors.ionColorSuccess};
    --ion-color-success-rgb: ${ionColors.ionColorSuccessRgb};
    --ion-color-success-contrast: ${ionColors.ionColorSuccessContrast};
    --ion-color-success-contrast-rgb: ${ionColors.ionColorSuccessContrastRgb};
    --ion-color-success-shade: ${ionColors.ionColorSuccessShade};
    --ion-color-success-tint: ${ionColors.ionColorSuccessTint};
  
    /** warning **/
    --ion-color-warning: ${ionColors.ionColorWarning};
    --ion-color-warning-rgb: ${ionColors.ionColorWarningRgb};
    --ion-color-warning-contrast: ${ionColors.ionColorWarningContrast};
    --ion-color-warning-contrast-rgb: ${ionColors.ionColorWarningContrastRgb};
    --ion-color-warning-shade: ${ionColors.ionColorWarningShade};
    --ion-color-warning-tint: ${ionColors.ionColorWarningTint};
  
    /** danger **/
    --ion-color-danger: ${ionColors.ionColorDanger};
    --ion-color-danger-rgb: ${ionColors.ionColorDangerRgb};
    --ion-color-danger-contrast: ${ionColors.ionColorDangerContrast};
    --ion-color-danger-contrast-rgb: ${ionColors.ionColorDangerContrastRgb};
    --ion-color-danger-shade: ${ionColors.ionColorDangerShade};
    --ion-color-danger-tint: ${ionColors.ionColorDangerTint};
  
    /** dark **/
    --ion-color-dark: ${ionColors.ionColorDark};
    --ion-color-dark-rgb: ${ionColors.ionColorDarkRgb};
    --ion-color-dark-contrast: ${ionColors.ionColorDarkContrast};
    --ion-color-dark-contrast-rgb: ${ionColors.ionColorDarkContrastRgb};
    --ion-color-dark-shade: ${ionColors.ionColorDarkShade};
    --ion-color-dark-tint: ${ionColors.ionColorDarkTint};
  
    /** medium **/
    --ion-color-medium: ${ionColors.ionColorMedium};
    --ion-color-medium-rgb: ${ionColors.ionColorMediumRgb};
    --ion-color-medium-contrast: ${ionColors.ionColorMediumContrast};
    --ion-color-medium-contrast-rgb: ${ionColors.ionColorMediumContrastRgb};
    --ion-color-medium-shade: ${ionColors.ionColorMediumShade};
    --ion-color-medium-tint: ${ionColors.ionColorMediumTint};
  
    /** light **/
    --ion-color-light: ${ionColors.ionColorLight};
    --ion-color-light-rgb: ${ionColors.ionColorLightRgb};
    --ion-color-light-contrast: ${ionColors.ionColorLightContrast};
    --ion-color-light-contrast-rgb: ${ionColors.ionColorLightContrastRgb};
    --ion-color-light-shade: ${ionColors.ionColorLightShade};
    --ion-color-light-tint: ${ionColors.ionColorLightTint};
    
    /** white **/
    --ion-color-white: ${ionColors.ionColorWhite};
    --ion-color-white-rgb: ${ionColors.ionColorWhiteRgb};
    --ion-color-white-contrast: ${ionColors.ionColorWhiteContrast};
    --ion-color-white-contrast-rgb: ${ionColors.ionColorWhiteContrastRgb};
    --ion-color-white-shade: ${ionColors.ionColorWhiteShade};
    --ion-color-white-tint: ${ionColors.ionColorWhiteTint};
    }
  
    /*
     * iOS Dark Theme
     * -------------------------------------------
     */
  
    .ios body {
      --ion-background-color: #ffffff;
      --ion-background-color-rgb: 255,255,255;
  
      --ion-text-color: #ffffff;
      --ion-text-color-rgb: 255,255,255;
  
      --ion-color-step-50: #0d0d0d;
      --ion-color-step-100: #1a1a1a;
      --ion-color-step-150: #262626;
      --ion-color-step-200: #333333;
      --ion-color-step-250: #404040;
      --ion-color-step-300: #4d4d4d;
      --ion-color-step-350: #595959;
      --ion-color-step-400: #666666;
      --ion-color-step-450: #737373;
      --ion-color-step-500: #808080;
      --ion-color-step-550: #8c8c8c;
      --ion-color-step-600: #999999;
      --ion-color-step-650: #a6a6a6;
      --ion-color-step-700: #b3b3b3;
      --ion-color-step-750: #bfbfbf;
      --ion-color-step-800: #cccccc;
      --ion-color-step-850: #d9d9d9;
      --ion-color-step-900: #e6e6e6;
      --ion-color-step-950: #f2f2f2;
  
      --ion-item-background: #000000;
  
      --ion-card-background: #1c1c1d;
    }
  
    .ios ion-modal {
      --ion-background-color: var(--ion-color-step-100);
      --ion-toolbar-background: var(--ion-color-step-150);
      --ion-toolbar-border-color: var(--ion-color-step-250);
    }
  
  
    /*
     * Material Design Dark Theme
     * -------------------------------------------
     */
  
    .md body {
      --ion-background-color: #121212;
      --ion-background-color-rgb: 18,18,18;
  
      --ion-text-color: #ffffff;
      --ion-text-color-rgb: 255,255,255;
  
      --ion-border-color: #222222;
  
      --ion-color-step-50: #1e1e1e;
      --ion-color-step-100: #2a2a2a;
      --ion-color-step-150: #363636;
      --ion-color-step-200: #414141;
      --ion-color-step-250: #4d4d4d;
      --ion-color-step-300: #595959;
      --ion-color-step-350: #656565;
      --ion-color-step-400: #717171;
      --ion-color-step-450: #7d7d7d;
      --ion-color-step-500: #898989;
      --ion-color-step-550: #949494;
      --ion-color-step-600: #a0a0a0;
      --ion-color-step-650: #acacac;
      --ion-color-step-700: #b8b8b8;
      --ion-color-step-750: #c4c4c4;
      --ion-color-step-800: #d0d0d0;
      --ion-color-step-850: #dbdbdb;
      --ion-color-step-900: #e7e7e7;
      --ion-color-step-950: #f3f3f3;
  
      --ion-item-background: #1e1e1e;
  
      --ion-toolbar-background: #1f1f1f;
  
      --ion-tab-bar-background: #1f1f1f;
  
      --ion-card-background: #1e1e1e;
    }
  }
  
  .ion-color-white {
  --ion-color-base: ${ionColors.ionColorWhite};
  --ion-color-base-rgb: ${ionColors.ionColorWhiteRgb};
  --ion-color-contrast: ${ionColors.ionColorWhiteContrast};
  --ion-color-contrast-rgb: ${ionColors.ionColorWhiteContrastRgb};
  --ion-color-shade: ${ionColors.ionColorWhiteShade};
  --ion-color-tint: ${ionColors.ionColorWhiteTint};
}
`;

export default variables;
