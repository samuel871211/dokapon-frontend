import { TextsKeys } from "data/texts";
import { AreaTypes } from "global";

export default areaTypesToJP;

/**
 * @todo 部分地區的翻譯檔尚未完成
 */
function areaTypesToJP(area: AreaTypes): TextsKeys {
  switch (area) {
    case "Asia":
      return "アジア";
    case "AsiaCave":
      return "";
    case "Europe":
      return "ヨーロッパ";
    case "EuropeCave":
      return "";
    case "EuropeCaveLibrary":
      return "";
    case "EuropeCaveCanteen":
      return "";
    case "EuropeCaveHall":
      return "";
    case "Russia":
      return "ロシア";
    case "NorthAmerica":
      return "北米";
    case "NorthAmericaCave":
      return "";
    case "NorthAmericaCaveB2":
      return "";
    case "SouthAmerica":
      return "南米";
    case "SouthAmericaCave":
      return "";
    case "SouthAmericaCaveB2":
      return "";
    case "SouthAmericaCaveB3":
      return "";
    case "Oceania":
      return "オセアニア";
    case "OceaniaCave":
      return "";
    case "Africa":
      return "アフリカ";
    case "AfricaCave":
      return "";
    case "AfricaCaveB2":
      return "";
    case "AfricaCaveB3Right":
      return "";
    case "AfricaCaveB3Left":
      return "";
    case "AfricaCaveB3Center":
      return "";
    case "Arctic":
      return "";
    case "ArcticCave":
      return "";
    case "Antarctica":
      return "";
    case "AntarcticaCave":
      return "";
    case "HawaiianIslands":
      return "";
    case "HawaiianIslandsCave":
      return "";
    case "HawaiianIslandsCaveB2Right":
      return "";
    case "HawaiianIslandsCaveB2Left":
      return "";
    case "HawaiianIslandsCaveB2Center":
      return "";
    case "HawaiianIslandsCaveB3Right":
      return "";
    case "HawaiianIslandsCaveB3Left":
      return "";
    case "HawaiianIslandsCaveB3Center":
      return "";
    case "Atlantis":
      return "";
  }
}
