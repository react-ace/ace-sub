import { blue, green, deepOrange, red, purple, pink } from '@mui/material/colors';

import colorMixin from '@sub/tool/color-mixin';

const muiButton = {
  styleOverrides: {
    outlinedPrimary: {
      '&:hover': { backgroundColor: colorMixin.primary(0.12) },
    },
    outlinedSecondary: {
      '&:hover': { backgroundColor: colorMixin.secondary(0.12) },
    },
    outlinedError: {
      '&:hover': { backgroundColor: colorMixin.error(0.12) },
    },
    outlinedWarning: {
      '&:hover': { backgroundColor: colorMixin.warning(0.12) },
    },
    outlinedInfo: {
      '&:hover': { backgroundColor: colorMixin.info(0.2) },
    },
    outlinedSuccess: {
      '&:hover': { backgroundColor: colorMixin.success(0.2) },
    },
    textPrimary: {
      backgroundColor: colorMixin.primary(0.06),
      '&:hover': { backgroundColor: colorMixin.primary(0.12) },
    },
    textSecondary: {
      backgroundColor: colorMixin.secondary(0.06),
      '&:hover': { backgroundColor: colorMixin.secondary(0.12) },
    },
    textError: {
      backgroundColor: colorMixin.error(0.06),
      '&:hover': { backgroundColor: colorMixin.error(0.12) },
    },
    textWarning: {
      backgroundColor: colorMixin.warning(0.06),
      '&:hover': { backgroundColor: colorMixin.warning(0.12) },
    },
    textInfo: {
      backgroundColor: colorMixin.info(0.1),
      '&:hover': { backgroundColor: colorMixin.info(0.2) },
    },
    textSuccess: {
      backgroundColor: colorMixin.success(0.1),
      '&:hover': { backgroundColor: colorMixin.success(0.2) },
    },
    containedPrimary: {
      '&:hover': { backgroundColor: pink.A700 },
    },
    containedSecondary: {
      '&:hover': { backgroundColor: purple.A700 },
    },
    containedInfo: {
      '&:hover': { backgroundColor: blue[800] },
    },
    containedSuccess: {
      '&:hover': { backgroundColor: green[800] },
    },
    containedWarning: {
      '&:hover': { backgroundColor: deepOrange[900] },
    },
    containedError: {
      '&:hover': { backgroundColor: red[900] },
    },
    root: {
      '&.Mui-disabled': {
        backgroundColor: colorMixin.black(0.1),
      },
    },
  },
};

export default muiButton;
