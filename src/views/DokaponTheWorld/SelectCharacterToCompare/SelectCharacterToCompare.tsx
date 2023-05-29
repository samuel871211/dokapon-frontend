import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import { useContext } from "react";
import gameProgressCtx from "reducers/gameProgress";
import isPlayer from "utils/isPlayer";
import styles from "./SelectCharacterToCompare.module.css";

export default SelectCharacterToCompare;

function SelectCharacterToCompare() {
  const {
    gameProgress: {
      DokaponTheWorldState: {
        // curClickedCharactersCount,
        curClickedCharacters,
        // curClickedCharacterIdx
        SelectCharacterToCompareState: { selectedIdx },
      },
    },
  } = useContext(gameProgressCtx);
  const { t } = useTranslation();
  // const countList = Array(curClickedCharactersCount).fill(0);
  return (
    <YellowBlock
      role="dialog"
      borderRadius="1.5rem"
      className={styles.selectCharacterToCompareContainer}
    >
      {curClickedCharacters.map((character, idx) => (
        <div className={styles.confirmDialogBtnContainer} key={idx}>
          <div
            data-selected={selectedIdx === idx}
            className={styles.confirmDialogBtn}
          >
            {isPlayer(character) ? character.name : t(character.name)}
          </div>
        </div>
      ))}
    </YellowBlock>
  );
}
