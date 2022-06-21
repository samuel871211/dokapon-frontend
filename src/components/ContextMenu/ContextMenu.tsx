// Standard library imports.

// Related third party imports.
import { useEffect, useState, useRef, useContext } from "react";

// Local application/library specific imports.
import styles from "./ContextMenu.module.css";
import {
  getGameProgress,
  findGameProgress,
  findGameProgressBackup,
  updateGameProgress,
} from "api/gameProgress";
import { gameProgressContext } from "reducers/gameProgress";

// Stateless vars declare.

export default ContextMenu;

function ContextMenu(): JSX.Element {
  const ctxMenu = useRef<HTMLDivElement>(null);
  const menuItem = useRef<HTMLDivElement>(null);
  const writeFileMenu = useRef<HTMLDivElement>(null);
  const readFileMenu = useRef<HTMLDivElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const { gameProgress } = useContext(gameProgressContext);
  const [ctxMenuPos, setCtxMenuPos] = useState({ x: -1, y: -1 });
  const [innerMenuPos, setInnerMenuPos] = useState({ x: 188, y: -3 });
  const [ctxMenuOpen, toggleCtxMenuOpen] = useState(false);
  const [writeFileMenuOpen, toggleWriteFileMenuOpen] = useState(false);
  const [readFileMenuOpen, toggleReadFileMenuOpen] = useState(false);
  const [selectedSlotIdx, setSelectedSlotIdx] = useState({ value: 0 });
  const [slotsTimeStamp, setSlotsTimeStamp] = useState([
    { timeStamp: "" },
    { timeStamp: "" },
    { timeStamp: "" },
    { timeStamp: "" },
    { timeStamp: "" },
    { timeStamp: "" },
    { timeStamp: "" },
    { timeStamp: "" },
    { timeStamp: "" },
    { timeStamp: "" },
    { timeStamp: "" },
  ]);

  function browseFile(): void {
    fileInput.current?.click();
  }
  /**
   * @todo 讀檔之後的行為
   * @returns
   */
  function sendFile(): void {
    const file = fileInput.current?.files;
    if (!file) return;
    if (fileInput.current?.value) fileInput.current.value = "";
  }

  /**
   * @todo handle error => ui提示
   * @param slotIdx
   */
  async function saveFileToSlot(slotIdx: number): Promise<void> {
    setSelectedSlotIdx({ value: slotIdx });
    toggleCtxMenuOpen(false);
    toggleWriteFileMenuOpen(false);
    const response = await updateGameProgress(slotIdx, gameProgress);
    console.log(response);
  }
  /**
   * @todo 讀檔之後的行為 => 更新ui state
   */
  async function readBackUp(): Promise<void> {
    toggleCtxMenuOpen(false);
    toggleReadFileMenuOpen(false);
    const response = await findGameProgressBackup(selectedSlotIdx.value);
    console.log(response);
  }
  /**
   * @todo 讀檔之後的行為 => 更新ui state
   */
  async function readFileFromSlot(slotIdx: number): Promise<void> {
    setSelectedSlotIdx({ value: slotIdx });
    toggleCtxMenuOpen(false);
    toggleReadFileMenuOpen(false);
    const response = await findGameProgress(slotIdx);
    console.log(response);
  }

  function openWriteFileMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!writeFileMenu.current || !ctxMenu.current || !ctxMenuOpen) return;

    toggleWriteFileMenuOpen(true);

    // 決定writeFileMenu要在第幾象限
    const writeFileMenuWidth = writeFileMenu.current.clientWidth;
    const writeFileMenuHeight = writeFileMenu.current.clientHeight;
    const remainWidth =
      window.innerWidth - ctxMenuPos.x - ctxMenu.current.clientWidth;
    const remainHeight = window.innerHeight - ctxMenuPos.y;
    const firstQuadrant =
      remainWidth >= writeFileMenuWidth && remainHeight < writeFileMenuHeight;
    const secondQuadrant =
      remainWidth < writeFileMenuWidth && remainHeight < writeFileMenuHeight;
    const thirdQuadrant =
      remainWidth < writeFileMenuWidth && remainHeight >= writeFileMenuHeight;
    const menuItemHeight = (menuItem.current?.offsetHeight || 0) + 10;
    const finalPos = { x: 188, y: -3 };
    if (firstQuadrant) {
      finalPos.y -= writeFileMenu.current.clientHeight - menuItemHeight;
    } else if (secondQuadrant) {
      finalPos.x -= writeFileMenu.current.clientWidth * 2 - 5 - 50;
      finalPos.y -= writeFileMenu.current.clientHeight - menuItemHeight;
    } else if (thirdQuadrant) {
      finalPos.x -= writeFileMenu.current.clientWidth * 2 - 5 - 50;
    }
    setInnerMenuPos(finalPos);
  }

  function closeWriteFileMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!writeFileMenu.current || !ctxMenu.current || !ctxMenuOpen) return;

    toggleWriteFileMenuOpen(false);
  }

  function openReadFileMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!readFileMenu.current || !ctxMenu.current || !ctxMenuOpen) return;

    toggleReadFileMenuOpen(true);

    // 決定readFileMenu要在第幾象限
    const readFileMenuWidth = readFileMenu.current.clientWidth;
    const readFileMenuHeight = readFileMenu.current.clientHeight;
    const remainWidth =
      window.innerWidth - ctxMenuPos.x - ctxMenu.current.clientWidth;
    const remainHeight = window.innerHeight - ctxMenuPos.y;
    const firstQuadrant =
      remainWidth >= readFileMenuWidth && remainHeight < readFileMenuHeight;
    const secondQuadrant =
      remainWidth < readFileMenuWidth && remainHeight < readFileMenuHeight;
    const thirdQuadrant =
      remainWidth < readFileMenuWidth && remainHeight >= readFileMenuHeight;
    const menuItemHeight = (menuItem.current?.offsetHeight || 0) + 5;
    const finalPos = { x: 188, y: -3 + menuItemHeight };
    if (firstQuadrant) {
      finalPos.y -= readFileMenu.current.clientHeight - menuItemHeight - 5;
    } else if (secondQuadrant) {
      finalPos.x -= readFileMenu.current.clientWidth * 2 - 5 - 50;
      finalPos.y -= readFileMenu.current.clientHeight - menuItemHeight - 5;
    } else if (thirdQuadrant) {
      finalPos.x -= readFileMenu.current.clientWidth * 2 - 5 - 50;
    }
    setInnerMenuPos(finalPos);
  }

  function closeReadFileMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!readFileMenu.current || !ctxMenu.current || !ctxMenuOpen) return;

    toggleReadFileMenuOpen(false);
  }

  function registerRootEventHandler() {
    const rootElement = document.getElementById("root");
    if (!rootElement) return;

    rootElement.oncontextmenu = function openContextMenu(e: MouseEvent) {
      e.preventDefault();
      if (!ctxMenu.current) return;

      // 決定ctxMenu要在第幾象限
      const [windowWidth, windowHeight] = [
        window.innerWidth,
        window.innerHeight,
      ];
      const remainWidth = windowWidth - e.clientX - ctxMenu.current.clientWidth;
      const remainHeight =
        windowHeight - e.clientY - ctxMenu.current.clientHeight;
      const firstQuadrant = remainWidth >= 0 && remainHeight < 0;
      const secondQuadrant = remainWidth < 0 && remainHeight < 0;
      const thirdQuadrant = remainWidth < 0 && remainHeight >= 0;
      const finalPos = { x: e.clientX, y: e.clientY };
      if (firstQuadrant) {
        finalPos.y -= ctxMenu.current.clientHeight;
      } else if (secondQuadrant) {
        finalPos.x -= ctxMenu.current.clientWidth;
        finalPos.y -= ctxMenu.current.clientHeight;
      } else if (thirdQuadrant) {
        finalPos.x -= ctxMenu.current.clientWidth;
      }
      setCtxMenuPos(finalPos);
      toggleCtxMenuOpen(true);
    };

    rootElement.onclick = function closeContextMenu(e: MouseEvent) {
      if (!ctxMenu.current) return;

      toggleCtxMenuOpen(false);
    };
  }
  function getAllSlotsDataTimeStamp(): void {
    Promise.all([
      getGameProgress(),
      findGameProgressBackup(selectedSlotIdx.value),
    ])
      .then((responses) => {
        const [res1, res2] = responses;
        const newSlotsTimeStamp = [...slotsTimeStamp];
        if (res1.status === 200) {
          for (let i = 0; i <= 9; i++) {
            newSlotsTimeStamp[i].timeStamp = res1.data[i].timeStamp;
          }
        }
        if (res2.status === 200) {
          newSlotsTimeStamp[10].timeStamp = res2.data?.timeStamp || "";
        } else if (res2.status === 404) {
          newSlotsTimeStamp[10].timeStamp = "";
        }
        setSlotsTimeStamp(newSlotsTimeStamp);
      })
      .catch((err) => console.log(err));
  }
  useEffect(getAllSlotsDataTimeStamp, [selectedSlotIdx]);
  useEffect(registerRootEventHandler, []);
  return (
    <div
      ref={ctxMenu}
      className={styles.contextMenu}
      style={{
        top: `${ctxMenuPos.y}px`,
        left: `${ctxMenuPos.x}px`,
        opacity: ctxMenuOpen ? 1 : 0,
        zIndex: ctxMenuOpen ? 999 : 0,
      }}
    >
      <input
        type="file"
        ref={fileInput}
        className={styles.fileInput}
        onChange={sendFile}
        accept=".json"
      />
      <div
        className={styles.menuItem}
        onClick={(e) => e.nativeEvent.stopImmediatePropagation()}
        onMouseEnter={openWriteFileMenu}
        onMouseLeave={closeWriteFileMenu}
        ref={menuItem}
      >
        <span className={styles.menuItemText}>即時存檔</span>
        <span>{">"}</span>
        <div
          ref={writeFileMenu}
          className={`${styles.contextMenu} ${styles.innerMenu}`}
          style={{
            position: "absolute",
            top: `${innerMenuPos.y}px`,
            left: `${innerMenuPos.x}px`,
            opacity: writeFileMenuOpen ? 1 : 0,
            zIndex: writeFileMenuOpen ? 999 : 0,
          }}
        >
          <span className={styles.menuItem} onClick={(e) => saveFileToSlot(0)}>
            插槽 0 - {slotsTimeStamp[0].timeStamp}
          </span>
          <span className={styles.menuItem} onClick={(e) => saveFileToSlot(1)}>
            插槽 1 - {slotsTimeStamp[1].timeStamp}
          </span>
          <span className={styles.menuItem} onClick={(e) => saveFileToSlot(2)}>
            插槽 2 - {slotsTimeStamp[2].timeStamp}
          </span>
          <span className={styles.menuItem} onClick={(e) => saveFileToSlot(3)}>
            插槽 3 - {slotsTimeStamp[3].timeStamp}
          </span>
          <span className={styles.menuItem} onClick={(e) => saveFileToSlot(4)}>
            插槽 4 - {slotsTimeStamp[4].timeStamp}
          </span>
          <span className={styles.menuItem} onClick={(e) => saveFileToSlot(5)}>
            插槽 5 - {slotsTimeStamp[5].timeStamp}
          </span>
          <span className={styles.menuItem} onClick={(e) => saveFileToSlot(6)}>
            插槽 6 - {slotsTimeStamp[6].timeStamp}
          </span>
          <span className={styles.menuItem} onClick={(e) => saveFileToSlot(7)}>
            插槽 7 - {slotsTimeStamp[7].timeStamp}
          </span>
          <span className={styles.menuItem} onClick={(e) => saveFileToSlot(8)}>
            插槽 8 - {slotsTimeStamp[8].timeStamp}
          </span>
          <span className={styles.menuItem} onClick={(e) => saveFileToSlot(9)}>
            插槽 9 - {slotsTimeStamp[9].timeStamp}
          </span>
        </div>
      </div>
      <div
        className={styles.menuItem}
        onClick={(e) => e.nativeEvent.stopImmediatePropagation()}
        onMouseEnter={openReadFileMenu}
        onMouseLeave={closeReadFileMenu}
      >
        <span className={styles.menuItemText}>即時讀檔</span>
        <span>{">"}</span>
        <div
          ref={readFileMenu}
          className={`${styles.contextMenu} ${styles.innerMenu}`}
          style={{
            position: "absolute",
            top: `${innerMenuPos.y}px`,
            left: `${innerMenuPos.x}px`,
            opacity: readFileMenuOpen ? 1 : 0,
            zIndex: readFileMenuOpen ? 999 : 0,
          }}
        >
          <span
            className={`
                        ${styles.menuItem}
                        ${
                          slotsTimeStamp[0].timeStamp === ""
                            ? styles.menuItemDisabled
                            : ""
                        }
                        `}
            onClick={(e) => readFileFromSlot(0)}
          >
            插槽 0 - {slotsTimeStamp[0].timeStamp}
          </span>
          <span
            className={`
                        ${styles.menuItem}
                        ${
                          slotsTimeStamp[1].timeStamp === ""
                            ? styles.menuItemDisabled
                            : ""
                        }
                        `}
            onClick={(e) => readFileFromSlot(1)}
          >
            插槽 1 - {slotsTimeStamp[1].timeStamp}
          </span>
          <span
            className={`
                        ${styles.menuItem}
                        ${
                          slotsTimeStamp[2].timeStamp === ""
                            ? styles.menuItemDisabled
                            : ""
                        }
                        `}
            onClick={(e) => readFileFromSlot(2)}
          >
            插槽 2 - {slotsTimeStamp[2].timeStamp}
          </span>
          <span
            className={`
                        ${styles.menuItem}
                        ${
                          slotsTimeStamp[3].timeStamp === ""
                            ? styles.menuItemDisabled
                            : ""
                        }
                        `}
            onClick={(e) => readFileFromSlot(3)}
          >
            插槽 3 - {slotsTimeStamp[3].timeStamp}
          </span>
          <span
            className={`
                        ${styles.menuItem}
                        ${
                          slotsTimeStamp[4].timeStamp === ""
                            ? styles.menuItemDisabled
                            : ""
                        }
                        `}
            onClick={(e) => readFileFromSlot(4)}
          >
            插槽 4 - {slotsTimeStamp[4].timeStamp}
          </span>
          <span
            className={`
                        ${styles.menuItem}
                        ${
                          slotsTimeStamp[5].timeStamp === ""
                            ? styles.menuItemDisabled
                            : ""
                        }
                        `}
            onClick={(e) => readFileFromSlot(5)}
          >
            插槽 5 - {slotsTimeStamp[5].timeStamp}
          </span>
          <span
            className={`
                        ${styles.menuItem}
                        ${
                          slotsTimeStamp[6].timeStamp === ""
                            ? styles.menuItemDisabled
                            : ""
                        }
                        `}
            onClick={(e) => readFileFromSlot(6)}
          >
            插槽 6 - {slotsTimeStamp[6].timeStamp}
          </span>
          <span
            className={`
                        ${styles.menuItem}
                        ${
                          slotsTimeStamp[7].timeStamp === ""
                            ? styles.menuItemDisabled
                            : ""
                        }
                        `}
            onClick={(e) => readFileFromSlot(7)}
          >
            插槽 7 - {slotsTimeStamp[7].timeStamp}
          </span>
          <span
            className={`
                        ${styles.menuItem}
                        ${
                          slotsTimeStamp[8].timeStamp === ""
                            ? styles.menuItemDisabled
                            : ""
                        }
                        `}
            onClick={(e) => readFileFromSlot(8)}
          >
            插槽 8 - {slotsTimeStamp[8].timeStamp}
          </span>
          <span
            className={`
                        ${styles.menuItem}
                        ${
                          slotsTimeStamp[9].timeStamp === ""
                            ? styles.menuItemDisabled
                            : ""
                        }
                        `}
            onClick={(e) => readFileFromSlot(9)}
          >
            插槽 9 - {slotsTimeStamp[9].timeStamp}
          </span>
          <span
            className={`
                        ${styles.menuItem}
                        ${
                          slotsTimeStamp[10].timeStamp === ""
                            ? styles.menuItemDisabled
                            : ""
                        }
                        `}
            onClick={(e) => readBackUp()}
          >
            備份 {selectedSlotIdx.value} - {slotsTimeStamp[10].timeStamp}
          </span>
          <span className={styles.menuItem} onClick={browseFile}>
            檔案 ...
          </span>
        </div>
      </div>
    </div>
  );
}
