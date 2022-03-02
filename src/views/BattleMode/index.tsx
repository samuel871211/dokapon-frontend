import { useState, useEffect, Fragment } from 'react'
import * as joint from 'jointjs'
import 'jointjs/dist/joint.css'
import { getCells } from '../../api/graph'
import { createCharacter } from '../../global/characters'
import './index.module.css'

export default BattleMode

function BattleMode (): JSX.Element {
    // data
    const [graph] = useState(new joint.dia.Graph({}, { cellNamespace: { standard: joint.shapes.standard } }))

    // watch && mounted
    useEffect(() => {
        function initPaper () {
            // paper should be initialized after #canvas is being mounted
            const Paper = new joint.dia.Paper({
                el: document.getElementById('paper') || undefined,
                cellViewNamespace: { standard: joint.shapes.standard },
                width: '100%',
                height: '100vh',
                model: graph,
                restrictTranslate: true,
                background: {
                    color: '#111'
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
        async function loadCells (): Promise<void> {
            const response = await getCells()
            graph.fromJSON(response.data)
            
            /**
             * create player, read game Archive
             */
            const player = createCharacter({
                characterType: 'player',
                job: 'magician',
                gender: 'female',
                color: 'darkBlue'
            }).position(6700 - 40, 4840 - 110)
            // window.onclick = function () {
            //     graph.addCell(player)
            // }
            // graph.addCell(player)
            // const el = new player().position(6700, 4840)
            // graph.addCell(el)
        }

        // initial data
        const Paper = initPaper()
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
        <Fragment>
            <div
                id='paper'
                onContextMenu={(e) => e.preventDefault()}
            ></div>
            <div className='test'></div>
        </Fragment>
    )
}