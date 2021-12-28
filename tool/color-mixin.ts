const colorMixin = {
  // primary: pink[A400]
  primary: (opacity: number) => `rgba(245, 0, 87, ${opacity})`,
  // secondary: purple[A400]
  secondary: (opacity: number) => `rgba(213, 0, 249, ${opacity})`,
  // error: red[A700]
  error: (opacity: number) => `rgba(213, 0, 0, ${opacity})`,
  // warning: deepOrange[A400]
  warning: (opacity: number) => `rgba(255, 61, 0, ${opacity})`,
  // info: blue[A400]
  info: (opacity: number) => `rgba(41, 121, 255, ${opacity})`,
  // success: green[600]
  success: (opacity: number) => `rgba(67, 160, 71, ${opacity})`,
  // black: grey[900]
  black: (opacity: number) => `rgba(33, 33, 33, ${opacity})`,
  // white: grey[50]
  white: (opacity: number) => `rgba(250, 250, 250, ${opacity})`,
};

export default colorMixin;
