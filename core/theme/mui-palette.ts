import { pink, purple, green, red, blue, deepOrange, grey } from '@mui/material/colors';

const muiPalette = {
  mode: 'light',
  common: {
    black: grey[900],
    white: grey[50],
  },
  primary: {
    light: pink.A200,
    main: pink.A400,
    dark: pink.A700,
    contrastText: grey[50],
  },
  secondary: {
    light: purple.A200,
    main: purple.A400,
    dark: purple.A700,
    contrastText: grey[50],
  },
  success: {
    light: green.A200,
    main: green[600],
    dark: green[900],
    contrastText: grey[50],
  },
  error: {
    light: red.A400,
    main: red.A700,
    dark: red[900],
    contrastText: grey[50],
  },
  info: {
    light: blue.A200,
    main: blue.A400,
    dark: blue.A700,
    contrastText: grey[50],
  },
  warning: {
    light: deepOrange.A200,
    main: deepOrange.A400,
    dark: deepOrange.A700,
    contrastText: grey[50],
  },
  text: {
    primary: grey[900],
    secondary: grey[50],
    disabled: grey.A400,
  },
};

export default muiPalette;
