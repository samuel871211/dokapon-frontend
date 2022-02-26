import * as SHAPES from '../global/shapes'
import { useState, useEffect, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import InfoIcon from '@material-ui/icons/Info'
import ImportExportIcon from '@material-ui/icons/ImportExport'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import SvgIcon from '@material-ui/core/SvgIcon'
import PanToolIcon from '@material-ui/icons/PanTool'
import EditIcon from '@material-ui/icons/Edit'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import Tooltip from '@material-ui/core/Tooltip'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { Color } from '@material-ui/lab/Alert'
// import $ from 'jquery'
import * as joint from 'jointjs'
import 'jointjs/dist/joint.css'
import { getCells, updateCells } from '../api/graph'

type groupOffset = Array<{
    origin?: 'source' | 'vertex' | 'target',
    idx?: number,
    x: number,
    y: number
}>
type snackbarState = {
    open: boolean
    severity: Color,
    text: string
}

export default function GraphEditor (): JSX.Element {
    // data
    const [infoDialog, toggleInfoDialog] = useState(false)
    const [IsDragMode, toggleDragMode] = useState(false)
    const [addElementCtxMenuPos, setAddElementCtxMenuPos] = useState({ x: -1, y: -1 })
    const [addLinkCtxMenuPos, setAddLinkCtxMenuPos] = useState({ x: -1, y: -1 })
    const [groupArea, setGroupArea] = useState<joint.dia.Element | null>()
    const [groupViews, setGroupViews] = useState<Array<joint.dia.CellView>>([])
    const [paperScale, setPaperScale] = useState(1)
    const [graph] = useState(new joint.dia.Graph({}, { cellNamespace: { standard: joint.shapes.standard } }))
    const [selectedLink, setSelectedLink] = useState<joint.dia.Link>()
    const [selectedElement, setSelectedElement] = useState<joint.dia.Element>()
    const [twoWayLinkEnabled, toggleTwoWayLinkEnabled] = useState(true) 
    const [snackbar, setSnackbar] = useState<snackbarState>({
        open: false,
        severity: 'success',
        text: ''
    })

    // methods
    function addElement (name: string): void {
        if (!selectedLink) return

        const newElement = SHAPES.createElement(name)
        newElement.addTo(graph)
        let connectedElement: joint.dia.Element | null = null
        let endPoint: joint.g.Point = new joint.g.Point()
        if (selectedLink.source().id) {
            connectedElement = selectedLink.getSourceElement()
            endPoint = selectedLink.getTargetPoint()
            selectedLink.target({ id: newElement.id })
        } else if (selectedLink.target().id) {
            connectedElement = selectedLink.getTargetElement()
            endPoint = selectedLink.getSourcePoint()
            selectedLink.source({ id: newElement.id })
        }
        newElement.position(
            endPoint.x - newElement.size().width / 2,
            endPoint.y - newElement.size().height / 2
        )
        // const sourceElement = selectedLink.getSourceElement()
        // const targetElement = selectedLink.getTargetElement()
        // const connectedElement = sourceElement || targetElement
        const linkName = selectedLink.prop('name') as string
        switch (linkName.toLowerCase()) {
        case 'onewayhlink':
            if (connectedElement?.prop('left') === selectedLink.id) {
                connectedElement.prop('left', newElement.id)
            } else if (connectedElement?.prop('right') === selectedLink.id) {
                connectedElement.prop('right', newElement.id)
            }
            break
        case 'twowayhlink':
            if (connectedElement?.prop('left') === selectedLink.id) {
                connectedElement.prop('left', newElement.id)
                newElement.prop('right', connectedElement.id)
            } else if (connectedElement?.prop('right') === selectedLink.id) {
                connectedElement.prop('right', newElement.id)
                newElement.prop('left', connectedElement.id)
            }
            break
        case 'onewayvlink':
            if (connectedElement?.prop('top') === selectedLink.id) {
                connectedElement.prop('top', newElement.id)
            } else if (connectedElement?.prop('bottom') === selectedLink.id) {
                connectedElement.prop('bottom', newElement.id)
            }
            break
        case 'twowayvlink':
            if (connectedElement?.prop('top') === selectedLink.id) {
                connectedElement.prop('top', newElement.id)
                newElement.prop('bottom', connectedElement.id)
            } else if (connectedElement?.prop('bottom') === selectedLink.id) {
                connectedElement.prop('bottom', newElement.id)
                newElement.prop('top', connectedElement.id) 
            }
            break
        }
        closeAddElementCtxMenu()
        
        // // 單獨新增element，暫時不支援
        // const element = SHAPES.createElement(name)
        // element.position(addCellPos.x, addCellPos.y)
        // element.addTo(graph)
        // closeAddElementCtxMenu()
    }

    function addLink (name: string, direction: string): void {
        if (!selectedElement) return

        const link = SHAPES.createLink(name)
        const centerPoint = {
            x: selectedElement.position().x + selectedElement.size().width / 2,
            y: selectedElement.position().y + selectedElement.size().height / 2
        }
        switch (direction) {
        case 'top':
            link.source({ id: selectedElement.id })
            link.target({
                x: centerPoint.x,
                y: centerPoint.y - 100 - selectedElement.size().height / 2
            })
            selectedElement.prop('top', link.id)
            break
        case 'bottom':
            link.source({ id: selectedElement.id })
            link.target({
                x: centerPoint.x,
                y: centerPoint.y + 100 + selectedElement.size().height / 2
            })
            selectedElement.prop('bottom', link.id)
            break
        case 'left':
            link.source({ id: selectedElement.id })
            link.target({
                x: centerPoint.x - 100 - selectedElement.size().width / 2,
                y: centerPoint.y
            })
            selectedElement.prop('left', link.id)
            break
        case 'right':
            link.source({ id: selectedElement.id })
            link.target({
                x: centerPoint.x + 100 + selectedElement.size().width / 2,
                y: centerPoint.y
            })
            selectedElement.prop('right', link.id)
            break
        }
        link.addTo(graph)
        closeAddLinkCtxMenu()

        // // 單獨新增link，暫時不支援
        // const link = SHAPES.createLink(name)
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
        if (selectedLink) {
            const sourceId = selectedLink.source().id
            const targetId = selectedLink.target().id
            const bothConnected = sourceId && targetId
            if (!bothConnected) {
                const elementId = sourceId || targetId
                if (elementId) {
                    const element = graph.getCell(elementId)
                    const linkName = selectedLink.prop('name') as string
                    switch (linkName.toLowerCase()) {
                    case 'onewayvlink':
                    case 'twowayvlink':
                        if (element.prop('top') === selectedLink.id) delete element.attributes.top
                        if (element.prop('bottom') === selectedLink.id) delete element.attributes.bottom
                        break
                    case 'onewayhlink':
                    case 'twowayhlink':
                        if (element.prop('right') === selectedLink.id) delete element.attributes.right
                        if (element.prop('left') === selectedLink.id) delete element.attributes.left
                        break
                    }
                }
                closeAddElementCtxMenu()
                selectedLink.remove()
                setSelectedLink(undefined)
                return
            }
        }
        
        if (selectedElement) {
            const connectedLinks = graph.getConnectedLinks(selectedElement)
            if (connectedLinks.length === 0) {
                closeAddLinkCtxMenu()
                selectedElement.remove()
                setSelectedElement(undefined)
                return
            }
            if (connectedLinks.length === 1) {
                let direction = ''
                if (selectedElement.prop('top')) direction = 'top'
                if (selectedElement.prop('left')) direction = 'left'
                if (selectedElement.prop('right')) direction = 'right'
                if (selectedElement.prop('bottom')) direction = 'bottom'
                
                const neighborElement = graph.getNeighbors(selectedElement)[0]
                const linkName = connectedLinks[0].prop('name') as string
                switch (linkName.toLowerCase()) {
                case 'onewayhlink':
                case 'twowayhlink':
                    delete selectedElement.attributes[direction]
                    delete neighborElement.attributes[direction === 'right' ? 'left' : 'right']
                    break
                case 'onewayvlink':
                case 'twowayvlink':
                    delete selectedElement.attributes[direction]
                    delete neighborElement.attributes[direction === 'top' ? 'bottom' : 'top']
                    break
                }
                closeAddLinkCtxMenu()
                selectedElement.remove()
                setSelectedElement(undefined)
            }
        }

        setSnackbar({
            open: true,
            severity: 'error',
            // text: '請先解除線段與物體的連線'
            text: '無法刪除'
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
        .catch(error => {
            setSnackbar({
                open: true,
                severity: 'error',
                text: '儲存失敗'
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

    function ElementSvgIcon (props: { type: string, disabled: boolean }) {
        const { type, disabled } = props
        return (
            <IconButton disabled={disabled} onClick={() => addElement(type)}>
                <SvgIcon fontSize="large">
                    <image
                        opacity={disabled ? 0.5 : 1}
                        width="24" height="24"
                        href={'data:image/svg+xml;utf8,' + encodeURIComponent(SHAPES.SVG[type])}
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

    // watch && mounted && unmount
    useEffect(() => {
        function initPaper () {
            // paper should be initialized after #canvas is being mounted
            const Paper = new joint.dia.Paper({
                el: document.getElementById('paper') || undefined,
                cellViewNamespace: { standard: joint.shapes.standard },
                width: '100%',
                height: 'calc(100vh - 48px)',
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
            let dragMouseDownPos = { x: 0, y: 0 }
            let dragAnchorPos = { x: 0, y: 0 }
            let dragMode = false
            Paper.on({
                'element:pointermove': function (
                    elementView: joint.dia.ElementView,
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    if (selectedViews.length < 1) return

                    // 群組移動
                    const AreaBBox = selectedArea.getBBox()
                    for (const view of selectedViews) {
                        const groupOffset = view.model.prop('groupOffset') as undefined | groupOffset
                        if (!groupOffset) continue

                        if (view instanceof joint.dia.ElementView) {
                            view.model.position(
                                AreaBBox.x + groupOffset[0].x,
                                AreaBBox.y + groupOffset[0].y
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
                                    if (!offset.idx) break
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
                'element:mouseenter': function (
                    elementView: joint.dia.ElementView,
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    if (dragMode) return

                    elementView.highlight()
                    console.table({
                        top: elementView.model.prop('top') as string,
                        left: elementView.model.prop('left') as string,
                        right: elementView.model.prop('right') as string,
                        bottom: elementView.model.prop('bottom') as string
                    })
                },
                'element:mouseout': function (
                    elementView: joint.dia.ElementView,
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    elementView.unhighlight()
                },
                'element:contextmenu': function (
                    elementView: joint.dia.ElementView,
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    if (dragMode) return
                    if (elementView.model === selectedArea) return
                    setSelectedElement(elementView.model)
                    setAddLinkCtxMenuPos({
                        x: evt.clientX || 0,
                        y: evt.clientY || 0
                    })
                },
                'link:contextmenu': function (
                    linkView: joint.dia.LinkView,
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    if (dragMode) return
                    setSelectedLink(linkView.model)
                    setAddElementCtxMenuPos({
                        x: evt.clientX || 0,
                        y: evt.clientY || 0
                    })
                },
                'link:mouseenter': function (
                    linkView: joint.dia.LinkView,
                    evt: JQuery.Event
                ) {
                    if (dragMode) return
                    const linkName = linkView.model.prop('name') as string
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
                            textContent: linkName[6] || '',
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
                'link:mouseleave': function (
                    linkView: joint.dia.LinkView,
                    evt: JQuery.Event
                ) {
                    linkView.removeTools()
                },
                'link:connect': function (
                    linkView: joint.dia.LinkView,
                    evt: JQuery.Event,
                    elementViewConnected: joint.dia.ElementView,
                    magnet: HTMLElement,
                    arrowhead: 'source' | 'target'
                ) {
                    // switch (arrowhead) {
                    // case 'source':
                    //     linkView.model.source(linkView.model.getSourcePoint())
                    //     break
                    // case 'target':
                    //     linkView.model.target(linkView.model.getTargetPoint())
                    //     break
                    // }

                    const name = linkView.model.prop('name') as string
                    const sourcePoint = linkView.model.getSourcePoint()
                    const targetPoint = linkView.model.getTargetPoint()
                    const sourceElement = linkView.model.getSourceElement()
                    const targetElement = linkView.model.getTargetElement()
                    if (!sourceElement || !targetElement) return
                    switch (name.toLowerCase()) {
                    case 'onewayhlink':
                        if (sourcePoint.x >= targetPoint.x) {
                            sourceElement.prop('left', targetElement.id)
                        } else if (sourcePoint.x < targetPoint.x) {
                            sourceElement.prop('right', targetElement.id)
                        }
                        break
                    case 'twowayhlink':
                        if (sourcePoint.x >= targetPoint.x) {
                            sourceElement.prop('left', targetElement.id)
                            targetElement.prop('right', sourceElement.id)
                        } else if (sourcePoint.x < targetPoint.x) {
                            sourceElement.prop('right', targetElement.id)
                            targetElement.prop('left', sourceElement.id) 
                        }
                        break
                    case 'onewayvlink':
                        if (sourcePoint.y >= targetPoint.y) {
                            sourceElement.prop('top', targetElement.id)
                        } else if (sourcePoint.y < targetPoint.y) {
                            sourceElement.prop('bottom', targetElement.id)
                        }
                        break
                    case 'twowayvlink':
                        if (sourcePoint.y >= targetPoint.y) {
                            sourceElement.prop('top', targetElement.id)
                            targetElement.prop('bottom', sourceElement.id)
                        } else if (sourcePoint.y < targetPoint.y) {
                            sourceElement.prop('bottom', targetElement.id)
                            targetElement.prop('top', sourceElement.id)
                        }
                        break
                    default:
                        console.warn(`unknown link name ${name}`)
                        break
                    }
                },
                // 'link:disconnect': function (
                //     linkView: joint.dia.LinkView,
                //     evt: JQuery.Event,
                //     elementViewConnected: joint.dia.ElementView,
                //     magnet: HTMLElement,
                //     arrowhead: 'source' | 'target'
                // ) {
                //     const name: string = linkView.model.attributes.name
                //     const sourcePoint = linkView.model.getSourcePoint()
                //     const targetPoint = linkView.model.getTargetPoint()
                //     const sourceElement = arrowhead === 'source' ? elementViewConnected.model : linkView.model.getSourceElement()
                //     const targetElement = arrowhead === 'target' ? elementViewConnected.model : linkView.model.getTargetElement()
                //     if (!sourceElement || !targetElement) return
                //     switch (name.toLowerCase()) {
                //     case 'onewayhlink':
                //         if (sourcePoint.x >= targetPoint.x) {
                //             delete sourceElement.prop('left')
                //         } else if (sourcePoint.x < targetPoint.x) {
                //             delete sourceElement.prop('right')
                //         }
                //         break
                //     case 'twowayhlink':
                //         if (sourcePoint.x >= targetPoint.x) {
                //             delete sourceElement.prop('left')
                //             delete targetElement.prop('right')
                //         } else if (sourcePoint.x < targetPoint.x) {
                //             delete sourceElement.prop('right')
                //             delete targetElement.prop('left')
                //         }
                //         break
                //     case 'onewayvlink':
                //         if (sourcePoint.y >= targetPoint.y) {
                //             delete sourceElement.prop('top')
                //         } else if (sourcePoint.y < targetPoint.y) {
                //             delete sourceElement.prop('bottom')
                //         }
                //         break
                //     case 'twowayvlink':
                //         if (sourcePoint.y >= targetPoint.y) {
                //             delete sourceElement.prop('top')
                //             delete targetElement.prop('bottom')
                //         } else if (sourcePoint.y < targetPoint.y) {
                //             delete targetElement.prop('top')
                //             delete sourceElement.prop('bottom')
                //         }
                //         break
                //     default:
                //         console.warn(`unknown link name ${name}`)
                //         break
                //     }
                // },
                'cell:mousewheel': function (
                    cellView: joint.dia.CellView,
                    evt: JQuery.Event,
                    x: number,
                    y: number,
                    delta: number
                ) {
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
                'blank:mousewheel': function (
                    evt: JQuery.Event,
                    x: number,
                    y: number,
                    delta: number
                ) {
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
                'blank:contextmenu': function (
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    dragMode = !dragMode
                    toggleDragMode(dragMode)
                    Paper.setInteractivity(!dragMode)
                    setSnackbar({
                        open: true,
                        severity: 'success',
                        text: `切換為${dragMode ? '拖曳' : '編輯'}模式`
                    })
                },
                'cell:pointerdown': function (
                    cellView: joint.dia.CellView,
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    if (dragMode) {
                        dragMouseDownPos = {
                            x: evt.screenX || 0,
                            y: evt.screenY || 0
                        }
                        dragAnchorPos = {
                            x: Paper.translate().tx,
                            y: Paper.translate().ty
                        }
                        return
                    }
                },
                'cell:pointermove': function (
                    cellView: joint.dia.CellView,
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    if (dragMode) {
                        const deltaX = (evt.screenX || 0) - dragMouseDownPos.x
                        const deltaY = (evt.screenY || 0) - dragMouseDownPos.y
                        Paper.translate(
                            dragAnchorPos.x + deltaX,
                            dragAnchorPos.y + deltaY
                        )
                        return
                    }
                },
                'blank:pointerdown': function (
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    if (dragMode) {
                        dragMouseDownPos = {
                            x: evt.screenX || 0,
                            y: evt.screenY || 0
                        }
                        dragAnchorPos = {
                            x: Paper.translate().tx,
                            y: Paper.translate().ty
                        }
                        return
                    }

                    if (!dragMode) {
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
                    }
                },
                'blank:pointermove': function (
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    if (dragMode) {
                        const deltaX = (evt.screenX || 0) - dragMouseDownPos.x
                        const deltaY = (evt.screenY || 0) - dragMouseDownPos.y
                        Paper.translate(
                            dragAnchorPos.x + deltaX,
                            dragAnchorPos.y + deltaY
                        )
                        return
                    }

                    if (!dragMode) {
                        const originX = selectedArea.prop('originX') as number
                        const originY = selectedArea.prop('originY') as number
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
                    }
                },
                'blank:pointerup': function (
                    evt: JQuery.Event,
                    x: number,
                    y: number
                ) {
                    if (dragMode) {
                        return
                    }

                    if (!dragMode) {
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
                                view.model.prop('groupOffset', [{
                                    x: BBox.x - AreaBBox.x,
                                    y: BBox.y - AreaBBox.y
                                }])
                            } else if (view instanceof joint.dia.LinkView) {
                                const groupOffset = []
                                // 順序：source、vertices、target
                                groupOffset.push({
                                    x: view.model.getSourcePoint().x - AreaBBox.x,
                                    y: view.model.getSourcePoint().y - AreaBBox.y,
                                    origin: 'source'
                                })
                                view.model.vertices().forEach((vertex, idx) => {
                                    groupOffset.push({
                                        x: vertex.x - AreaBBox.x,
                                        y: vertex.y - AreaBBox.y,
                                        origin: 'vertex',
                                        idx: idx
                                    })
                                })
                                groupOffset.push({
                                    x: view.model.getTargetPoint().x - AreaBBox.x,
                                    y: view.model.getTargetPoint().y - AreaBBox.y,
                                    origin: 'target'
                                })
                                view.model.prop('groupOffset', groupOffset)
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
                }
            })
        }
        async function loadCells () {
            const response = await getCells()
            switch (response.status) {
            case 200:
                setSnackbar({
                    open: true,
                    severity: 'success',
                    text: '圖面初始化成功'
                })
                graph.fromJSON(response.data)
                if (graph.getCells().length === 0) {
                    const firstCell = SHAPES.createElement('battleField')
                    firstCell.position(0, 0)
                    firstCell.addTo(graph)
                }
                break
            case 500:
            case 499:
            default:
                setSnackbar({
                    open: true,
                    severity: 'error',
                    text: '圖面初始化失敗'
                })
                break
            }
        }

        // initial data
        const Paper = initPaper()
        void loadCells()
        registerPaperEventHandler(Paper)

        return (() => {
            const el = document.getElementById('paper')
            if (el) el.replaceWith(el.cloneNode(true))
            // $('#paper').off()
        })
    }, [graph])


    // css style
    const styles = makeStyles(theme => ({
        AppBar: {
            backgroundColor: theme.palette.background.default
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
        },
        Paper: {
            transform: 'rotate3d(1, 0, 0, 60deg)'
        }
    }))
    const classes = styles()

    // template
    return (
        <Fragment>
            <AppBar className={classes.AppBar} position="sticky">
                <Toolbar variant="dense" disableGutters>
                    <Tooltip title="儲存">
                        <IconButton onClick={saveGraph}>
                            <CloudUploadIcon/>
                        </IconButton>
                    </Tooltip>
                    <Divider
                        orientation="vertical"
                        flexItem
                    />
                    <PanToolIcon
                        htmlColor={IsDragMode ? '#ffa000' : '#cccccc'}
                        className={classes.mx12}
                    />
                    <Divider
                        orientation="vertical"
                        flexItem
                    />
                    <EditIcon
                        htmlColor={IsDragMode ? '#cccccc' : '#ffa000'}
                        className={classes.mx12}
                    />
                    <Divider
                        orientation="vertical"
                        flexItem
                    />
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
                    <Box flexGrow={1}></Box>
                    <Tooltip title="提示">
                        <IconButton onClick={() => {toggleInfoDialog(true)}}>
                            <InfoIcon
                                htmlColor="white"
                            />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Box
                id="paper"
                onContextMenu={(e) => e.preventDefault()}
            >
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
                            {SHAPES.ELEMENTS.map((type, index) =>
                                <Grid
                                    item xs={4}
                                    key={index}
                                    className={classes.GridItem}
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
                                className={classes.GridItem}
                            >   
                                <LinkSvgIcon
                                    direction='top'
                                    disabled={selectedElement?.prop('top') !== undefined}
                                    type={twoWayLinkEnabled ? 'twoWayVLink' : 'oneWayVLink'}
                                />
                            </Grid>
                            <Grid item xs={4}></Grid>
                            <Grid 
                                item
                                xs={4}
                                className={classes.GridItem}
                            >
                                <LinkSvgIcon
                                    direction='left'
                                    disabled={selectedElement?.prop('left') !== undefined}
                                    type={twoWayLinkEnabled ? 'twoWayHLink' : 'oneWayHLink'}
                                />
                            </Grid>
                            <Grid 
                                item
                                xs={4}
                                className={classes.GridItem}
                            >
                                <ElementSvgIcon
                                    disabled={true}
                                    type={selectedElement?.prop('name') as string}
                                />
                            </Grid>
                            <Grid 
                                item
                                xs={4}
                                className={classes.GridItem}
                            >
                                <LinkSvgIcon
                                    direction='right'
                                    disabled={selectedElement?.prop('right') !== undefined}
                                    type={twoWayLinkEnabled ? 'twoWayHLink' : 'oneWayHLink'}
                                />
                            </Grid>
                            <Grid item xs={4}></Grid>
                            <Grid 
                                item
                                xs={4}
                                className={classes.GridItem}
                            >
                                <LinkSvgIcon
                                    direction='bottom'
                                    disabled={selectedElement?.prop('bottom') !== undefined}
                                    type={twoWayLinkEnabled ? 'twoWayVLink' : 'oneWayVLink'}
                                />
                            </Grid>
                            <Grid item xs={4}></Grid>
                        </Grid>
                    </Box>
                    <MenuItem onClick={deleteCell}>刪除</MenuItem>
                </Menu>
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
            <Dialog
                open={infoDialog}
                onClose={() => {toggleInfoDialog(false)}}
            >
                <DialogTitle>繪圖提示</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        1. 使用右鍵切換編輯模式/拖曳模式
                    </DialogContentText>
                    <DialogContentText>
                        2. 在物體上點選右鍵，可新增線段；在線段上點選右鍵，可新增物體
                    </DialogContentText>
                    <DialogContentText>
                        3. 線段分成水平/垂直，且分成單向/雙向
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Fragment>
    )
}