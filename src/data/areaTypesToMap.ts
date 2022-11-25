// Related third party imports.

// Local application/library specific imports.
import type { AreaTypes, GraphJSON } from "global";
import africaCave from "./maps/africaCave";
import africaCaveB2 from "./maps/africaCaveB2";
import africaCaveB3Center from "./maps/africaCaveB3Center";
import africaCaveB3Left from "./maps/africaCaveB3Left";
import africaCaveB3Right from "./maps/africaCaveB3Right";
import asiaCave from "./maps/asiaCave";
import betweenDimensions from "./maps/betweenDimensions";
import dokaponTheWorld from "./maps/dokaponTheWorld";
import europeCave from "./maps/europeCave";
import europeCaveCanteen from "./maps/europeCaveCanteen";
import europeCaveHall from "./maps/europeCaveHall";
import europeCaveLibrary from "./maps/europeCaveLibrary";
import hawaiianIslandsCave from "./maps/hawaiianIslandsCave";
import hawaiianIslandsCaveB2Center from "./maps/hawaiianIslandsCaveB2Center";
import hawaiianIslandsCaveB2Left from "./maps/hawaiianIslandsCaveB2Left";
import hawaiianIslandsCaveB2Right from "./maps/hawaiianIslandsCaveB2Right";
import hawaiianIslandsCaveB3Center from "./maps/hawaiianIslandsCaveB3Center";
import hawaiianIslandsCaveB3Left from "./maps/hawaiianIslandsCaveB3Left";
import hawaiianIslandsCaveB3Right from "./maps/hawaiianIslandsCaveB3Right";
import northAmericaCave from "./maps/northAmericaCave";
import northAmericaCaveB2 from "./maps/northAmericaCaveB2";
import southAmericaCave from "./maps/southAmericaCave";
import southAmericaCaveB2 from "./maps/southAmericaCaveB2";
import southAmericaCaveB3 from "./maps/southAmericaCaveB3";

// Stateless vars declare.
const emptyGraphJSON = { vertices: [], edges: [] };
const areaTypesToMap: { [key in AreaTypes]: GraphJSON } = {
  Asia: dokaponTheWorld,
  AsiaCave: asiaCave,
  Europe: dokaponTheWorld,
  EuropeCave: europeCave,
  EuropeCaveLibrary: europeCaveLibrary,
  EuropeCaveCanteen: europeCaveCanteen,
  EuropeCaveHall: europeCaveHall,
  Russia: dokaponTheWorld,
  NorthAmerica: dokaponTheWorld,
  NorthAmericaCave: northAmericaCave,
  NorthAmericaCaveB2: northAmericaCaveB2,
  SouthAmerica: dokaponTheWorld,
  SouthAmericaCave: southAmericaCave,
  SouthAmericaCaveB2: southAmericaCaveB2,
  SouthAmericaCaveB3: southAmericaCaveB3,
  Oceania: dokaponTheWorld,
  /**
   * @todo 尚未實作
   */
  OceaniaCave: emptyGraphJSON,
  Africa: dokaponTheWorld,
  AfricaCave: africaCave,
  AfricaCaveB2: africaCaveB2,
  AfricaCaveB3Right: africaCaveB3Right,
  AfricaCaveB3Left: africaCaveB3Left,
  AfricaCaveB3Center: africaCaveB3Center,
  Arctic: dokaponTheWorld,
  /**
   * @todo 尚未實作
   */
  ArcticCave: emptyGraphJSON,
  Antarctica: dokaponTheWorld,
  /**
   * @todo 尚未實作
   */
  AntarcticaCave: emptyGraphJSON,
  HawaiianIslands: dokaponTheWorld,
  HawaiianIslandsCave: hawaiianIslandsCave,
  HawaiianIslandsCaveB2Right: hawaiianIslandsCaveB2Right,
  HawaiianIslandsCaveB2Left: hawaiianIslandsCaveB2Left,
  HawaiianIslandsCaveB2Center: hawaiianIslandsCaveB2Center,
  HawaiianIslandsCaveB3Right: hawaiianIslandsCaveB3Right,
  HawaiianIslandsCaveB3Left: hawaiianIslandsCaveB3Left,
  HawaiianIslandsCaveB3Center: hawaiianIslandsCaveB3Center,
  Atlantis: dokaponTheWorld,
  BetweenDimensions: betweenDimensions,
};

export default areaTypesToMap;
