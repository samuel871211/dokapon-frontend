import { useEffect, useState, useRef } from 'react'
import styles from './ContextMenu.module.css'

export default ContextMenu

function ContextMenu (): JSX.Element {
    const ctxMenu = useRef<HTMLDivElement>(null)
    const writeFileMenu = useRef<HTMLDivElement>(null)
    const readFileMenu = useRef<HTMLDivElement>(null)
    const [ctxMenuPos, setCtxMenuPos] = useState({ x: -1, y: -1 })
    const [innerMenuPos, setInnerMenuPos] = useState({ x: -1, y: -1 })
    const [ctxMenuOpen, toggleCtxMenuOpen] = useState(false)
    const [writeFileMenuOpen, toggleWriteFileMenuOpen] = useState(false)
    const [readFileMenuOpen, toggleReadFileMenuOpen] = useState(false)

    function openWriteFileMenu () {
        toggleWriteFileMenuOpen(true)
        if (!writeFileMenu.current || !ctxMenu.current) return
        
        // 決定writeFileMenu要在第幾象限
        // TODO: 小螢幕情況，要幫ctxMenu加上scroll bar
        const writeFileMenuWidth = writeFileMenu.current.clientWidth
        const writeFileMenuHeight = writeFileMenu.current.clientHeight
        const remainWidth = window.innerWidth - ctxMenuPos.x - ctxMenu.current.clientWidth
        const remainHeight = window.innerHeight - ctxMenuPos.y
        const firstQuadrant = remainWidth >= writeFileMenuWidth && remainHeight < writeFileMenuHeight
        const secondQuadrant = remainWidth < writeFileMenuWidth && remainHeight < writeFileMenuHeight
        const thirdQuadrant = remainWidth < writeFileMenuWidth && remainHeight >= writeFileMenuHeight
    }

    function closeWriteFileMenu () {
        toggleWriteFileMenuOpen(false)
    }

    function openReadFileMenu () {
        toggleReadFileMenuOpen(true)
    }

    function closeReadFileMenu () {
        toggleReadFileMenuOpen(false)
    }

    function registerRootEventHandler () {
        const rootElement = document.getElementById('root')
        if (!rootElement) return
    
        rootElement.oncontextmenu = function openContextMenu(e: MouseEvent) {
            e.preventDefault()
            if (!ctxMenu.current) return

            // 決定ctxMenu要在第幾象限
            const [windowWidth, windowHeight] = [window.innerWidth, window.innerHeight]
            const remainWidth = windowWidth - e.clientX - ctxMenu.current.clientWidth
            const remainHeight = windowHeight - e.clientY - ctxMenu.current.clientHeight
            const firstQuadrant = remainWidth >= 0 && remainHeight < 0
            const secondQuadrant = remainWidth < 0 && remainHeight < 0
            const thirdQuadrant = remainWidth < 0 && remainHeight >= 0
            const finalPos = { x: e.clientX, y: e.clientY }
            if (firstQuadrant) {
                finalPos.y -= ctxMenu.current.clientHeight
            } else if (secondQuadrant) {
                finalPos.x -= ctxMenu.current.clientWidth
                finalPos.y -= ctxMenu.current.clientHeight
            } else if (thirdQuadrant) {
                finalPos.x -= ctxMenu.current.clientWidth
            }
            setCtxMenuPos(finalPos)
            toggleCtxMenuOpen(true)
        }
    
        rootElement.onclick = function closeContextMenu (e: MouseEvent) {
            if (!ctxMenu.current) return

            toggleCtxMenuOpen(false)
        }
    }

    useEffect(registerRootEventHandler, [])
    return (
        <div
            id='contextMenu'
            ref={ctxMenu}
            className={styles.contextMenu}
            style={{
                top: `${ctxMenuPos.y}px`,
                left: `${ctxMenuPos.x}px`,
                opacity: ctxMenuOpen ? 1 : 0
            }}
        >
            <div
                className={styles.menuItem}
                onClick={(e) => e.nativeEvent.stopImmediatePropagation()}
                onMouseEnter={openWriteFileMenu}
                onMouseLeave={closeWriteFileMenu}
            >
                <span className={styles.menuItemText}>即時存檔</span>
                <span>{'>'}</span>
                <div
                    ref={writeFileMenu}
                    className={styles.contextMenu}
                    style={{
                        position: 'absolute',
                        top: `${innerMenuPos.y}px`,
                        left: `${innerMenuPos.x}px`,
                        opacity: writeFileMenuOpen ? 1 : 0
                    }}
                >
                    <span className={styles.menuItem}>插槽 0</span>
                    <span className={styles.menuItem}>插槽 1</span>
                    <span className={styles.menuItem}>插槽 2</span>
                    <span className={styles.menuItem}>插槽 3</span>
                    <span className={styles.menuItem}>插槽 4</span>
                    <span className={styles.menuItem}>插槽 5</span>
                    <span className={styles.menuItem}>插槽 6</span>
                    <span className={styles.menuItem}>插槽 7</span>
                    <span className={styles.menuItem}>插槽 8</span>
                    <span className={styles.menuItem}>插槽 9</span>
                    <span className={styles.menuItem}>檔案 ...</span>
                </div>
            </div>
            <div
                className={styles.menuItem}
                onClick={(e) => e.nativeEvent.stopImmediatePropagation()}
                onMouseEnter={openReadFileMenu}
                onMouseLeave={closeReadFileMenu}
            >
                <span className={styles.menuItemText}>即時讀檔</span>
                <span>{'>'}</span>
                <div
                    ref={writeFileMenu}
                    className={styles.contextMenu}
                    style={{
                        position: 'absolute',
                        top: `${innerMenuPos.y}px`,
                        left: `${innerMenuPos.x}px`,
                        opacity: writeFileMenuOpen ? 1 : 0
                    }}
                >
                    <span className={styles.menuItem}>插槽 0</span>
                    <span className={styles.menuItem}>插槽 1</span>
                    <span className={styles.menuItem}>插槽 2</span>
                    <span className={styles.menuItem}>插槽 3</span>
                    <span className={styles.menuItem}>插槽 4</span>
                    <span className={styles.menuItem}>插槽 5</span>
                    <span className={styles.menuItem}>插槽 6</span>
                    <span className={styles.menuItem}>插槽 7</span>
                    <span className={styles.menuItem}>插槽 8</span>
                    <span className={styles.menuItem}>插槽 9</span>
                    <span className={styles.menuItem}>備份 0</span>
                    <span className={styles.menuItem}>檔案 ...</span>
                </div>
            </div>
        </div>
    )
}