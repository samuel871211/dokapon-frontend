import type { AreaTypes, magicAttack, magicDefense, MagicBook } from "global";
import magicAttacks from "./magicAttacks";
import magicDefenses from "./magicDefenses";
import magicBooks from "./magicBooks";

const magicStores: {
  [key in AreaTypes]: Array<magicAttack | magicDefense | MagicBook | undefined>;
} = {
  Asia: [
    undefined,
    undefined,
    undefined,
    magicBooks.damageFire1,
    magicBooks.damageIce1,
    magicBooks.damageThunder1,
    //
    magicAttacks.asia1,
    magicAttacks.asia2,
    magicAttacks.asia3,
    magicAttacks.asia4,
    magicDefenses.asia1,
    magicDefenses.asia2,
  ],
  Europe: [
    magicBooks.statusAttackDown,
    magicBooks.statusDefenseDown,
    magicBooks.statusSeal,
    magicBooks.otherMonsterSummon,
    magicBooks.damageFire1,
    magicBooks.damageIce1,
    //
    magicBooks.damageThunder1,
    magicBooks.damageWind1,
    magicAttacks.basicAndEurope1,
    magicAttacks.europe2Andafrica1,
    magicAttacks.europe3,
    magicDefenses.europe1,
    //
    magicDefenses.europe2,
    magicDefenses.europe3,
  ],
  Russia: [
    magicBooks.statusAttackDown,
    undefined,
    magicBooks.statusPoison,
    magicBooks.otherRecoverOpponent,
    magicBooks.otherDestroyBag,
    magicBooks.damageFire1,
    //
    magicBooks.damageIce1,
    magicBooks.damageWind1,
    magicAttacks.russia1,
    magicAttacks.russia2,
    magicAttacks.russia3,
    magicAttacks.russia4,
    //
    magicDefenses.russia1,
    magicDefenses.russia2,
  ],
  NorthAmerica: [
    magicBooks.statusAttackDown,
    undefined,
    magicBooks.statusPoison,
    magicBooks.statusStartled,
    magicBooks.otherDestroyBag,
    magicBooks.damageFire2,
    //
    magicBooks.damageIce2,
    magicBooks.damageThunder1,
    magicBooks.damageThunder2,
    magicBooks.damageWind1,
    magicBooks.damageWind2,
    magicBooks.damageEarth1,
    //
    magicAttacks.northAmerica1,
    magicAttacks.northAmerica2,
    magicAttacks.northAmerica3,
    magicDefenses.northAmerica1,
    magicDefenses.northAmerica2,
    magicDefenses.northAmerica3,
  ],
  SouthAmerica: [
    undefined,
    undefined,
    magicBooks.statusPoison,
    magicBooks.statusStartled,
    magicBooks.statusSeal,
    magicBooks.otherRecoverOpponent,
    //
    magicBooks.damageFire1,
    magicBooks.damageIce2,
    magicBooks.damageThunder2,
    magicBooks.damageWind1,
    magicBooks.damageWind2,
    magicBooks.damageEarth1,
    //
    magicAttacks.southAmerica1,
    magicAttacks.southAmerica2,
    magicAttacks.southAmerica3,
    magicAttacks.southAmerica4,
    magicDefenses.southAmerica1,
    magicDefenses.southAmerica2AndOceania3,
  ],
  Oceania: [
    magicBooks.statusAttackDown,
    undefined,
    magicBooks.statusStartled,
    magicBooks.statusSeal,
    magicBooks.otherMonsterSummon,
    magicBooks.otherRecoverOpponent,
    //
    magicBooks.otherDestroyBag,
    magicBooks.damageFire2,
    magicBooks.damageIce2,
    magicBooks.damageThunder2,
    magicBooks.damageWind2,
    magicBooks.damageEarth1,
    //
    magicAttacks.oceania1,
    magicAttacks.oceania2,
    magicAttacks.oceania3,
    magicDefenses.oceania1,
    magicDefenses.oceania2,
    magicDefenses.southAmerica2AndOceania3,
  ],
  Africa: [
    magicBooks.statusAttackDown,
    magicBooks.statusDefenseDown,
    magicBooks.statusPoison,
    magicBooks.statusStartled,
    magicBooks.statusCurse,
    magicBooks.statusSeal,
    //
    magicBooks.otherDestroyBag,
    magicBooks.damageFire2,
    magicBooks.damageIce2,
    magicBooks.damageThunder2,
    magicBooks.damageWind2,
    magicBooks.damageEarth2,
    //
    magicAttacks.europe2Andafrica1,
    magicAttacks.africa2,
    magicAttacks.africa3,
    magicAttacks.africa4,
    magicDefenses.africa1,
    magicDefenses.africa2,
  ],
  AsiaCave: [],
  EuropeCave: [],
  EuropeCaveLibrary: [],
  EuropeCaveCanteen: [],
  EuropeCaveHall: [],
  NorthAmericaCave: [],
  NorthAmericaCaveB2: [],
  SouthAmericaCave: [],
  SouthAmericaCaveB2: [],
  SouthAmericaCaveB3: [],
  OceaniaCave: [],
  AfricaCave: [],
  AfricaCaveB2: [],
  AfricaCaveB3Right: [],
  AfricaCaveB3Left: [],
  AfricaCaveB3Center: [],
  Arctic: [],
  ArcticCave: [],
  Antarctica: [],
  AntarcticaCave: [],
  HawaiianIslands: [],
  HawaiianIslandsCave: [],
  HawaiianIslandsCaveB2Right: [],
  HawaiianIslandsCaveB2Left: [],
  HawaiianIslandsCaveB2Center: [],
  HawaiianIslandsCaveB3Right: [],
  HawaiianIslandsCaveB3Left: [],
  HawaiianIslandsCaveB3Center: [],
  Atlantis: [],
};

export default magicStores;
