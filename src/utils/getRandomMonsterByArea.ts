// Related third party imports.

// Local application/library specific imports.
import { MonsterTypes, monsterList } from "data/monsters";
import { AreaTypes } from "global";

// Stateless vars declare.

export default getRandomMonsterByArea;

function getRandomMonsterByArea(area: AreaTypes): MonsterTypes {
  return monsterList
    .filter((monster) => monster.fromAreas.includes(area))
    .getRandomItem().key;
}
