import { AreaTypes, MonsterFixedAttrs, MonsterInstance } from "global";

export default createMonsterInstance;

function createMonsterInstance(params: {
  monster: MonsterFixedAttrs;
  area: AreaTypes;
  vertexIdx: number;
}): MonsterInstance {
  const { monster, area, vertexIdx } = params;
  return {
    ...monster,
    characterType: "monster",
    area,
    vertexIdx,
    attack: {
      total: monster.attack,
      base: monster.attack,
      buffRatio: 1,
      nerfRatio: 1,
    },
    defense: {
      total: monster.defense,
      base: monster.defense,
      buffRatio: 1,
      nerfRatio: 1,
    },
    speed: {
      total: monster.speed,
      base: monster.speed,
      buffRatio: 1,
      nerfRatio: 1,
    },
    magic: {
      total: monster.magic,
      base: monster.magic,
      buffRatio: 1,
      nerfRatio: 1,
    },
    hp: {
      current: monster.hp,
      total: monster.hp,
      base: monster.hp,
      buffRatio: 1,
      nerfRatio: 1,
    },
  };
}
