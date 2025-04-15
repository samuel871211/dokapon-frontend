// Related third party imports.
import classNames from "classnames";

// Local application/library specific imports.
import topAreaStyles from "../TopArea/TopArea.module.css";
import styles from "./SelectGender.module.css";
import YellowBlock from "layouts/YellowBlock";
import useTranslation from "hooks/useTranslation";
import SVGIcon from "layouts/SVGIcon";
import { useContext } from "react";
import gameProgressCtx from "reducers/gameProgress";

// Stateless vars declare.

export default SelectGender;

function SelectGender() {
  const { t } = useTranslation();
  const { currentPlayerGender } = useMetaData();
  return (
    <div className={styles.topRightContentArea}>
      <div className={styles.genderBlock}>
        <img
          src={`/imgs/beginner_male_red_front.png`}
          alt={t("男")}
          width="100%"
          data-selected={currentPlayerGender === "male"}
        />
        <YellowBlock
          role="button"
          className={styles.genderButton}
          borderRadius="9999px"
          selected={currentPlayerGender === "male"}
        >
          <SVGIcon height="3.5rem"></SVGIcon>
          <span>{t("男")}</span>
        </YellowBlock>
      </div>
      <div className={styles.genderBlock}>
        <img
          src={`/imgs/beginner_female_red_front.png`}
          alt={t("女")}
          width="100%"
          data-selected={currentPlayerGender === "female"}
        />
        <YellowBlock
          role="button"
          className={styles.genderButton}
          borderRadius="9999px"
          selected={currentPlayerGender === "female"}
        >
          <SVGIcon height="3.5rem"></SVGIcon>
          <span>{t("女")}</span>
        </YellowBlock>
      </div>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { currentPlayerIdx, players } = gameProgress;
  const currentPlayerGender = players[currentPlayerIdx].gender;
  return { currentPlayerGender };
}
