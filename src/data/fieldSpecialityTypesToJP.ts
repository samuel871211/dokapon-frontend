import { FieldSpecialityTypes } from "global";
import { TextsKeys } from "./texts";

const fieldSpecialityTypesToJP: { [key in FieldSpecialityTypes]: TextsKeys } = {
  auto: "オート",
  manual: "マニュアル",
};

export default fieldSpecialityTypesToJP;
