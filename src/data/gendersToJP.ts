import { GenderTypes } from "global";
import { TextsKeys } from "./texts";

const gendersToJP: { [key in GenderTypes]: TextsKeys } = {
  male: "男",
  female: "女",
  other: "其他",
};

export default gendersToJP;
