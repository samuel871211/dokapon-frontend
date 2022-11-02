import { ColorTypes } from "global";
import { TextsKeys } from "./texts";

const colorsToJP: { [key in ColorTypes]: TextsKeys } = {
  red: "あか",
  orange: "オレンジ",
  yellow: "きいろ",
  lightGreen: "きみどり",
  darkGreen: "みどり",
  lightBlue: "みずいろ",
  darkBlue: "あお",
  pink: "ピンク",
  gray: "くろ",
  white: "しろ",
};

export default colorsToJP;
