import { FieldSpecialtyTypes } from "global";
import { TextsKeys } from "./texts";

const fieldSpecialtyTypesToJP: { [key in FieldSpecialtyTypes]: TextsKeys } = {
  auto: "オート",
  manual: "マニュアル",
};

export default fieldSpecialtyTypesToJP;
