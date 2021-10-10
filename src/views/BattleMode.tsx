import { useState, useEffect, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import $ from 'jquery'
import * as joint from 'jointjs'
import 'jointjs/dist/joint.css'
import { getCells } from '../api/graph'
import * as characters from '../global/characters'

export default function BattleMode (): JSX.Element {
    // data
    const [paperScale, setPaperScale] = useState(1)
    const [graph] = useState(new joint.dia.Graph({}, { cellNamespace: { standard: joint.shapes.standard } }))

    // watch && mounted
    useEffect(() => {
        function initPaper () {
            // paper should be initialized after #canvas is being mounted
            const Paper = new joint.dia.Paper({
                el: $('#paper'),
                cellViewNamespace: { standard: joint.shapes.standard },
                width: '100%',
                height: 'calc(100vh - 48px)',
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
                'element:contextmenu': function (
                    elementView: joint.dia.ElementView,
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    const character = characters.createCharacter({
                        job: '',
                        gender: '',
                        color: ''
                    })
                    character.position(x, y)
                    character.addTo(graph)
                    console.log('element added')
                },
                'cell:mousewheel': function (
                    cellView: joint.dia.CellView,
                    evt: JQuery.Event,
                    x: number,
                    y: number,
                    delta: number
                ) {
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

                    setPaperScale(newScale)
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

                    setPaperScale(newScale)
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
        async function loadCells () {
            const response = await getCells()
            graph.fromJSON(response.data)
        }

        // initial data
        const Paper = initPaper()
        void loadCells()
        registerPaperEventHandler(Paper)
        Paper.translate(-6085, -4606) // center of the world

        return () => {
            $('#paper').off()
        }

    }, [graph])



    // css style
    const styles = makeStyles(theme => ({
        AppBar: {
            backgroundColor: theme.palette.background.default,
            maxHeight: '56px'
        },
        GridItem: {
            textAlign: 'center'
        },
        mx12: {
            marginRight: '12px',
            marginLeft: '12px'
        },
        ml12: {
            marginLeft: '12px'
        }
    }))
    const classes = styles()

    // template
    return (
        <Fragment>
            <AppBar className={classes.AppBar} position="sticky">
                <Toolbar variant="dense" disableGutters>
                    <ZoomInIcon
                        htmlColor="white"
                        className={classes.ml12}
                    />
                    <Box color="white" display="flex" mr={1.5}>
                        {(paperScale * 100).toFixed(0) + '%'}
                    </Box>
                    <Divider
                        orientation="vertical"
                        flexItem
                    />
                </Toolbar>
            </AppBar>
                <Box
                    id="paper"
                    onContextMenu={(e) => e.preventDefault()}
                />
        </Fragment>
    )
}