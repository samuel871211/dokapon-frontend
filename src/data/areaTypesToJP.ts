import { TextsKeys } from "data/texts";
import { AreaTypes } from "global";

/**
 * @todo 部分地區的日文尚不清楚
 */
const areaTypesToJP: { [key in AreaTypes]: TextsKeys } = {
  Asia: "アジア",
  AsiaCave: "",
  Europe: "ヨーロッパ",
  EuropeCave: "",
  EuropeCaveLibrary: "",
  EuropeCaveCanteen: "",
  EuropeCaveHall: "",
  Russia: "ロシア",
  NorthAmerica: "北米",
  NorthAmericaCave: "",
  NorthAmericaCaveB2: "",
  SouthAmerica: "南米",
  SouthAmericaCave: "",
  SouthAmericaCaveB2: "",
  SouthAmericaCaveB3: "",
  Oceania: "オセアニア",
  OceaniaCave: "",
  OceaniaCaveB1: "",
  OceaniaCaveB2: "",
  Africa: "アフリカ",
  AfricaCave: "",
  AfricaCaveB2: "",
  AfricaCaveB3Right: "",
  AfricaCaveB3Left: "",
  AfricaCaveB3Center: "",
  Arctic: "",
  ArcticCave: "",
  ArcticCaveB2: "",
  ArcticCaveB3: "",
  Antarctica: "",
  AntarcticaCave: "",
  AntarcticaCaveB2: "",
  AntarcticaCaveB3: "",
  HawaiianIslands: "",
  HawaiianIslandsCave: "",
  HawaiianIslandsCaveB2Right: "",
  HawaiianIslandsCaveB2Left: "",
  HawaiianIslandsCaveB2Center: "",
  HawaiianIslandsCaveB3Right: "",
  HawaiianIslandsCaveB3Left: "",
  HawaiianIslandsCaveB3Center: "",
  Atlantis: "",
  BetweenDimensions: "",
};

export default areaTypesToJP;
