import { useState, useEffect } from 'react'
import * as joint from 'jointjs'
import 'jointjs/dist/joint.css'
import { getCells } from '../../api/graph'
import { createCharacter } from '../../global/characters'
import { Transition } from 'react-transition-group'
// import { userPreferenceContext } from '../../reducers/userPreference'
import Drawer from './Drawer'
import { useReducer } from 'react'
import { initUIState, UIStateContext, UIStateReducer } from '../../reducers/Game/UIState'
import Roulette from './Roulette'
// let keyPressed: { [key: string]: boolean } = {}
// console.log(keyPressed)

export default Game

/**
 * @todo 上下左右可以移動地圖的功能，keyDown事件可以做到，只是移動速度太慢
 * 
 * 如果將delta設太高，畫面移動又會變得有斷層，所以結論還是用滑鼠就好(?
 */
function Game (): JSX.Element {
    // data
    // const focusElement = useRef<HTMLDivElement>(null)
    // const { userPreference } = useContext(userPreferenceContext)
    // const [keyPressed, setKeyPress] = useState< { [key: string]: boolean }>({})
    // const [center, setCenter] = useState({ x: -6085, y: -4606 })
    const [UIState, UIStateDispatch] = useReducer(UIStateReducer, initUIState)
    const [graph] = useState(new joint.dia.Graph({}, { cellNamespace: { standard: joint.shapes.standard } }))
    // const [paper, setPaper] = useState<joint.dia.Paper>()
    // const handleKeyBoardAttrs = UIState.isPaperTopLayer ? {
    //     tabIndex: 0,
    //     onBlur: (event: SyntheticEvent<HTMLDivElement>) => event.currentTarget?.focus(),
    //     ref: focusElement,
    //     onKeyDown: handleKeyDown,
    //     onKeyUp: handleKeyUp
    // } : {}
    // function handleKeyDown (e: KeyboardEvent) {
    //     if (!paper) return
    //     keyPressed[e.key.toLowerCase()] = true
    //     const delta = keyPressed[userPreference.square] ? 2 : 1
    //     switch (e.key.toLowerCase()) {
    //     case userPreference.arrowUp: {
    //         const { tx, ty } = paper.translate()
    //         paper.translate(tx, ty + delta)
    //         return
    //     }
    //     case userPreference.arrowDown: {
    //         const { tx, ty } = paper.translate()
    //         paper.translate(tx, ty - delta)
    //         return
    //     }
    //     case userPreference.arrowLeft: {
    //         const { tx, ty } = paper.translate()
    //         paper.translate(tx + delta, ty)
    //         return
    //     }
    //     case userPreference.arrowRight: {
    //         const { tx, ty } = paper.translate()
    //         paper.translate(tx - delta, ty)
    //         return
    //     }
    //     }
    // }

    // function handleKeyUp (e: KeyboardEvent) {
    //     keyPressed = {}
    // }

    // useEffect(() => focusElement.current?.focus(), [UIState.isPaperTopLayer])
    // watch && mounted
    useEffect(() => {
        function initPaper () {
            // paper should be initialized after #canvas is being mounted
            const Paper = new joint.dia.Paper({
                el: document.getElementById('paper') || undefined,
                cellViewNamespace: { standard: joint.shapes.standard },
                width: '100%',
                height: '100%',
                model: graph,
                restrictTranslate: true,
                background: {
                    color: '#555'
                },
                gridSize: 1,
                interactive: false,
                drawGrid: true
            })
            return Paper
        }
        function registerPaperEventHandler (Paper: joint.dia.Paper): void {
            let dragMouseDownPos = { x: 0, y: 0 }
            let dragAnchorPos = { x: 0, y: 0 }
            Paper.on({
                'cell:mousewheel': function (
                    cellView: joint.dia.CellView,
                    evt: JQuery.Event,
                    x: number,
                    y: number,
                    delta: number
                ) {
                    evt.preventDefault()
                    const oldScale = Paper.scale().sx
                    const { tx, ty } = Paper.translate()
                    delta = delta === 1 ? 0.05 : -0.05
                    const newScale = parseFloat((oldScale + delta).toFixed(2))
                    if (newScale > 9.9 || newScale < 0.1) return

                    if (oldScale === 1) {
                        Paper.scale(newScale, newScale, x, y)
                    } else if (oldScale !== 1) {
                        Paper.translate(
                            parseInt((tx - x * (1 - oldScale)).toFixed(0)),
                            parseInt((ty - y * (1 - oldScale)).toFixed(0))
                        )
                        Paper.scale(1)
                        Paper.scale(newScale, newScale, x, y)
                    }
                },
                'cell:pointerdown': function (
                    cellView: joint.dia.CellView,
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    dragMouseDownPos = {
                        x: evt.screenX || 0,
                        y: evt.screenY || 0
                    }
                    dragAnchorPos = {
                        x: Paper.translate().tx,
                        y: Paper.translate().ty
                    }
                },
                'cell:pointermove': function (
                    cellView: joint.dia.CellView,
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    const deltaX = (evt.screenX || 0) - dragMouseDownPos.x
                    const deltaY = (evt.screenY || 0) - dragMouseDownPos.y
                    Paper.translate(
                        dragAnchorPos.x + deltaX,
                        dragAnchorPos.y + deltaY
                    )
                },
                'blank:mousewheel': function (
                    evt: JQuery.Event,
                    x: number,
                    y: number,
                    delta: number
                ) {
                    evt.preventDefault()
                    const oldScale = Paper.scale().sx
                    const { tx, ty } = Paper.translate()
                    delta = delta === 1 ? 0.05 : -0.05
                    const newScale = parseFloat((oldScale + delta).toFixed(2))
                    if (newScale > 9.9 || newScale < 0.1) return

                    if (oldScale === 1) {
                        Paper.scale(newScale, newScale, x, y)
                    } else if (oldScale !== 1) {
                        Paper.translate(
                            parseInt((tx - x * (1 - oldScale)).toFixed(0)),
                            parseInt((ty - y * (1 - oldScale)).toFixed(0))
                        )
                        Paper.scale(1)
                        Paper.scale(newScale, newScale, x, y)
                    }
                },
                'blank:pointerdown': function (
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    dragMouseDownPos = {
                        x: evt.screenX || 0,
                        y: evt.screenY || 0
                    }
                    dragAnchorPos = {
                        x: Paper.translate().tx,
                        y: Paper.translate().ty
                    }
                },
                'blank:pointermove': function (
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    const deltaX = (evt.screenX || 0) - dragMouseDownPos.x
                    const deltaY = (evt.screenY || 0) - dragMouseDownPos.y
                    Paper.translate(
                        dragAnchorPos.x + deltaX,
                        dragAnchorPos.y + deltaY
                    )
                }
            })
        }
        /**
         * @todo create player, read game Progress
         */
        async function loadCells (): Promise<void> {
            const response = await getCells()
            graph.fromJSON(response.data)
            
            const player = createCharacter({
                characterType: 'player',
                job: 'magician',
                gender: 'female',
                color: 'darkBlue'
            }).position(6700 - 40, 4840 - 110)
            graph.addCell(player)
        }

        // initial data
        const Paper = initPaper()
        // setPaper(Paper)
        void loadCells()
        registerPaperEventHandler(Paper)
        Paper.translate(-6085, -4606) // center of the world

        return () => {
            const el = document.getElementById('paper')
            if (el) el.replaceWith(el.cloneNode(true))
            // $('#paper').off()
        }

    }, [graph])

    // template
    return (
        <UIStateContext.Provider value={{ UIState, UIStateDispatch }}>
            <div id='paper'></div>

            <Transition appear in={UIState.showDrawer} timeout={{ enter: 0, exit: 1000 }}>
            {state => state !== 'exited' && (<Drawer state={state}/>)}
            </Transition>

            <Transition in={UIState.showRoulette} timeout={{ enter: 1000, exit: 0 }}>
            {state => state !== 'exited' && (<Roulette state={state}/>)}
            </Transition>

        </UIStateContext.Provider>
    )
}