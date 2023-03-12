import { type Colors } from './types';

const blue = '#156064';
const puertoRico = '#2EC4B6';
const cornflower = '#7678ED';
const poppy = '#FF9F1C';
const salmon = '#FB8F67';
const iceberg = '#DFF5F3';
const perfume = '#E9E8FC';
const buttermilk = '#FFECB5';
const linen = '#FAEAE7';
const white = '#FFFFFF';
const whisper = '#F9F9FC';
const athens = '#E6E8EE';
const santas = '#A0A2A8';
const mid = '#62636A';
const black = '#1F2127';

export const colors: Colors = {
  green: puertoRico,
  yellow: buttermilk,
  orange: poppy,
  pink: salmon,
  purple: cornflower,
  blue,
  puertoRico,
  cornflower,
  salmon,
  poppy,
  iceberg,
  perfume,
  buttermilk,
  linen,
  whisper,
  athens,
  santas,
  mid,
  primary: puertoRico,
  secondary: poppy,
  tertiary: cornflower,
  accent: {
    iceberg,
    perfume,
    buttermilk,
    linen
  },
  greyScale: {
    100: whisper,
    300: athens,
    500: santas,
    700: mid,
    900: black
  },
  white,
  black,
  text: {
    light: santas,
    medium: mid,
    dark: black
  },
  background: whisper,
  inputBackground: '#F9F9FC',
  borders: athens
};
