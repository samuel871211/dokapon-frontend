// Standard library imports.

// Related third party imports.
import {
  useState,
  useContext,
  useRef,
  useEffect,
  SyntheticEvent,
  KeyboardEvent,
} from "react";
import classNames from "classnames";
import { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import AttrCircle from "components/AttrCircle";
import { SomeKindOfIcon } from "components/icons";
import CustomBorderBottom from "components/CustomBorderBottom";
import styles from "./Drawer.module.css";
import useTranslation from "hooks/useTranslation";
import { userPreferenceContext } from "reducers/userPreference";
import { UIStateContext } from "reducers/Game/UIState";

// Stateless vars declare.
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;
const transitionStyles = {
  container: {
    entering: "",
    entered: "",
    exiting: "",
    exited: styles.exited,
    unmounted: "",
  },
  topLeft: {
    entering: styles.topLeftEntering,
    entered: styles.topLeftEntered,
    exiting: styles.topLeftExiting,
    exited: styles.exited,
    unmounted: "",
  },
  topRight: {
    entering: styles.topRightEntering,
    entered: styles.topRightEntered,
    exiting: styles.topRightExiting,
    exited: styles.exited,
    unmounted: "",
  },
  bottomLeft: {
    entering: styles.topLeftEntering,
    entered: styles.topLeftEntered,
    exiting: styles.topLeftExiting,
    exited: styles.exited,
    unmounted: "",
  },
  bottomRight: {
    entering: styles.topRightEntering,
    entered: styles.topRightEntered,
    exiting: styles.topRightExiting,
    exited: styles.exited,
    unmounted: "",
  },
};

export default Drawer;

function Drawer(props: { state: TransitionStatus }): JSX.Element {
  const { state } = props;
  const [selectedBtnIdx, setSelectedBtnIdx] = useState(0);
  const { UIState, UIStateDispatch } = useContext(UIStateContext);
  const { userPreference } = useContext(userPreferenceContext);
  const { t } = useTranslation(userPreference.lang);
  const focusElement = useRef<HTMLDivElement>(null);
  const handleKeyUpAttrs = UIState.showDrawer
    ? {
        tabIndex: 0,
        ref: focusElement,
        onBlur: (event: SyntheticEvent<HTMLDivElement>) =>
          event.currentTarget.focus(),
        onKeyUp: handleKeyUp,
      }
    : {};

  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case userPreference.arrowUp:
        setSelectedBtnIdx(selectedBtnIdx === 0 ? 4 : selectedBtnIdx - 1);
        return;
      case userPreference.arrowDown:
        setSelectedBtnIdx(selectedBtnIdx === 4 ? 0 : selectedBtnIdx + 1);
        return;
      case userPreference.circle:
        switch (selectedBtnIdx) {
          case 0: // ??????
            UIStateDispatch({
              type: "showDrawer",
              payload: false,
            });
            UIStateDispatch({
              type: "showRoulette",
              payload: true,
            });
            return;
          case 1: // ??????
            UIStateDispatch({
              type: "showDrawer",
              payload: false,
            });
            UIStateDispatch({
              type: "showBag",
              payload: true,
            });
            return;
          case 2: // ??????
            UIStateDispatch({
              type: "showDrawer",
              payload: false,
            });
            UIStateDispatch({
              type: "showCheck",
              payload: true,
            });
            UIStateDispatch({
              type: "isCheckTopLayer",
              payload: true,
            });
            UIStateDispatch({
              type: "showCheckTip",
              payload: true,
            });
            UIStateDispatch({
              type: "showMinimap",
              payload: true,
            });
            return;
          case 3: // ??????
            return;
          case 4: // ??????
            return;
        }
        return;
    }
  }

  useEffect(() => {
    if (state === "entered") focusElement.current?.focus();
  }, [state]);

  return (
    <div
      {...handleKeyUpAttrs}
      className={classNames(
        `${styles.drawerContainer}`,
        `${transitionStyles.container[state]}`
      )}
    >
      <div
        className={classNames(styles.topLeft, transitionStyles.topLeft[state])}
      >
        <WeeklyInfo />
      </div>
      <div
        className={classNames(
          styles.topRight,
          transitionStyles.topRight[state]
        )}
      >
        <DetailedPlayerInfos />
      </div>
      <div
        className={classNames(
          styles.bottomLeft,
          transitionStyles.bottomLeft[state]
        )}
      >
        <FloatingActionBtn selected={selectedBtnIdx === 0}>
          {t("??????")}
        </FloatingActionBtn>
        <FloatingActionBtn selected={selectedBtnIdx === 1}>
          {t("?????????")}
        </FloatingActionBtn>
        <FloatingActionBtn selected={selectedBtnIdx === 2}>
          {t("????????????")}
        </FloatingActionBtn>
        <FloatingActionBtn selected={selectedBtnIdx === 3}>
          {t("??????")}
        </FloatingActionBtn>
        <FloatingActionBtn selected={selectedBtnIdx === 4}>
          {t("?????????")}
        </FloatingActionBtn>
      </div>
      <div
        className={classNames(
          styles.bottomRight,
          transitionStyles.bottomRight[state]
        )}
      >
        <BriefPlayerInfos />
        <BriefPlayerInfos />
        <BriefPlayerInfos />
      </div>
    </div>
  );
}

function WeeklyInfo(): JSX.Element {
  return (
    <div className={styles.weeklyInfo}>
      <div>
        <div className={styles.week}>
          <div>week</div>
          <div>90</div>
        </div>
        <div className={styles.activity}>?????????</div>
      </div>
      <div>
        <div className={styles.weekIcon}>
          <div>???</div>
          <div>MON</div>
        </div>
      </div>
    </div>
  );
}

function FloatingActionBtn(props: {
  selected: boolean;
  children: string;
}): JSX.Element {
  const { selected, children } = props;
  return (
    <div className={styles.floatingActionBtn}>
      <div>
        <SomeKindOfIcon />
      </div>
      <div style={{ opacity: selected ? 1 : 0 }}>
        <div>{children}</div>
      </div>
    </div>
  );
}

function DetailedPlayerInfos(): JSX.Element {
  return (
    <div className={styles.detailedPlayerInfos}>
      <div>
        <div className={styles.playerImg}>
          <img
            width="100%"
            height="100%"
            src={`${backendBaseUrl}/imgs/magician_male_red_front.png`}
          />
        </div>
        <div className={styles.ranking}>
          <div>
            RANKING
            <span> 2</span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className={styles.verticalCircles}>
            <AttrCircle attr="LV" value={11} fontSize="2rem" />
          </div>
          <div className={styles.verticalCircles}>
            <AttrCircle attr="AT" value={61} fontSize="2rem" />
          </div>
        </div>
        <div>
          <div className={styles.playerArea}>
            <div>PLAYER</div>
            <div>NAME</div>
            <CustomBorderBottom />
          </div>
          <div className={styles.circlesContainer}>
            <div>
              <AttrCircle attr="DF" value={65} fontSize="2rem" />
            </div>
            <div>
              <AttrCircle attr="MG" value={59} fontSize="2rem" />
            </div>
            <div>
              <AttrCircle attr="SP" value={59} fontSize="2rem" />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.moneyArea}>
            <div>MONEY</div>
            <div>14,700,000</div>
            <CustomBorderBottom />
          </div>
          <div className={styles.hpArea}>
            <div>
              <div>
                <div>HP</div>
                <div className={styles.hpBar}></div>
              </div>
              <div>1000 / 1000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BriefPlayerInfos(): JSX.Element {
  return (
    <div className={styles.briefPlayerInfos}>
      <div>
        <img
          width="100%"
          height="100%"
          src={`${backendBaseUrl}/imgs/magician_male_red_front.png`}
        />
      </div>
      <div>
        <div>
          <div className={styles.level}>
            <AttrCircle attr="LV" value={11} fontSize="1.6rem" />
          </div>
          <div className={styles.nameArea}>
            <div>NAME</div>
            <CustomBorderBottom />
          </div>
        </div>
        <div>
          <div className={styles.briefHPArea}>
            <div>HP</div>
            <div className={styles.hpBar}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
