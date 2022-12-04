// Related third party imports.
import { createContext, Dispatch, SetStateAction } from "react";

// Local application/library specific imports.
import type { GameProgress } from "global";

// Stateless vars declare.
const gameProgressCtx = createContext<{
  gameProgress: GameProgress;
  setGameProgress: Dispatch<SetStateAction<GameProgress>>;
}>({
  gameProgress: {} as GameProgress,
  setGameProgress: () => {
    throw new Error("invalid setGameProgress");
  },
});

export default gameProgressCtx;
