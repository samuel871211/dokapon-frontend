import { MonsterAttrs, PlayerAttrs } from "global";

export default isPlayer;

function isPlayer(
  character: PlayerAttrs | MonsterAttrs
): character is PlayerAttrs {
  const { characterType } = character;
  return characterType === "player" || characterType === "npcPlayer";
}
