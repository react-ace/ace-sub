const colorMixin = {
  primary: (opacity: number) => `rgba(245, 0, 87, ${opacity})`,
  secondary: (opacity: number) => `rgba(213, 0, 249, ${opacity})`,
  error: (opacity: number) => `rgba(213, 0, 0, ${opacity})`,
  warning: (opacity: number) => `rgba(255, 61, 0, ${opacity})`,
  info: (opacity: number) => `rgba(41, 121, 255, ${opacity})`,
  success: (opacity: number) => `rgba(67, 160, 71, ${opacity})`,
  black: (opacity: number) => `rgba(33, 33, 33, ${opacity})`,
  white: (opacity: number) => `rgba(245, 245, 245, ${opacity})`,
};

export default colorMixin;
