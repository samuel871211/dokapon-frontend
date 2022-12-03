import { AreaTypes } from "global";
type BBox = { x: number; y: number; width: number; height: number };
const dokaponTheWorldMapBBox = { x: 0, y: 0, width: 13620, height: 13660 };

/**
 * @todo 除了主地圖，其餘地圖的BBox都要去取得
 *
 * 地圖畫好之後，就不會再更動，所以可以直接將`getBBox`的值記錄下來
 */
const areaTypesToCellsGroupBBox: { [key in AreaTypes]: BBox } = {
  Asia: dokaponTheWorldMapBBox,
  AsiaCave: dokaponTheWorldMapBBox,
  Europe: dokaponTheWorldMapBBox,
  EuropeCave: dokaponTheWorldMapBBox,
  EuropeCaveLibrary: dokaponTheWorldMapBBox,
  EuropeCaveCanteen: dokaponTheWorldMapBBox,
  EuropeCaveHall: dokaponTheWorldMapBBox,
  Russia: dokaponTheWorldMapBBox,
  NorthAmerica: dokaponTheWorldMapBBox,
  NorthAmericaCave: dokaponTheWorldMapBBox,
  NorthAmericaCaveB2: dokaponTheWorldMapBBox,
  SouthAmerica: dokaponTheWorldMapBBox,
  SouthAmericaCave: dokaponTheWorldMapBBox,
  SouthAmericaCaveB2: dokaponTheWorldMapBBox,
  SouthAmericaCaveB3: dokaponTheWorldMapBBox,
  Oceania: dokaponTheWorldMapBBox,
  OceaniaCave: dokaponTheWorldMapBBox,
  OceaniaCaveB1: dokaponTheWorldMapBBox,
  OceaniaCaveB2: dokaponTheWorldMapBBox,
  Africa: dokaponTheWorldMapBBox,
  AfricaCave: dokaponTheWorldMapBBox,
  AfricaCaveB2: dokaponTheWorldMapBBox,
  AfricaCaveB3Right: dokaponTheWorldMapBBox,
  AfricaCaveB3Left: dokaponTheWorldMapBBox,
  AfricaCaveB3Center: dokaponTheWorldMapBBox,
  Arctic: dokaponTheWorldMapBBox,
  ArcticCave: dokaponTheWorldMapBBox,
  ArcticCaveB2: dokaponTheWorldMapBBox,
  ArcticCaveB3: dokaponTheWorldMapBBox,
  Antarctica: dokaponTheWorldMapBBox,
  AntarcticaCave: dokaponTheWorldMapBBox,
  AntarcticaCaveB2: dokaponTheWorldMapBBox,
  AntarcticaCaveB3: dokaponTheWorldMapBBox,
  HawaiianIslands: dokaponTheWorldMapBBox,
  HawaiianIslandsCave: dokaponTheWorldMapBBox,
  HawaiianIslandsCaveB2Right: dokaponTheWorldMapBBox,
  HawaiianIslandsCaveB2Left: dokaponTheWorldMapBBox,
  HawaiianIslandsCaveB2Center: dokaponTheWorldMapBBox,
  HawaiianIslandsCaveB3Right: dokaponTheWorldMapBBox,
  HawaiianIslandsCaveB3Left: dokaponTheWorldMapBBox,
  HawaiianIslandsCaveB3Center: dokaponTheWorldMapBBox,
  Atlantis: dokaponTheWorldMapBBox,
  BetweenDimensions: dokaponTheWorldMapBBox,
};

export default areaTypesToCellsGroupBBox;
