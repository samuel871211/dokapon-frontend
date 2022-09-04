// Related third party imports.
import { TransitionStatus } from "react-transition-group";
import {
  useRef,
  useContext,
  useEffect,
  SyntheticEvent,
  KeyboardEvent,
  useState,
} from "react";
import classNames from "classnames";

// Local application/library specific imports.
import styles from "./Roulette.module.css";
import { userPreferenceContext } from "reducers/userPreference";
import { UIStateContext } from "reducers/Game/UIState";

// Stateless vars declare.
const transitionStyles = {
  entering: "",
  entered: styles.entered,
  exiting: "",
  exited: "",
  unmounted: "",
};

export default Roulette;

/**
 * @todo 無法得知arrow停下來的時候是落在幾度，所以按下O的時候一定會出現動畫斷層
 *
 * 機率分佈：
 *
 * 0 => 1/16
 *
 * 1 => 2/16
 *
 * 2 => 3/16
 *
 * 3 => 4/16
 *
 * 4 => 3/16
 *
 * 5 => 2/16
 *
 * 6 => 1/16
 */
function Roulette(props: { state: TransitionStatus }): JSX.Element {
  const { state } = props;
  const [rouletteResult, setRouletteResult] = useState(-1);
  const { userPreference } = useContext(userPreferenceContext);
  const { UIState, UIStateDispatch } = useContext(UIStateContext);
  const focusElement = useRef<HTMLDivElement>(null);
  const handleKeyUpAttrs = UIState.showRoulette
    ? {
        tabIndex: 0,
        ref: focusElement,
        onBlur: (event: SyntheticEvent<HTMLDivElement>) =>
          event.currentTarget.focus(),
        onKeyUp: handleKeyUp,
      }
    : {};
  function getRouletteEndCss(): keyof typeof styles {
    return `stopAt${rouletteResult}` as keyof typeof styles;
  }
  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case userPreference.circle:
        setRouletteResult(
          Math.getRandomIntInclusive(0, 3) + Math.getRandomIntInclusive(0, 3)
        );
        return;
      case userPreference.cross:
        UIStateDispatch({
          type: "showRoulette",
          payload: false,
        });
        UIStateDispatch({
          type: "showDrawer",
          payload: true,
        });
        return;
    }
  }
  useEffect(() => {
    if (rouletteResult !== -1) {
      setTimeout(() => {
        UIStateDispatch({
          type: "showRoulette",
          payload: false,
        });
        UIStateDispatch({
          type: "isPaperTopLayer",
          payload: true,
        });
      }, 1000);
    }
  }, [rouletteResult]);
  useEffect(() => {
    if (state === "entered") focusElement.current?.focus();
  }, [state]);
  return (
    <div {...handleKeyUpAttrs} className={styles.container}>
      <div className={classNames(styles.roulette, transitionStyles[state])}>
        <svg
          className={styles.svg}
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_1">
            <title>Layer 1</title>
            <ellipse
              fill="#fff"
              stroke="#000"
              cx="299.99999"
              cy="300"
              id="svg_1"
              rx="285"
              ry="285"
              strokeWidth="30"
            />
            <path
              fill="#ff7f00"
              stroke="#bfbf00"
              strokeWidth="30"
              opacity="undefined"
              d="m300,554.99998c-140.88398,0 -255,-114.11602 -255,-255c0,-140.88398 114.11602,-255 255,-255c140.88398,0 255,114.11602 255,255c0,140.88398 -114.11602,255 -255,255z"
              id="svg_2"
            />
            <ellipse
              fill="none"
              stroke="#000000"
              strokeWidth="25"
              cx="299.99999"
              cy="300.00002"
              id="svg_3"
              rx="150"
              ry="150"
            />
            <line
              fill="none"
              strokeWidth="5"
              x1="300"
              y1="460.66721"
              x2="300"
              y2="540.16556"
              id="svg_4"
              stroke="#000000"
            />
            <line
              stroke="#000000"
              id="svg_6"
              y2="69.33959"
              x2="367.29553"
              y1="144.33958"
              x1="347.01252"
              strokeWidth="5"
              fill="none"
            />
            <line
              stroke="#000000"
              id="svg_7"
              y2="144.81128"
              x2="253.1446"
              y1="69.33959"
              x1="231.91819"
              strokeWidth="5"
              fill="none"
            />
            <line
              stroke="#000000"
              id="svg_14"
              y2="187.68817"
              x2="512.30645"
              y1="223.44623"
              x1="443.01612"
              strokeWidth="5"
              fill="none"
            />
            <line
              stroke="#000000"
              id="svg_15"
              y2="188.16647"
              x2="86.99984"
              y1="223.66645"
              x1="156.99982"
              strokeWidth="5"
              fill="none"
            />
            <line
              stroke="#000000"
              id="svg_16"
              y2="409.16638"
              x2="513.99967"
              y1="374.66639"
              x1="443.9997"
              strokeWidth="5"
              fill="none"
            />
            <line
              stroke="#000000"
              id="svg_17"
              y2="410.66638"
              x2="86.49984"
              y1="375.66639"
              x1="156.49982"
              strokeWidth="5"
              fill="none"
            />
            <text
              fontWeight="bold"
              xmlSpace="preserve"
              textAnchor="start"
              fontFamily="'Arimo'"
              fontSize="90"
              id="svg_18"
              y="131.66711"
              x="273.58329"
              stroke="#000000"
              fill="#ffffff"
            >
              0
            </text>
            <text
              fontWeight="bold"
              xmlSpace="preserve"
              textAnchor="start"
              fontFamily="'Arimo'"
              fontSize="90"
              id="svg_20"
              y="172.33381"
              x="402.3351"
              stroke="#000000"
              fill="#ffffff"
            >
              1
            </text>
            <text
              fontWeight="bold"
              xmlSpace="preserve"
              textAnchor="start"
              fontFamily="'Arimo'"
              fontSize="90"
              id="svg_21"
              y="172"
              x="148.33484"
              stroke="#000000"
              fill="#ffffff"
            >
              6
            </text>
            <text
              transform="matrix(1 0 0 1 0 0)"
              stroke="#000000"
              fontWeight="bold"
              xmlSpace="preserve"
              textAnchor="start"
              fontFamily="'Arimo'"
              fontSize="90"
              id="svg_22"
              y="333.00004"
              x="472.16654"
              fill="#ffffff"
            >
              2
            </text>
            <text
              transform="matrix(1 0 0 1 0 0)"
              fontWeight="bold"
              xmlSpace="preserve"
              textAnchor="start"
              fontFamily="'Arimo'"
              fontSize="90"
              id="svg_25"
              y="333.00005"
              x="75.33477"
              stroke="#000000"
              fill="#ffffff"
            >
              5
            </text>
            <text
              fontWeight="bold"
              xmlSpace="preserve"
              textAnchor="start"
              fontFamily="'Arimo'"
              fontSize="90"
              id="svg_26"
              y="503.33415"
              x="376.33507"
              stroke="#000000"
              fill="#ffffff"
            >
              3
            </text>
            <text
              fontWeight="bold"
              xmlSpace="preserve"
              textAnchor="start"
              fontFamily="'Arimo'"
              fontSize="90"
              id="svg_27"
              y="506"
              x="165.33485"
              stroke="#000000"
              fill="#ffffff"
            >
              4
            </text>
            <path
              className={classNames({
                [styles.arrow]: true,
                [styles.arrowRotate]: rouletteResult === -1,
                [getRouletteEndCss()]: rouletteResult !== -1,
              })}
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="2"
              id="svg_28"
              d="m370.03786,338.9455l26.16052,-24.05457l-50.58008,0l-50.57997,0l0,-14.89092l0,-14.89093l49.99972,0c27.49981,0 49.99968,-0.75474 49.99968,-1.67721c0,-0.92245 -10.94759,-11.74701 -24.32794,-24.05456l-24.32802,-22.37738l22.48652,0l22.48644,0l34.34189,31.53021l34.34187,31.53019l-34.40775,31.46987l-34.40774,31.46987l-23.67284,0l-23.67289,0l26.16059,-24.05458l0.00001,0.00001z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
