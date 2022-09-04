// Related third party imports.
import { useEffect, useRef } from "react";
import { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import styles from "./CollectMoneyFieldCheck.module.css";

// Stateless vars declare.

export default CollectMoneyFieldCheck;

function CollectMoneyFieldCheck(props: { state: TransitionStatus }) {
  const { state } = props;
  const { focusElement } = useMetaData(state);
  return <div className={styles.collectMoneyFieldCheckContainer}></div>;
}

function useMetaData(state: TransitionStatus) {
  const focusElement = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (state === "entered") focusElement.current?.focus();
  }, [state]);
  return { focusElement };
}
