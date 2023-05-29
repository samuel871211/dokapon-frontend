// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import { MonsterInstance, PlayerInstance } from "global";
import gameProgressCtx from "reducers/gameProgress";

// Stateless vars declare.

export default useBattleCharacter;

function useBattleCharacter(): PlayerInstance | MonsterInstance | void {
  const {
    gameProgress: {
      players,
      bossMonsters,
      enemies,
      monsters,
      currentPlayerIdx,
    },
  } = useContext(gameProgressCtx);
  const currentPlayer = players[currentPlayerIdx];
  const { battleCharacter, area, vertexIdx } = currentPlayer;
  if (!battleCharacter) return;

  switch (battleCharacter.type) {
    case "player":
      return players[battleCharacter.index];
    case "bossMonster":
      return bossMonsters.find(
        (b) => b.area === area && b.vertexIdx === vertexIdx
      );
    case "monster":
      return monsters.find((m) => m.area === area && m.vertexIdx === vertexIdx);
    case "enemy":
      return enemies.find((e) => e.area === area && e.vertexIdx === vertexIdx);
  }
}
