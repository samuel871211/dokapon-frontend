// Related third party imports.
import { GameProgress } from "global";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";

// Local application/library specific imports.
import styles from "./GameProgressCtxMenu.module.css";
import gameProgressCtx from "reducers/gameProgress";

// Stateless vars declare.

export default GameProgressCtxMenu;

function GameProgressCtxMenu() {
  const {
    ctxMenuRef,
    inputRef,
    ctxMenuPos,
    ctxMenuOpen,
    exportGameProgress,
    importGameProgress,
  } = useMetaData();
  return (
    <div
      ref={ctxMenuRef}
      className={styles.gameProgressCtxMenu}
      style={ctxMenuPos}
      data-open={ctxMenuOpen}
    >
      <div className={styles.menuItem} onClick={exportGameProgress}>
        匯出
      </div>
      <div
        className={styles.menuItem}
        onClick={() => inputRef.current?.click()}
      >
        匯入
      </div>
      <input
        type="file"
        accept=".json"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={importGameProgress}
      />
    </div>
  );
}

function useMetaData() {
  const ctxMenuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [ctxMenuOpen, toggleCtxMenuOpen] = useState(false);
  const [ctxMenuPos, setCtxMenuPos] = useState({ top: -1, left: -1 });
  const { gameProgress, setGameProgress } = useContext(gameProgressCtx);
  function addCtxMenuEvtListener() {
    const HTMLEl = document.documentElement;
    function handleCtxMenu(e: globalThis.MouseEvent) {
      e.preventDefault();
      const ctxMenuRefEl = ctxMenuRef.current;
      if (!ctxMenuRefEl) return;

      const remainWidth =
        window.innerWidth - e.clientX - ctxMenuRefEl.clientWidth;
      const remainHeight =
        window.innerHeight - e.clientY - ctxMenuRefEl.clientHeight;
      const isFirstQuadrant = remainWidth >= 0 && remainHeight < 0;
      const isSecondQuadrant = remainWidth < 0 && remainHeight < 0;
      const isThirdQuadrant = remainWidth < 0 && remainHeight >= 0;
      const finalPos = { left: e.clientX, top: e.clientY };
      if (isFirstQuadrant) {
        finalPos.top -= ctxMenuRefEl.clientHeight;
      } else if (isSecondQuadrant) {
        finalPos.left -= ctxMenuRefEl.clientWidth;
        finalPos.top -= ctxMenuRefEl.clientHeight;
      } else if (isThirdQuadrant) {
        finalPos.left -= ctxMenuRefEl.clientWidth;
      }
      setCtxMenuPos(finalPos);
      toggleCtxMenuOpen(true);
    }
    function closeCtxMenu(e: MouseEvent) {
      if (e.target === ctxMenuRef.current) return;
      toggleCtxMenuOpen(false);
    }
    HTMLEl.addEventListener("contextmenu", handleCtxMenu);
    HTMLEl.addEventListener("click", closeCtxMenu);
    return () => {
      HTMLEl.removeEventListener("contextmenu", handleCtxMenu);
      HTMLEl.removeEventListener("click", closeCtxMenu);
    };
  }
  function exportGameProgress() {
    const anchorEl = document.createElement("a");
    anchorEl.href =
      "data:text/json;charset=utf-8," + encodeURI(JSON.stringify(gameProgress));
    anchorEl.download = "DokaponGameProgress.json";
    anchorEl.click();
  }
  /**
   * @todo JSONSchema驗證
   */
  function isGameProgress(input: any): input is GameProgress {
    return true;
  }
  async function importGameProgress(e: ChangeEvent<HTMLInputElement>) {
    const jsonFile = e.target.files?.item(0);
    if (!jsonFile) return;

    const jsonFileText = await jsonFile.text();
    const maybeGameProgress = JSON.parse(jsonFileText);
    if (isGameProgress(maybeGameProgress)) setGameProgress(maybeGameProgress);

    // 清空input
    if (!inputRef.current) return;
    inputRef.current.value = "";
  }
  useEffect(addCtxMenuEvtListener, []);
  return {
    ctxMenuRef,
    inputRef,
    ctxMenuPos,
    ctxMenuOpen,
    exportGameProgress,
    importGameProgress,
  };
}
