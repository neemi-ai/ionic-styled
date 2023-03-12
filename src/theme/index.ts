import { colors } from './colors';
import { shadows } from './shadows';
import type { ThemeType } from './types';

const theme: ThemeType = {
  colors,
  shadows,
  radii: { primary: '8px', secondary: '60px' },
  borders: { primary: `1px solid ${colors.borders}` }
};

export default theme;
