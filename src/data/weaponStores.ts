import { AreaTypes, Shield, Weapon } from "global";
import shields from "./shields";
import weapons from "./weapons";

const weaponStores: { [key in AreaTypes]: Array<Weapon | Shield> } = {
  Asia: [
    weapons.swordNormal,
    weapons.spearBamboo,
    weapons.stickComedy,
    weapons.hammerWooden,
    weapons.swordKitchen,
    weapons.swordGreenDragon,
    shields.shieldPaper,
    shields.shieldWood,
    shields.shieldStone,
    shields.shieldReal,
  ],
  Europe: [
    weapons.swordHoly,
    weapons.swordRapier,
    weapons.spearSoldier,
    weapons.stickArchMage,
    weapons.hammerCleric,
    weapons.spearHalberd,
    shields.shieldBuckler,
    shields.shieldSoldier,
    shields.shieldIron,
  ],
  Russia: [
    weapons.axeFarmer,
    weapons.brassKnuckles,
    weapons.axeLumberjack,
    weapons.hammerGiant,
    weapons.stickCrimson,
    weapons.hammerMorningStar,
    shields.shieldFur,
    shields.shieldBlack,
    shields.shieldMammoth,
  ],
  NorthAmerica: [
    weapons.swordSteel,
    weapons.hammerSpiritClub,
    weapons.swordScalpel,
    weapons.stickShaman,
    weapons.axeBattle,
    weapons.swordSilver,
    shields.shieldSeaEagle,
    shields.shieldCutterFlower,
    shields.shieldSilver,
  ],
  SouthAmerica: [
    weapons.swordDigi,
    weapons.stickFlower,
    weapons.swordBone,
    weapons.spearWarrior,
    weapons.hammer,
    weapons.axeGuillotine,
    shields.shieldBird,
    shields.shieldDestruction,
    shields.shieldStoneMask,
  ],
  Oceania: [
    weapons.swordCombat,
    weapons.stickRenju,
    weapons.swordShippu,
    weapons.brassKnucklesDragon,
    weapons.swordOversized,
    weapons.spearDrill,
    shields.shieldScale,
    shields.shieldShell,
    shields.shieldDuralumin,
  ],
  Africa: [
    weapons.hammerKunai,
    weapons.swordAssassin,
    weapons.stickRune,
    weapons.axeDestruction,
    weapons.hammerMeteor,
    weapons.swordDragonslayer,
    shields.shieldBeetle,
    shields.shieldWarrior,
    shields.shieldHero,
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

export default weaponStores;
