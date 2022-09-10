import { AreaTypes } from "global";

export default areaTypesToJP;

function areaTypesToJP(area: AreaTypes) {
  switch (area) {
    case "Asia":
      return "アジア";
    case "AsiaCave":
      return area;
    case "Europe":
      return "ヨーロッパ";
    case "EuropeCave":
      return area;
    case "EuropeCaveLibrary":
      return area;
    case "EuropeCaveCanteen":
      return area;
    case "EuropeCaveHall":
      return area;
    case "Russia":
      return "ロシア";
    case "NorthAmerica":
      return "北米";
    case "NorthAmericaCave":
      return area;
    case "NorthAmericaCaveB2":
      return area;
    case "SouthAmerica":
      return "南米";
    case "SouthAmericaCave":
      return area;
    case "SouthAmericaCaveB2":
      return area;
    case "SouthAmericaCaveB3":
      return area;
    case "Oceania":
      return "オセアニア";
    case "OceaniaCave":
      return area;
    case "Africa":
      return "アフリカ";
    case "AfricaCave":
      return area;
    case "AfricaCaveB2":
      return area;
    case "AfricaCaveB3Right":
      return area;
    case "AfricaCaveB3Left":
      return area;
    case "AfricaCaveB3Center":
      return area;
    case "Arctic":
      return area;
    case "ArcticCave":
      return area;
    case "Antarctica":
      return area;
    case "AntarcticaCave":
      return area;
    case "HawaiianIslands":
      return area;
    case "HawaiianIslandsCave":
      return area;
    case "HawaiianIslandsCaveB2Right":
      return area;
    case "HawaiianIslandsCaveB2Left":
      return area;
    case "HawaiianIslandsCaveB2Center":
      return area;
    case "HawaiianIslandsCaveB3Right":
      return area;
    case "HawaiianIslandsCaveB3Left":
      return area;
    case "HawaiianIslandsCaveB3Center":
      return area;
    case "Atlantis":
      return area;
  }
}
