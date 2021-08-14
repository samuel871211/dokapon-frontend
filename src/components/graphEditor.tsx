import * as shapes from './shapes'
import { useState, useEffect, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import ZoomOutIcon from '@material-ui/icons/ZoomOut'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import ImportExportIcon from '@material-ui/icons/ImportExport'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import SvgIcon from '@material-ui/core/SvgIcon'
// import Paper from '@material-ui/core/Paper'
// import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
// import MenuList from '@material-ui/core/MenuList'
import Tooltip from '@material-ui/core/Tooltip'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { Color } from '@material-ui/lab/Alert'
import $ from 'jquery'
// import _ from 'lodash'
// import * as Backbone from 'backbone'
import * as joint from 'jointjs'
import 'jointjs/dist/joint.css'
import { getCells, updateCells } from '../api/graph'

export default function GraphEditor () {
    // data
    const [paperComplete, setPaperComplete] = useState(false)
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
    const [paperScale, setPaperScale] = useState(1)
    const [graph] = useState(new joint.dia.Graph({}, { cellNamespace: { standard: joint.shapes.standard } }))
    const [paper, setPaper] = useState<joint.dia.Paper>()
    const [selectedLink, setSelectedLink] = useState<joint.dia.Link>()
    const [selectedElement, setSelectedElement] = useState<joint.dia.Element>()
    const [snackbar, setSnackbar] = useState<{ open: boolean, severity: Color, text: string }>({
        open: false,
        severity: 'success',
        text: ''
    })

    // methods
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

    function saveGraph (): void {
        updateCells(graph.toJSON())
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

    function zoomIn (): void {
        const newValue = paperScale + 0.2
        if (newValue > 9.8) return
        setPaperScale(newValue)
        paper?.scale(newValue)
    }

    function zoomOut (): void {
        const newValue = paperScale - 0.2
        if (newValue < 0.2) return
        setPaperScale(newValue)
        paper?.scale(newValue)
    }

    function ElementSvgIcon (props: { type: string }) {
        const { type } = props
        return (
            <IconButton onClick={() => addElement(type)}>
                <SvgIcon fontSize="large">
                    <image
                        width="24" height="24"
                        href={'data:image/svg+xml;utf8,' + encodeURIComponent(shapes.SVG[type])}
                    />
                </SvgIcon>
            </IconButton>
        )
    }

    function LinkSvgIcon (props: { type: string }) {
        const { type } = props
        let icon
        switch (type) {
        case 'oneWayHLink':
            icon = <ArrowForwardIcon fontSize="large"/>
            break
        case 'twoWayHLink':
            icon = <SwapHorizIcon fontSize="large"/>
            break
        case 'oneWayVLink':
            icon = <ArrowDownwardIcon fontSize="large"/>
            break
        case 'twoWayVLink':
            icon = <ImportExportIcon fontSize="large"/>
            break
        }
        return (
            <IconButton children={icon} onClick={() => addLink(type)}/>
        )
    }

    // watch && mounted
    useEffect(() => {
        if (paperComplete) return console.log('paper Completed!!!')

        function initPaper () {
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
            return Paper
        }
        function registerPaperEventHandler (Paper: joint.dia.Paper): void {
            Paper.on({
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
                    const sourceElement = linkView.model.getSourceElement()
                    const targetElement = linkView.model.getTargetElement()
                    if (!sourceElement || !targetElement) return
                    switch (name.toLowerCase()) {
                    case 'onewayhlink':
                        if (sourcePoint.x >= targetPoint.x) {
                            sourceElement.attributes.left = targetElement.id
                        } else if (sourcePoint.x < targetPoint.x) {
                            sourceElement.attributes.right = targetElement.id
                        }
                        break
                    case 'twowayhlink':
                        if (sourcePoint.x >= targetPoint.x) {
                            sourceElement.attributes.left = targetElement.id
                            targetElement.attributes.right = sourceElement.id
                        } else if (sourcePoint.x < targetPoint.x) {
                            sourceElement.attributes.right = targetElement.id
                            targetElement.attributes.left = sourceElement.id
                        }
                        break
                    case 'onewayvlink':
                        if (sourcePoint.y >= targetPoint.y) {
                            sourceElement.attributes.top = targetElement.id
                        } else if (sourcePoint.y < targetPoint.y) {
                            sourceElement.attributes.bottom = targetElement.id
                        }
                        break
                    case 'twowayvlink':
                        if (sourcePoint.y >= targetPoint.y) {
                            sourceElement.attributes.top = targetElement.id
                            targetElement.attributes.bottom = sourceElement.id
                        } else if (sourcePoint.y < targetPoint.y) {
                            sourceElement.attributes.bottom = targetElement.id
                            targetElement.attributes.top = sourceElement.id
                        }
                        break
                    default:
                        console.warn(`unknown link name ${name}`)
                        break
                    }
                    console.log(sourceElement.attributes)
                    console.log(targetElement.attributes)
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
                    const sourceElement = arrowhead === 'source' ? elementViewConnected.model : linkView.model.getSourceElement()
                    const targetElement = arrowhead === 'target' ? elementViewConnected.model : linkView.model.getTargetElement()
                    if (!sourceElement || !targetElement) return
                    switch (name.toLowerCase()) {
                    case 'onewayhlink':
                        if (sourcePoint.x >= targetPoint.x) {
                            delete sourceElement.attributes.left
                        } else if (sourcePoint.x < targetPoint.x) {
                            delete sourceElement.attributes.right
                        }
                        break
                    case 'twowayhlink':
                        if (sourcePoint.x >= targetPoint.x) {
                            delete sourceElement.attributes.left
                            delete targetElement.attributes.right
                        } else if (sourcePoint.x < targetPoint.x) {
                            delete sourceElement.attributes.right
                            delete targetElement.attributes.left
                        }
                        break
                    case 'onewayvlink':
                        if (sourcePoint.y >= targetPoint.y) {
                            delete sourceElement.attributes.top
                        } else if (sourcePoint.y < targetPoint.y) {
                            delete sourceElement.attributes.bottom
                        }
                        break
                    case 'twowayvlink':
                        if (sourcePoint.y >= targetPoint.y) {
                            delete sourceElement.attributes.top
                            delete targetElement.attributes.bottom
                        } else if (sourcePoint.y < targetPoint.y) {
                            delete targetElement.attributes.top
                            delete sourceElement.attributes.bottom
                        }
                        break
                    default:
                        console.warn(`unknown link name ${name}`)
                        break
                    }
                    console.log(sourceElement?.attributes)
                    console.log(targetElement?.attributes)
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
        async function loadCells () {
            const cells = await getCells()
            graph.fromJSON(cells)
        }

        // initial data
        const Paper = initPaper()
        registerPaperEventHandler(Paper)
        setPaper(Paper)
        setPaperComplete(true)
        loadCells()
    }, [graph, paperComplete])



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
        },
        gridItem: {
            textAlign: 'center'
        }
    }))
    const classes = styles()

    // template
    return (
        <Fragment>
            <AppBar position="sticky">
                <Toolbar>
                    <Tooltip title="儲存">
                        <IconButton onClick={saveGraph}>
                            <CloudUploadIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="縮小">
                        <IconButton onClick={zoomOut}>
                            <ZoomOutIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="放大">
                        <IconButton onClick={zoomIn}>
                            <ZoomInIcon/>
                        </IconButton>
                    </Tooltip>
                    <Box color="white" display="flex">
                        {(paperScale * 100).toFixed(0) + '%'}
                    </Box>
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
                        <Box style={{ width: '200px' }}>
                            <Grid container>
                                {shapes.ELEMENTS.map((type, index) =>
                                    <Grid
                                        item xs={4}
                                        key={index}
                                        className={classes.gridItem}
                                    >
                                        <ElementSvgIcon type={type}/>
                                    </Grid>
                                )}
                                {shapes.LINKS.map((type, index) =>
                                    <Grid
                                        item xs={4}
                                        key={index}
                                        className={classes.gridItem}
                                    >
                                        <LinkSvgIcon type={type}/>
                                    </Grid>
                                )}
                            </Grid>
                        </Box>
                    </Menu>
                    <Menu
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