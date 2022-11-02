import { ColorTypes } from "global";

const colorsToRGB: { [key in ColorTypes]: string } = {
  red: "rgb(243,44,43)",
  orange: "rgb(254,152,57)",
  yellow: "rgb(254,246,56)",
  lightGreen: "rgb(100,248,29)",
  darkGreen: "rgb(16,203,122)",
  lightBlue: "rgb(79,213,255)",
  darkBlue: "rgb(115,125,230)",
  pink: "rgb(255,102,244)",
  gray: "rgb(98,93,120)",
  white: "rgb(255,255,255)",
};

export default colorsToRGB;
