import { MonsterInstance, Movement, PlayerInstance } from "global";
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;

export default getCharacterImgURL;

/**
 * @param movement 目前 `MonsterInstance` 只有 `vs` 這個動作，其他動作的圖片還沒做好
 */
function getCharacterImgURL(
  character: PlayerInstance | MonsterInstance,
  movement: Movement
) {
  const { characterType } = character;
  if (characterType === "monster")
    return `${backendBaseUrl}/${character.key}_vs.png`;
  const { job, color, gender } = character;
  return `${backendBaseUrl}/${job}_${gender}_${color}_${movement}.png`;
}
