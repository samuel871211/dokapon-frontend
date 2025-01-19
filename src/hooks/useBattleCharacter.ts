// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import { MonsterInstance, PlayerInstance } from "global";
import gameProgressCtx from "reducers/gameProgress";

// Stateless vars declare.

export default useBattleCharacter;

/**
 * @description throws an error if battleCharacter not exist.
 */
function useBattleCharacter(): PlayerInstance | MonsterInstance {
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
  if (!battleCharacter) throw new Error("no battle character");

  switch (battleCharacter.type) {
    case "player":
      return players[battleCharacter.index];
    case "bossMonster": {
      const result = bossMonsters.find(
        (bossMonster) =>
          bossMonster.area === area && bossMonster.vertexIdx === vertexIdx
      );
      if (!result) throw new Error("no battle character");
      return result;
    }
    case "monster": {
      const result = monsters.find(
        (monster) => monster.area === area && monster.vertexIdx === vertexIdx
      );
      if (!result) throw new Error("no battle character");
      return result;
    }
    case "enemy": {
      const result = enemies.find(
        (enemy) => enemy.area === area && enemy.vertexIdx === vertexIdx
      );
      if (!result) throw new Error("no battle character");
      return result;
    }
  }
}
