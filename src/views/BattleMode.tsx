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

export default function BattleMode () {
    // data
    const [paperComplete, setPaperComplete] = useState(false)
    const [paperScale, setPaperScale] = useState(1)
    const [graph] = useState(new joint.dia.Graph({}, { cellNamespace: { standard: joint.shapes.standard } }))

    // watch && mounted
    useEffect(() => {
        if (paperComplete) return console.log('paper Completed!!!')

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
                'cell:mousewheel': function (cellView, evt, x, y, delta) {
                    const oldScale = Paper.scale().sx
                    const { tx, ty } = Paper.translate()
                    delta = delta === 1 ? 0.1 : -0.1
                    const newScale = parseFloat((oldScale + delta).toFixed(1))
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
                'blank:mousewheel': function (evt, x, y, delta) {
                    const oldScale = Paper.scale().sx
                    const { tx, ty } = Paper.translate()
                    delta = delta === 1 ? 0.1 : -0.1
                    const newScale = parseFloat((oldScale + delta).toFixed(1))
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
                'cell:pointerdown': function (cellView, evt, x, y) {
                    dragMouseDownPos = {
                        x: evt.screenX,
                        y: evt.screenY
                    }
                    dragAnchorPos = {
                        x: Paper.translate().tx,
                        y: Paper.translate().ty
                    }
                },
                'cell:pointermove': function (cellView, evt, x, y) {
                    const deltaX = evt.screenX - dragMouseDownPos.x
                    const deltaY = evt.screenY - dragMouseDownPos.y
                    Paper.translate(
                        dragAnchorPos.x + deltaX,
                        dragAnchorPos.y + deltaY
                    )
                },
                'blank:pointerdown': function (evt, x, y) {
                    dragMouseDownPos = {
                        x: evt.screenX,
                        y: evt.screenY
                    }
                    dragAnchorPos = {
                        x: Paper.translate().tx,
                        y: Paper.translate().ty
                    }
                },
                'blank:pointermove': function (evt, x, y) {
                    const deltaX = evt.screenX - dragMouseDownPos.x
                    const deltaY = evt.screenY - dragMouseDownPos.y
                    Paper.translate(
                        dragAnchorPos.x + deltaX,
                        dragAnchorPos.y + deltaY
                    )
                }
            })
        }
        async function loadCells () {
            const cells = await getCells()
            graph.fromJSON(cells)
        }

        // initial data
        const Paper = initPaper()
        setPaperComplete(true)
        loadCells()
        registerPaperEventHandler(Paper)
    }, [graph, paperComplete])



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