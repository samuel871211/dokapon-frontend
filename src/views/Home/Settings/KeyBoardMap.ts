import { LangTypes, AspectRatioTypes, GamePadKeyTypes } from "global";
type KeyboardMap = [
  [LangTypes, LangTypes, LangTypes],
  [AspectRatioTypes, AspectRatioTypes, AspectRatioTypes],
  [GamePadKeyTypes, "", GamePadKeyTypes],
  [GamePadKeyTypes, "", GamePadKeyTypes],
  [GamePadKeyTypes, "", GamePadKeyTypes],
  [GamePadKeyTypes, "", GamePadKeyTypes],
  [GamePadKeyTypes, "", GamePadKeyTypes],
  [GamePadKeyTypes, "", GamePadKeyTypes],
  [GamePadKeyTypes, "", GamePadKeyTypes],
  [GamePadKeyTypes, "確定", "取消"]
];
const KEYBOARDMAP: KeyboardMap = [
  ["cn", "en", "jp"],
  ["16:9", "4:3", "stretch"],
  ["arrowUp", "", "L1"],
  ["arrowDown", "", "L2"],
  ["arrowRight", "", "R1"],
  ["arrowLeft", "", "R2"],
  ["triangle", "", "SELECT"],
  ["circle", "", "ANALOG"],
  ["square", "", "START"],
  ["cross", "確定", "取消"],
];

export default KEYBOARDMAP;
