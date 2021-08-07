import * as shapes from './shapes'
import { useState, useEffect, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Tooltip from '@material-ui/core/Tooltip'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { Color } from '@material-ui/lab/Alert'
import $ from "jquery"
import _ from 'lodash'
// import * as Backbone from 'backbone'
import * as joint from 'jointjs'
import 'jointjs/dist/joint.css'
import Graph from '../api/graph'

export default function GraphEditor () {
    // data
    const [addCellPos, setAddCellPos] = useState({
        x: -1,
        y: -1
    })
    const [addCellCtxMenuPos, setAddCellCtxMenuPos] = useState({
        x: -1,
        y: -1
    })
    const [ctrlCellCtxMenuPos, setCtrlCellCtxMenuPos] = useState({
        x: -1,
        y: -1
    })
    const [graph] = useState(new joint.dia.Graph({}, { cellNamespace: { standard: joint.shapes.standard } }))
    const [paper, initPaper] = useState<joint.dia.Paper>()
    // <joint.dia.Link | joint.dia.Element>
    const [selectedLink, setSelectedLink] = useState<joint.dia.Link>()
    const [selectedElement, setSelectedElement] = useState<joint.dia.Element>()
    const [snackbar, setSnackbar] = useState<{ open: boolean, severity: Color, text: string }>({
        open: false,
        severity: 'success',
        text: ''
    })

    // methods
    function initCanvas (): void {
        // paper should be initialized after #canvas is being mounted
        const Paper = new joint.dia.Paper({
            el: $('#paper'),
            cellViewNamespace: { standard: joint.shapes.standard },
            width: 6000,
            height: 6000,
            model: graph,
            restrictTranslate: true,
            background: {
                color: '#111'
            },
            gridSize: 20,
            drawGrid: true
        })
        initPaper(Paper)
    }

    function registerPaperEventHandler (): void {
        paper?.on({
            'element:mouseenter': function (cellView, evt, x, y) {
                cellView.highlight()
            },
            'element:mouseout': function (cellView, evt, x, y) {
                cellView.unhighlight()
            },
            'link:mouseenter': function (linkView, evt) {
                const sourceArrowheadTool = new joint.linkTools.SourceArrowhead()
                const targetArrowheadTool = new joint.linkTools.TargetArrowhead()
                const boundaryTool = new joint.linkTools.Boundary()
                const infoButton = new joint.linkTools.Button({
                    markup: [{
                        tagName: 'circle',
                        attributes: {
                            r: 15,
                            fill: 'green'
                        }
                    }, {
                        tagName: 'text',
                        textContent: linkView.model.attributes.name[6],
                        attributes: {
                            fill: 'white',
                            x: -5,
                            y: 5
                        }
                    }],
                    offset: 20
                })
                const toolsView = new joint.dia.ToolsView({
                    tools: [
                        sourceArrowheadTool,
                        targetArrowheadTool,
                        boundaryTool,
                        infoButton
                    ]
                })
                linkView.addTools(toolsView)
            },
            'link:mouseleave': function (linkView, evt) {
                linkView.removeTools()
            },
            'link:connect': function (
                linkView: joint.dia.LinkView,
                evt: JQuery.Event,
                elementViewConnected: joint.dia.ElementView,
                magnet: HTMLElement,
                arrowhead: 'source' | 'target'
            ) {
                const name: string = linkView.model.attributes.name
                const sourcePoint = linkView.model.getSourcePoint()
                const targetPoint = linkView.model.getTargetPoint()
                const sourceCell = linkView.model.getSourceCell()
                const targetCell = linkView.model.getTargetCell()
                if (!sourceCell || !targetCell) return
                switch (name.toLowerCase()) {
                case 'onewayhlink':
                    if (sourcePoint.x >= targetPoint.x) {
                        sourceCell.attributes.left = targetCell.id
                    } else if (sourcePoint.x < targetPoint.x) {
                        sourceCell.attributes.right = targetCell.id
                    }
                    break
                case 'twowayhlink':
                    if (sourcePoint.x >= targetPoint.x) {
                        sourceCell.attributes.left = targetCell.id
                        targetCell.attributes.right = sourceCell.id
                    } else if (sourcePoint.x < targetPoint.x) {
                        sourceCell.attributes.right = targetCell.id
                        targetCell.attributes.left = sourceCell.id
                    }
                    break
                case 'onewayvlink':
                    if (sourcePoint.y >= targetPoint.y) {
                        sourceCell.attributes.top = targetCell.id
                    } else if (sourcePoint.y < targetPoint.y) {
                        sourceCell.attributes.bottom = targetCell.id
                    }
                    break
                case 'twowayvlink':
                    if (sourcePoint.y >= targetPoint.y) {
                        sourceCell.attributes.top = targetCell.id
                        targetCell.attributes.bottom = sourceCell.id
                    } else if (sourcePoint.y < targetPoint.y) {
                        sourceCell.attributes.bottom = targetCell.id
                        targetCell.attributes.top = sourceCell.id
                    }
                    break
                default:
                    console.warn(`unknown link name ${name}`)
                    break
                }
                graph.getNeighbors(sourceCell)
                graph.getNeighbors(targetCell)
                // console.log(sourceCell.attributes)
                // console.log(targetCell.attributes)
            },
            'link:disconnect': function (
                linkView: joint.dia.LinkView,
                evt: JQuery.Event,
                elementViewConnected: joint.dia.ElementView,
                magnet: HTMLElement,
                arrowhead: 'source' | 'target'
            ) {
                const name: string = linkView.model.attributes.name
                const sourcePoint = linkView.model.getSourcePoint()
                const targetPoint = linkView.model.getTargetPoint()
                const sourceCell = arrowhead === 'source' ? elementViewConnected.model : linkView.model.getSourceCell()
                const targetCell = arrowhead === 'target' ? elementViewConnected.model : linkView.model.getTargetCell()
                if (!sourceCell || !targetCell) return
                switch (name.toLowerCase()) {
                case 'onewayhlink':
                    if (sourcePoint.x >= targetPoint.x) {
                        delete sourceCell.attributes.left
                    } else if (sourcePoint.x < targetPoint.x) {
                        delete sourceCell.attributes.right
                    }
                    break
                case 'twowayhlink':
                    if (sourcePoint.x >= targetPoint.x) {
                        delete sourceCell.attributes.left
                        delete targetCell.attributes.right
                    } else if (sourcePoint.x < targetPoint.x) {
                        delete sourceCell.attributes.right
                        delete targetCell.attributes.left
                    }
                    break
                case 'onewayvlink':
                    if (sourcePoint.y >= targetPoint.y) {
                        delete sourceCell.attributes.top
                    } else if (sourcePoint.y < targetPoint.y) {
                        delete sourceCell.attributes.bottom
                    }
                    break
                case 'twowayvlink':
                    if (sourcePoint.y >= targetPoint.y) {
                        delete sourceCell.attributes.top
                        delete targetCell.attributes.bottom
                    } else if (sourcePoint.y < targetPoint.y) {
                        delete targetCell.attributes.top
                        delete sourceCell.attributes.bottom
                    }
                    break
                default:
                    console.warn(`unknown link name ${name}`)
                    break
                }
                console.log(sourceCell?.attributes)
                console.log(targetCell?.attributes)
            },
            'blank:contextmenu': function (evt, x, y) {
                setAddCellPos({ x, y })
                setAddCellCtxMenuPos({ x: evt.clientX, y: evt.clientY })
            },
            'cell:contextmenu': function (cellView, evt, x, y) {
                if (cellView.model.isLink()) setSelectedLink(cellView.model)
                if (cellView.model.isElement()) setSelectedElement(cellView.model)
                setCtrlCellCtxMenuPos({ x: evt.clientX, y: evt.clientY })
            }
        })
    }

    function addElement (name: string): void {
        const element = shapes.createElement(name)
        element.position(addCellPos.x, addCellPos.y)
        element.addTo(graph)
        closeAddCellCtxMenu()
    }

    function addLink (name: string): void {
        const link = shapes.createLink(name)
        const sourceAxis = {
            x: addCellPos.x,
            y: addCellPos.y
        }
        link.source(sourceAxis)

        // 依據水平、垂直，來決定線段要怎麼長
        switch (name.toLowerCase()) {
        case 'onewayhlink':
        case 'twowayhlink':
            link.target({
                x: sourceAxis.x + 100,
                y: sourceAxis.y
            })
            break
        case 'onewayvlink': 
        case 'twowayvlink':
            link.target({
                x: sourceAxis.x,
                y: sourceAxis.y + 100
            })
            break
        }
        link.addTo(graph)
        closeAddCellCtxMenu()
    }

    function closeAddCellCtxMenu (): void {
        setAddCellPos({
            x: -1,
            y: -1
        })
        setAddCellCtxMenuPos({
            x: -1,
            y: -1
        })
    }

    function closeCtrlCellCtxMenu (): void {
        setCtrlCellCtxMenuPos({
            x: -1,
            y: -1
        })
    }

    function deleteCell (): void {
        if (selectedLink && !selectedLink.source().id && !selectedLink.target().id) {
            selectedLink.remove()
            setSelectedLink(undefined)
            closeCtrlCellCtxMenu()
            return
        } 
        
        if (selectedElement && graph.getConnectedLinks(selectedElement).length === 0) {
            selectedElement.remove()
            setSelectedElement(undefined)
            closeCtrlCellCtxMenu()
            return
        }

        setSnackbar({
            open: true,
            severity: 'error',
            text: '請先解除線段與物體的連線'
        })
        closeCtrlCellCtxMenu()
    }

    function loadGraph (): void {
        Graph.get().then(response => {
            graph.fromJSON(response)
            console.log(response)
        })
    }

    function uploadGraph (): void {
        Graph.update(graph.toJSON())
        .then(response => {
            setSnackbar({
                open: true,
                severity: 'success',
                text: '儲存成功'
            })
        })
    }

    function closeSnackbar (): void {
        setSnackbar({
            open: false,
            severity: snackbar.severity,
            text: snackbar.text
        })
    }

    // watch && mounted
    useEffect(initCanvas, [graph])
    useEffect(registerPaperEventHandler, [paper])
    useEffect(loadGraph, [paper])

    // css style
    const styles = makeStyles(theme => ({
        paperParent: {
            overflow: 'scroll',
            [theme.breakpoints.down('sm')]: {
                height: 'calc(100vh - 56px)'
            },
            [theme.breakpoints.up('sm')]: {
                height: 'calc(100vh - 64px)'
            }
        }
    }))
    const classes = styles()

    // template
    return (
        <Fragment>
            <AppBar position="sticky">
                <Toolbar>
                    <Tooltip title="儲存">
                        <IconButton onClick={uploadGraph}>
                            <CloudUploadIcon></CloudUploadIcon>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Box className={classes.paperParent}>
                <Box id="paper" onContextMenu={(e) => e.preventDefault()}>
                    <Menu
                        keepMounted
                        open={addCellPos.x !== -1}
                        onClose={closeAddCellCtxMenu}
                        anchorReference="anchorPosition"
                        anchorPosition={{
                            top: addCellCtxMenuPos.y,
                            left: addCellCtxMenuPos.x
                        }}
                    >   
                        {shapes.ELEMENTS.map((name, index) =>
                            <MenuItem 
                                onClick={() => addElement(name)} 
                                key={index}
                            >
                                {name}
                            </MenuItem>
                        )}
                        {shapes.LINKS.map((name, index) =>
                            <MenuItem 
                                onClick={() => addLink(name)} 
                                key={index}
                            >
                                {name}
                            </MenuItem>
                        )}
                    </Menu>
                    <Menu
                        keepMounted
                        open={ctrlCellCtxMenuPos.x !== -1}
                        onClose={closeCtrlCellCtxMenu}
                        anchorReference="anchorPosition"
                        anchorPosition={{
                            top: ctrlCellCtxMenuPos.y,
                            left: ctrlCellCtxMenuPos.x
                        }}
                    >   
                        <MenuItem onClick={deleteCell}>刪除</MenuItem>
                    </Menu>
                </Box>
            </Box>
            <Snackbar 
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={closeSnackbar}
            >
                <MuiAlert
                    severity={snackbar.severity}
                    variant="filled"
                    children={ snackbar.text }
                />
            </Snackbar>
        </Fragment>
    )
}