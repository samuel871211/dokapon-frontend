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
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import SvgIcon from '@material-ui/core/SvgIcon'
// import Paper from '@material-ui/core/Paper'
// import Avatar from '@material-ui/core/Avatar'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
// import { spacing } from '@material-ui/system'
// import Switch from '@material-ui/core/Switch'
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
    // const [addCellPos, setAddCellPos] = useState({
    //     x: -1,
    //     y: -1
    // })
    const [addElementCtxMenuPos, setAddElementCtxMenuPos] = useState({
        x: -1,
        y: -1
    })
    const [addLinkCtxMenuPos, setAddLinkCtxMenuPos] = useState({
        x: -1,
        y: -1
    })
    const [groupArea, setGroupArea] = useState<joint.dia.Element | null>()
    const [groupViews, setGroupViews] = useState<Array<joint.dia.CellView>>([])
    const [paperScale, setPaperScale] = useState(1)
    const [graph] = useState(new joint.dia.Graph({}, { cellNamespace: { standard: joint.shapes.standard } }))
    const [paper, setPaper] = useState<joint.dia.Paper>()
    const [selectedLink, setSelectedLink] = useState<joint.dia.Link>()
    const [selectedElement, setSelectedElement] = useState<joint.dia.Element>()
    const [twoWayLinkEnabled, toggleTwoWayLinkEnabled] = useState(true) 
    const [snackbar, setSnackbar] = useState<{ open: boolean, severity: Color, text: string }>({
        open: false,
        severity: 'success',
        text: ''
    })

    // methods
    function addElement (name: string): void {
        if (selectedLink) {
            console.log(selectedLink)
            return
        }
        // // 單獨新增element，暫時不支援
        // const element = shapes.createElement(name)
        // element.position(addCellPos.x, addCellPos.y)
        // element.addTo(graph)
        // closeAddElementCtxMenu()
    }

    function addLink (name: string, direction: string): void {
        if (!selectedElement) return

        const link = shapes.createLink(name)
        const centerPoint = {
            x: selectedElement.position().x + selectedElement.size().width / 2,
            y: selectedElement.position().y + selectedElement.size().height / 2
        }
        switch (direction) {
        case 'top':
            link.source({
                x: centerPoint.x,
                y: centerPoint.y - 100 - selectedElement.size().height / 2
            })
            link.target({ id: selectedElement.id })
            break
        case 'bottom':
            link.source({ id: selectedElement.id })
            link.target({
                x: centerPoint.x,
                y: centerPoint.y + 100 + selectedElement.size().height / 2
            })
            break
        case 'left':
            link.source({
                x: centerPoint.x - 100 - selectedElement.size().width / 2,
                y: centerPoint.y
            })
            link.target({ id: selectedElement.id })
            break
        case 'right':
            link.source({ id: selectedElement.id })
            link.target({
                x: centerPoint.x + 100 + selectedElement.size().width / 2,
                y: centerPoint.y
            })
            break
        }
        link.addTo(graph)
        closeAddLinkCtxMenu()

        // // 單獨新增link，暫時不支援
        // const link = shapes.createLink(name)
        // const sourceAxis = {
        //     x: addCellPos.x,
        //     y: addCellPos.y
        // }
        // link.source(sourceAxis)

        // // 依據水平、垂直，來決定線段要怎麼長
        // switch (name.toLowerCase()) {
        // case 'onewayhlink':
        // case 'twowayhlink':
        //     link.target({
        //         x: sourceAxis.x + 100,
        //         y: sourceAxis.y
        //     })
        //     break
        // case 'onewayvlink': 
        // case 'twowayvlink':
        //     link.target({
        //         x: sourceAxis.x,
        //         y: sourceAxis.y + 100
        //     })
        //     break
        // }
        // link.addTo(graph)
        // closeAddLinkCtxMenu()
    }

    function closeAddElementCtxMenu (): void {
        // setAddCellPos({
        //     x: -1,
        //     y: -1
        // })
        setAddElementCtxMenuPos({
            x: -1,
            y: -1
        })
    }

    function closeAddLinkCtxMenu (): void {
        // setAddCellPos({
        //     x: -1,
        //     y: -1
        // })
        setAddLinkCtxMenuPos({
            x: -1,
            y: -1
        })
    }

    function deleteCell (): void {
        if (selectedLink && !selectedLink.source().id && !selectedLink.target().id) {
            closeAddElementCtxMenu()
            selectedLink.remove()
            setSelectedLink(undefined)
            return
        }
        
        if (selectedElement && graph.getConnectedLinks(selectedElement).length === 0) {
            closeAddLinkCtxMenu()
            selectedElement.remove()
            setSelectedElement(undefined)
            return
        }

        setSnackbar({
            open: true,
            severity: 'error',
            text: '請先解除線段與物體的連線'
        })
        closeAddElementCtxMenu()
        closeAddLinkCtxMenu()
    }

    function clearSelection (): void {
        if (!groupArea) return
        groupArea.remove()
        setGroupArea(null)
        
        if (groupViews.length === 0) return
        for (const cellView of groupViews) {
            cellView.unhighlight()
            delete cellView.model.attributes.groupOffset
        }
        setGroupViews([])
    }

    function saveGraph (): void {
        clearSelection()
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

    function ElementSvgIcon (props: { type: string, disabled: boolean }) {
        const { type, disabled } = props
        return (
            <IconButton disabled={disabled} onClick={() => addElement(type)}>
                <SvgIcon fontSize="large">
                    <image
                        opacity={disabled ? 0.5 : 1}
                        width="24" height="24"
                        href={'data:image/svg+xml;utf8,' + encodeURIComponent(shapes.SVG[type])}
                    />
                </SvgIcon>
            </IconButton>
        )
    }

    function LinkSvgIcon (props: {
        type: string,
        direction: 'right' | 'left' | 'top' | 'bottom',
        disabled: boolean
    }) {
        const { type, direction, disabled } = props
        let icon
        switch (type) {
        case 'oneWayHLink':
            if (direction === 'right') icon = <ArrowForwardIcon fontSize="large"/>
            if (direction === 'left') icon = <ArrowBackIcon fontSize="large"/>
            break
        case 'twoWayHLink':
            icon = <SwapHorizIcon fontSize="large"/>
            break
        case 'oneWayVLink':
            if (direction === 'top') icon = <ArrowUpwardIcon fontSize="large"/>
            if (direction === 'bottom') icon = <ArrowDownwardIcon fontSize="large"/>
            break
        case 'twoWayVLink':
            icon = <ImportExportIcon fontSize="large"/>
            break
        }
        return (
            <IconButton
                children={icon}
                disabled={disabled}
                onClick={() => addLink(type, direction)}
            />
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
                width: 20000,
                height: 20000,
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
            let selectedArea: joint.dia.Element
            let selectedViews: Array<joint.dia.CellView> = []
            Paper.on({
                'element:pointermove': function (elementView, evt, x, y) {
                    if (selectedViews.length < 1) return

                    // 群組移動
                    const AreaBBox = selectedArea.getBBox()
                    for (const view of selectedViews) {
                        const groupOffset = view.model.attributes.groupOffset
                        if (!groupOffset) continue

                        if (view instanceof joint.dia.ElementView) {
                            view.model.position(
                                AreaBBox.x + groupOffset.x,
                                AreaBBox.y + groupOffset.y
                            )
                        } else if (view instanceof joint.dia.LinkView) {
                            for (const offset of groupOffset) {
                                switch (offset.origin) {
                                case 'source':
                                    if (view.model.source().id) break
                                    view.model.source({
                                        x: AreaBBox.x + offset.x,
                                        y: AreaBBox.y + offset.y
                                    })
                                    break
                                case 'vertex':
                                    view.model.vertex(offset.idx, {
                                        x: AreaBBox.x + offset.x,
                                        y: AreaBBox.y + offset.y
                                    })
                                    break
                                case 'target':
                                    if (view.model.target().id) break
                                    view.model.target({
                                        x: AreaBBox.x + offset.x,
                                        y: AreaBBox.y + offset.y
                                    })
                                    break
                                default:
                                    break
                                }
                            }
                        }
                    }
                },
                'element:mouseenter': function (elementView, evt, x, y) {
                    elementView.highlight()
                    console.table({
                        top: elementView.model.attributes.top,
                        left: elementView.model.attributes.left,
                        right: elementView.model.attributes.right,
                        bottom: elementView.model.attributes.bottom
                    })
                },
                'element:mouseout': function (elementView, evt, x, y) {
                    elementView.unhighlight()
                },
                'element:contextmenu': function (elementView, evt, x, y) {
                    if (elementView.model === selectedArea) return
                    setSelectedElement(elementView.model)
                    setAddLinkCtxMenuPos({ x: evt.clientX, y: evt.clientY })
                },
                'link:contextmenu': function (linkView, evt, x, y) {
                    setSelectedLink(linkView.model)
                    setAddElementCtxMenuPos({ x: evt.clientX, y: evt.clientY })
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
                    switch (arrowhead) {
                    case 'source':
                        linkView.model.source(linkView.model.getSourcePoint())
                        break
                    case 'target':
                        linkView.model.target(linkView.model.getTargetPoint())
                        break
                    }

                    // 手動link:connect，暫時不支援
                    // const name: string = linkView.model.attributes.name
                    // const sourcePoint = linkView.model.getSourcePoint()
                    // const targetPoint = linkView.model.getTargetPoint()
                    // const sourceElement = linkView.model.getSourceElement()
                    // const targetElement = linkView.model.getTargetElement()
                    // if (!sourceElement || !targetElement) return
                    // switch (name.toLowerCase()) {
                    // case 'onewayhlink':
                    //     if (sourcePoint.x >= targetPoint.x) {
                    //         sourceElement.attributes.left = targetElement.id
                    //     } else if (sourcePoint.x < targetPoint.x) {
                    //         sourceElement.attributes.right = targetElement.id
                    //     }
                    //     break
                    // case 'twowayhlink':
                    //     if (sourcePoint.x >= targetPoint.x) {
                    //         sourceElement.attributes.left = targetElement.id
                    //         targetElement.attributes.right = sourceElement.id
                    //     } else if (sourcePoint.x < targetPoint.x) {
                    //         sourceElement.attributes.right = targetElement.id
                    //         targetElement.attributes.left = sourceElement.id
                    //     }
                    //     break
                    // case 'onewayvlink':
                    //     if (sourcePoint.y >= targetPoint.y) {
                    //         sourceElement.attributes.top = targetElement.id
                    //     } else if (sourcePoint.y < targetPoint.y) {
                    //         sourceElement.attributes.bottom = targetElement.id
                    //     }
                    //     break
                    // case 'twowayvlink':
                    //     if (sourcePoint.y >= targetPoint.y) {
                    //         sourceElement.attributes.top = targetElement.id
                    //         targetElement.attributes.bottom = sourceElement.id
                    //     } else if (sourcePoint.y < targetPoint.y) {
                    //         sourceElement.attributes.bottom = targetElement.id
                    //         targetElement.attributes.top = sourceElement.id
                    //     }
                    //     break
                    // default:
                    //     console.warn(`unknown link name ${name}`)
                    //     break
                    // }
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
                },
                // 'blank:contextmenu': function (evt, x, y) {
                //     setAddCellPos({ x, y })
                //     setAddElementCtxMenuPos({ x: evt.clientX, y: evt.clientY })
                // },
                'blank:pointerdown': function (evt, x, y) {
                    // 清除上次的選取
                    if (selectedArea) selectedArea.remove()
                    for (const cellView of selectedViews) {
                        cellView.unhighlight()
                        delete cellView.model.attributes.groupOffset
                    }
                    selectedViews = []
                    setGroupViews([])

                    // 添加新的selectedArea
                    const area = new joint.shapes.standard.Rectangle()
                    area.position(x, y)
                    area.attr('body/fill', 'rgba(254, 182, 99, 0.2)')
                    area.attr('body/stroke', 'rgba(254, 182, 99, 1)')
                    area.attr('body/strokeWidth', 3)
                    area.prop('originX', x)
                    area.prop('originY', y)
                    area.addTo(graph)
                    selectedArea = area
                    setGroupArea(selectedArea)

                },
                'blank:pointermove': function (evt, x, y) {
                    const originX = selectedArea.prop('originX')
                    const originY = selectedArea.prop('originY')
                    const deltaX = Math.abs(x - originX)
                    const deltaY = Math.abs(y - originY)
                    selectedArea.resize(deltaX, deltaY)
                    if (x >= originX && y < originY) {
                        selectedArea.position(originX, y)
                    } else if (x < originX && y >= originY) {
                        selectedArea.position(x, originY)
                    } else if (x < originX && y < originY) {
                        selectedArea.position(x, y)
                    }
                },
                'blank:pointerup': function (evt, x, y) {
                    // 獲取selectedArea內的cells
                    const cells: Array<joint.dia.Cell> = []
                    let AreaBBox = selectedArea.getBBox()
                    for (const cell of graph.getCells()) {
                        const BBox = cell.getBBox()
                        const left = BBox.x >= AreaBBox.x
                        const top = BBox.y >= AreaBBox.y
                        const right = BBox.x + BBox.width <= AreaBBox.x + AreaBBox.width
                        const bottom = BBox.y + BBox.height <= AreaBBox.y + AreaBBox.height
                        if (left && top && right && bottom) cells.push(cell)
                    }
                    
                    // 把selectedArea移除
                    cells.pop()
                    
                    // highLight、push
                    for (const cell of cells) {
                        const view = Paper.findViewByModel(cell)
                        if (!view) continue
                        view.highlight()
                        selectedViews.push(view)
                    }
                    setGroupViews(selectedViews)

                    // 修正選取區域
                    let left = Number.MAX_SAFE_INTEGER
                    let top = Number.MAX_SAFE_INTEGER
                    let right = 0
                    let bottom = 0
                    for (const view of selectedViews) {
                        const BBox = view.model.getBBox()
                        left = Math.min(left, BBox.x)
                        top = Math.min(top, BBox.y)
                        right = Math.max(right, BBox.x + BBox.width)
                        bottom = Math.max(bottom, BBox.y + BBox.height)
                    }
                    
                    // 修正水平垂直的link無法選取
                    if (bottom === top) {
                        top -= 8
                        bottom += 8
                    } else if (left === right) {
                        left -= 8
                        right += 8
                    }

                    // resize
                    selectedArea.position(left, top)
                    if (right > left && bottom - top) {
                        selectedArea.resize(right - left, bottom - top)
                    }

                    // 計算群體偏移
                    AreaBBox = selectedArea.getBBox()
                    for (const view of selectedViews) {
                        if (view instanceof joint.dia.ElementView) {
                            const BBox = view.model.position()
                            view.model.attributes.groupOffset = {
                                x: BBox.x - AreaBBox.x,
                                y: BBox.y - AreaBBox.y
                            }
                        } else if (view instanceof joint.dia.LinkView) {
                            view.model.attributes.groupOffset = []
                            // 順序：source、vertices、target
                            view.model.attributes.groupOffset.push({
                                x: view.model.getSourcePoint().x - AreaBBox.x,
                                y: view.model.getSourcePoint().y - AreaBBox.y,
                                origin: 'source'
                            })
                            view.model.vertices().forEach((vertex, idx) => {
                                view.model.attributes.groupOffset.push({
                                    x: vertex.x - AreaBBox.x,
                                    y: vertex.y - AreaBBox.y,
                                    origin: 'vertex',
                                    idx: idx
                                })
                            })
                            view.model.attributes.groupOffset.push({
                                x: view.model.getTargetPoint().x - AreaBBox.x,
                                y: view.model.getTargetPoint().y - AreaBBox.y,
                                origin: 'target'
                            })
                        }
                    }
                    selectedArea.prop('originX', selectedArea.position().x)
                    selectedArea.prop('originY', selectedArea.position().y)

                    // 沒有cell被選取
                    if (selectedViews.length === 0) {
                        selectedArea.remove()
                        setGroupArea(null)
                    }

                }
            })
        }
        async function loadCells () {
            const cells = await getCells()
            graph.fromJSON(cells)
        }

        // initial data
        const Paper = initPaper()
        setPaper(Paper)
        setPaperComplete(true)
        loadCells()
        registerPaperEventHandler(Paper)
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
                        open={addElementCtxMenuPos.x !== -1}
                        onClose={closeAddElementCtxMenu}
                        anchorReference="anchorPosition"
                        anchorPosition={{
                            top: addElementCtxMenuPos.y,
                            left: addElementCtxMenuPos.x
                        }}

                    >   
                        <MenuItem disabled>新增元件</MenuItem>
                        <Box style={{ width: '200px' }}>
                            <Grid container>
                                {shapes.ELEMENTS.map((type, index) =>
                                    <Grid
                                        item xs={4}
                                        key={index}
                                        className={classes.gridItem}
                                    >
                                        <ElementSvgIcon
                                            type={type}
                                            disabled={
                                                selectedLink?.source().id !== undefined &&
                                                selectedLink?.target().id !== undefined
                                            }
                                        />
                                    </Grid>
                                )}
                                {/* {shapes.LINKS.map((type, index) =>
                                    <Grid
                                        item xs={4}
                                        key={index}
                                        className={classes.gridItem}
                                    >
                                        <LinkSvgIcon type={type}/>
                                    </Grid>
                                )} */}
                            </Grid>
                            <MenuItem onClick={deleteCell}>刪除</MenuItem>
                        </Box>
                    </Menu>
                    <Menu
                        open={addLinkCtxMenuPos.x !== -1}
                        onClose={closeAddLinkCtxMenu}
                        anchorReference="anchorPosition"
                        anchorPosition={{
                            top: addLinkCtxMenuPos.y,
                            left: addLinkCtxMenuPos.x
                        }}
                    >
                        <MenuItem disabled>新增線段</MenuItem>
                        <MenuItem>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={twoWayLinkEnabled}
                                        onChange={(evt) => toggleTwoWayLinkEnabled(evt.target.checked)}
                                    />
                                }
                                label='twoWayLink'
                                labelPlacement="end"
                            />
                        </MenuItem>
                        <Box style={{ width: '200px' }}>
                            <Grid container>
                                <Grid item xs={4}></Grid>
                                <Grid 
                                    item
                                    xs={4}
                                    className={classes.gridItem}
                                >   
                                    <LinkSvgIcon
                                        direction='top'
                                        disabled={selectedElement?.attributes.top !== undefined}
                                        type={twoWayLinkEnabled ? 'twoWayVLink' : 'oneWayVLink'}
                                    />
                                </Grid>
                                <Grid item xs={4}></Grid>
                                <Grid 
                                    item
                                    xs={4}
                                    className={classes.gridItem}
                                >
                                    <LinkSvgIcon
                                        direction='left'
                                        disabled={selectedElement?.attributes.left !== undefined}
                                        type={twoWayLinkEnabled ? 'twoWayHLink' : 'oneWayHLink'}
                                    />
                                </Grid>
                                <Grid 
                                    item
                                    xs={4}
                                    className={classes.gridItem}
                                >
                                    <ElementSvgIcon
                                        disabled={true}
                                        type={selectedElement?.attributes.name}
                                    />
                                </Grid>
                                <Grid 
                                    item
                                    xs={4}
                                    className={classes.gridItem}
                                >
                                    <LinkSvgIcon
                                        direction='right'
                                        disabled={selectedElement?.attributes.right !== undefined}
                                        type={twoWayLinkEnabled ? 'twoWayHLink' : 'oneWayHLink'}
                                    />
                                </Grid>
                                <Grid item xs={4}></Grid>
                                <Grid 
                                    item
                                    xs={4}
                                    className={classes.gridItem}
                                >
                                    <LinkSvgIcon
                                        direction='bottom'
                                        disabled={selectedElement?.attributes.bottom !== undefined}
                                        type={twoWayLinkEnabled ? 'twoWayVLink' : 'oneWayVLink'}
                                    />
                                </Grid>
                                <Grid item xs={4}></Grid>
                            </Grid>
                        </Box>
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