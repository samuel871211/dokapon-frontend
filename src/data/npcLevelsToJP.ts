import { TextsKeys } from "./texts";
import { NPCLevelTypes } from "global";

const npcLevelsToJP: { [key in NPCLevelTypes]: TextsKeys } = {
  weak: "弱い",
  normal: "普通",
  strong: "ズルい",
};

export default npcLevelsToJP;
