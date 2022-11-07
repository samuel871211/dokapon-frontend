// Related third party imports.
import { useContext } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import styles from "./Settings.module.css";
import useTranslation from "hooks/useTranslation";
import { gameProgressCtx } from "reducers/gameProgress";
import KeyMappingDialog from "../KeyMappingDialog";

// Stateless vars declare.

export default Settings;

function Settings() {
  const { t } = useTranslation();
  const { lang, aspectRatio, row, col, gamePadSetting, showKeyMappingDialog } =
    useMetaData();
  return (
    <div className={styles.settingsContainer}>
      {showKeyMappingDialog ? <KeyMappingDialog /> : null}
      <div className={styles.settingsDialog}>
        <div className={styles.dialogContent}>
          <div>{t("語言")}</div>
          <div className={styles.choice}>
            <div
              className={classNames({
                [styles.choiceText]: true,
                [styles.hoverEffect]: col === 0 && row === 0,
                [styles.disabledText]: lang !== "cn",
              })}
            >
              中文
            </div>
          </div>
          <div className={styles.choice}>
            <div
              className={classNames({
                [styles.choiceText]: true,
                [styles.hoverEffect]: col === 1 && row === 0,
                [styles.disabledText]: lang !== "en",
              })}
            >
              English
            </div>
          </div>
          <div className={styles.choice}>
            <div
              className={classNames({
                [styles.choiceText]: true,
                [styles.hoverEffect]: col === 2 && row === 0,
                [styles.disabledText]: lang !== "jp",
              })}
            >
              日本語
            </div>
          </div>
        </div>
        <div className={styles.dialogContent}>
          <div>{t("画面比")}</div>
          <div className={styles.choice}>
            <div
              className={classNames({
                [styles.choiceText]: true,
                [styles.hoverEffect]: col === 0 && row === 1,
                [styles.disabledText]: aspectRatio !== "16:9",
              })}
            >
              16:9
            </div>
          </div>
          <div className={styles.choice}>
            <div
              className={classNames({
                [styles.choiceText]: true,
                [styles.hoverEffect]: col === 1 && row === 1,
                [styles.disabledText]: aspectRatio !== "4:3",
              })}
            >
              4:3
            </div>
          </div>
          <div className={styles.choice}>
            <div
              className={classNames({
                [styles.choiceText]: true,
                [styles.hoverEffect]: col === 2 && row === 1,
                [styles.disabledText]: aspectRatio !== "stretch",
              })}
            >
              {t("ストレッチ")}
            </div>
          </div>
        </div>
        <div className={styles.dialogContent}>
          <div>{t("ゲームパッドの設定")}</div>
          <div className={styles.empty}></div>
          <div className={styles.empty}></div>
          <div className={styles.empty}></div>
        </div>
        <div className={styles.mappingTable}>
          <div className={styles.gamePadColumn}>
            <div className={styles.cell}>{t("ゲームパッド")}</div>
            <div className={styles.cell}>↑</div>
            <div className={styles.cell}>↓</div>
            <div className={styles.cell}>→</div>
            <div className={styles.cell}>←</div>
            <div className={styles.cell}>△</div>
            <div className={styles.cell}>○</div>
            <div className={styles.cell}>□</div>
            <div className={styles.cell}>✕</div>
          </div>
          <div className={styles.keyBoardColumn}>
            <div className={styles.cell}>
              <div className={styles.cellText}>{t("キーボード")}</div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 0 && row === 2,
                })}
              >
                {gamePadSetting.arrowUp}
              </div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 0 && row === 3,
                })}
              >
                {gamePadSetting.arrowDown}
              </div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 0 && row === 4,
                })}
              >
                {gamePadSetting.arrowRight}
              </div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 0 && row === 5,
                })}
              >
                {gamePadSetting.arrowLeft}
              </div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 0 && row === 6,
                })}
              >
                {gamePadSetting.triangle}
              </div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 0 && row === 7,
                })}
              >
                {gamePadSetting.circle}
              </div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 0 && row === 8,
                })}
              >
                {gamePadSetting.square}
              </div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 0 && row === 9,
                })}
              >
                {gamePadSetting.cross}
              </div>
            </div>
          </div>
          <div className={styles.gamePadColumn}>
            <div className={styles.cell}>{t("ゲームパッド")}</div>
            <div
              className={classNames({
                [styles.cell]: true,
                [styles.hoverEffect]: col === 1 && row === 2,
              })}
            >
              L1
            </div>
            <div
              className={classNames({
                [styles.cell]: true,
                [styles.hoverEffect]: col === 1 && row === 3,
              })}
            >
              L2
            </div>
            <div
              className={classNames({
                [styles.cell]: true,
                [styles.hoverEffect]: col === 1 && row === 4,
              })}
            >
              R1
            </div>
            <div
              className={classNames({
                [styles.cell]: true,
                [styles.hoverEffect]: col === 1 && row === 5,
              })}
            >
              R2
            </div>
            <div
              className={classNames({
                [styles.cell]: true,
                [styles.hoverEffect]: col === 1 && row === 6,
              })}
            >
              SELECT
            </div>
            <div
              className={classNames({
                [styles.cell]: true,
                [styles.hoverEffect]: col === 1 && row === 7,
              })}
            >
              ANALOG
            </div>
            <div
              className={classNames({
                [styles.cell]: true,
                [styles.hoverEffect]: col === 1 && row === 8,
              })}
            >
              START
            </div>
            <div className={styles.actions}>
              <div
                className={classNames({
                  [styles.hoverEffect]: col === 1 && row === 9,
                })}
              >
                {t("はい")}
              </div>
            </div>
          </div>
          <div className={styles.keyBoardColumn}>
            <div className={styles.cell}>
              <div className={styles.cellText}>{t("キーボード")}</div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 2 && row === 2,
                })}
              >
                {gamePadSetting.L1}
              </div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 2 && row === 3,
                })}
              >
                {gamePadSetting.L2}
              </div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 2 && row === 4,
                })}
              >
                {gamePadSetting.R1}
              </div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 2 && row === 5,
                })}
              >
                {gamePadSetting.R2}
              </div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 2 && row === 6,
                })}
              >
                {gamePadSetting.SELECT}
              </div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 2 && row === 7,
                })}
              >
                {gamePadSetting.ANALOG}
              </div>
            </div>
            <div className={styles.cell}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 2 && row === 8,
                })}
              >
                {gamePadSetting.START}
              </div>
            </div>
            <div className={styles.actions}>
              <div
                className={classNames({
                  [styles.cellText]: true,
                  [styles.hoverEffect]: col === 2 && row === 9,
                })}
              >
                {t("いいえ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { gamePadSetting, userPreference } = gameProgress;
  const { lang, aspectRatio } = userPreference;
  const { showKeyMappingDialog, currentAxis } = gameProgress.Home.SettingsState;
  const { row, col } = currentAxis;
  return { lang, aspectRatio, row, col, gamePadSetting, showKeyMappingDialog };
}
