import { MonsterInstance, Movement, PlayerInstance } from "global";

export default getCharacterImgURL;

/**
 * @param movement 目前 `MonsterInstance` 只有 `vs` 這個動作，其他動作的圖片還沒做好
 */
function getCharacterImgURL(
  character: PlayerInstance | MonsterInstance,
  movement: Movement
) {
  const { characterType } = character;
  if (characterType === "monster") return `/${character.key}_vs.png`;
  const { job, color, gender } = character;
  return `/${job}_${gender}_${color}_${movement}.png`;
}
