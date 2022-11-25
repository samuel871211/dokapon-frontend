// Related third party imports.

// Local application/library specific imports.
import type { AreaTypes, GraphJSON } from "global";
import africaCaveMap from "./maps/africaCaveMap";
import africaCaveB2Map from "./maps/africaCaveB2Map";
import africaCaveB3CenterMap from "./maps/africaCaveB3CenterMap";
import africaCaveB3LeftMap from "./maps/africaCaveB3LeftMap";
import africaCaveB3RightMap from "./maps/africaCaveB3RightMap";
import asiaCaveMap from "./maps/asiaCaveMap";
import betweenDimensionsMap from "./maps/betweenDimensionsMap";
import dokaponTheWorldMap from "./maps/dokaponTheWorldMap";
import europeCaveMap from "./maps/europeCaveMap";
import europeCaveCanteenMap from "./maps/europeCaveCanteenMap";
import europeCaveHallMap from "./maps/europeCaveHallMap";
import europeCaveLibraryMap from "./maps/europeCaveLibraryMap";
import hawaiianIslandsCaveMap from "./maps/hawaiianIslandsCaveMap";
import hawaiianIslandsCaveB2CenterMap from "./maps/hawaiianIslandsCaveB2CenterMap";
import hawaiianIslandsCaveB2LeftMap from "./maps/hawaiianIslandsCaveB2LeftMap";
import hawaiianIslandsCaveB2RightMap from "./maps/hawaiianIslandsCaveB2RightMap";
import hawaiianIslandsCaveB3CenterMap from "./maps/hawaiianIslandsCaveB3CenterMap";
import hawaiianIslandsCaveB3LeftMap from "./maps/hawaiianIslandsCaveB3LeftMap";
import hawaiianIslandsCaveB3RightMap from "./maps/hawaiianIslandsCaveB3RightMap";
import northAmericaCaveMap from "./maps/northAmericaCaveMap";
import northAmericaCaveB2Map from "./maps/northAmericaCaveB2Map";
import southAmericaCaveMap from "./maps/southAmericaCaveMap";
import southAmericaCaveB2Map from "./maps/southAmericaCaveB2Map";
import southAmericaCaveB3Map from "./maps/southAmericaCaveB3Map";

// Stateless vars declare.
const emptyGraphJSON = { vertices: [], edges: [] };
const areaTypesToMap: { [key in AreaTypes]: GraphJSON } = {
  Asia: dokaponTheWorldMap,
  AsiaCave: asiaCaveMap,
  Europe: dokaponTheWorldMap,
  EuropeCave: europeCaveMap,
  EuropeCaveLibrary: europeCaveLibraryMap,
  EuropeCaveCanteen: europeCaveCanteenMap,
  EuropeCaveHall: europeCaveHallMap,
  Russia: dokaponTheWorldMap,
  NorthAmerica: dokaponTheWorldMap,
  NorthAmericaCave: northAmericaCaveMap,
  NorthAmericaCaveB2: northAmericaCaveB2Map,
  SouthAmerica: dokaponTheWorldMap,
  SouthAmericaCave: southAmericaCaveMap,
  SouthAmericaCaveB2: southAmericaCaveB2Map,
  SouthAmericaCaveB3: southAmericaCaveB3Map,
  Oceania: dokaponTheWorldMap,
  /**
   * @todo 尚未實作
   */
  OceaniaCave: emptyGraphJSON,
  Africa: dokaponTheWorldMap,
  AfricaCave: africaCaveMap,
  AfricaCaveB2: africaCaveB2Map,
  AfricaCaveB3Right: africaCaveB3RightMap,
  AfricaCaveB3Left: africaCaveB3LeftMap,
  AfricaCaveB3Center: africaCaveB3CenterMap,
  Arctic: dokaponTheWorldMap,
  /**
   * @todo 尚未實作
   */
  ArcticCave: emptyGraphJSON,
  Antarctica: dokaponTheWorldMap,
  /**
   * @todo 尚未實作
   */
  AntarcticaCave: emptyGraphJSON,
  HawaiianIslands: dokaponTheWorldMap,
  HawaiianIslandsCave: hawaiianIslandsCaveMap,
  HawaiianIslandsCaveB2Right: hawaiianIslandsCaveB2RightMap,
  HawaiianIslandsCaveB2Left: hawaiianIslandsCaveB2LeftMap,
  HawaiianIslandsCaveB2Center: hawaiianIslandsCaveB2CenterMap,
  HawaiianIslandsCaveB3Right: hawaiianIslandsCaveB3RightMap,
  HawaiianIslandsCaveB3Left: hawaiianIslandsCaveB3LeftMap,
  HawaiianIslandsCaveB3Center: hawaiianIslandsCaveB3CenterMap,
  Atlantis: dokaponTheWorldMap,
  BetweenDimensions: betweenDimensionsMap,
};

export default areaTypesToMap;
