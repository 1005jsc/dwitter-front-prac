import {blue, grey, red} from './_colors';

const defaultTheme = {
  fonts: {
    Lato: {
      black: 'LatoBlack',
      blackItalic: 'LatoBlackItalic',
      bold: 'LatoBold',
      boldItalic: 'LatoBoldItalic',
      italic: 'LatoItalic',
      light: 'LatoLight',
      lightItalic: 'LatoLightItalic',
      regular: 'LatoRegular',
      thin: 'LatoThin',
      thinItalic: 'LatoThinItalic',
    },
    NotoSansKr: {
      regular: 'NotoSansKR',
    },
    NotoSansJP: {
      regular: 'NotoSanJP',
    },
    Roboto: {
      regular: 'Roboto',
    },
  },
};

export const darkTheme = {
  ...defaultTheme,

  colors: {
    titleColor: blue[100],
    bgColor: grey[4],
  },
};

export const lightTheme = {
  ...defaultTheme,
  colors: {
    titleColor: red[100],
    bgColor: grey[7],
  },
};
