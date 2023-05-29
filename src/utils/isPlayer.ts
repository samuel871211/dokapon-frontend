import { MonsterInstance, PlayerInstance } from "global";

export default isPlayer;

function isPlayer(
  character: PlayerInstance | MonsterInstance
): character is PlayerInstance {
  const { characterType } = character;
  return characterType === "player" || characterType === "npcPlayer";
}
