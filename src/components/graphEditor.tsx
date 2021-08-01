import * as shapes from './shapes'
import { useState, useEffect, Fragment } from 'react'
import Box from '@material-ui/core/Box'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import $ from "jquery"
import _ from 'lodash'
// import * as Backbone from 'backbone'
import * as joint from 'jointjs'
import 'jointjs/dist/joint.css'

export default function GraphEditor () {
    // data
    const [addCellCtxMenuPos, setAddCellCtxMenuPos] = useState({
        x: -1,
        y: -1
    })
    const [ctrlCellCtxMenuPos, setCtrlCellCtxMenuPos] = useState({
        x: -1,
        y: -1
    })
    const [graph] = useState(new joint.dia.Graph())
    const [paper, initPaper] = useState<joint.dia.Paper>()
    const [selectedCell, setSelectedCell] = useState<joint.dia.Cell>()

    // methods
    function initCanvas (): void {
        // paper should be initialized after #canvas is being mounted
        const Paper = new joint.dia.Paper({
            el: $('#canvas'),
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
                        textContent: linkView.model.attributes.type[6],
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
            'link:connect': function (linkView, evt, elementViewConnected, magnet, arrowhead) {
                console.log(linkView)
                // const type = linkView.model.attributes.type
                // const sourcePoint = linkView.sourcePoint
                // const targetPoint = linkView.targetPoint
                // const sourceCell = linkView.model.getSourceCell()
                // const targetCell = linkView.model.getTargetCell()
                // if (!sourceCell || !targetCell) return
                // switch (type.toLowerCase()) {
                // case 'onewayhlink':
                //     if (sourcePoint.x >= targetPoint.x) {
                //         sourceCell.attributes.left = targetCell.id
                //     } else if (sourcePoint.x < targetPoint.x) {
                //         sourceCell.attributes.right = targetCell.id
                //     }
                //     break
                // case 'twowayhlink':
                //     if (sourcePoint.x >= targetPoint.x) {
                //         sourceCell.attributes.left = targetCell.id
                //         targetCell.attributes.right = sourceCell.id
                //     } else if (sourcePoint.x < targetPoint.x) {
                //         sourceCell.attributes.right = targetCell.id
                //         targetCell.attributes.left = sourceCell.id
                //     }
                //     break
                // case 'onewayvlink':
                //     if (sourcePoint.y >= targetPoint.y) {
                //         sourceCell.attributes.bottom = targetCell.id
                //     } else if (sourcePoint.y < targetPoint.y) {
                //         sourceCell.attributes.top = targetCell.id
                //     }
                //     break
                // case 'twowayvlink':
                //     if (sourcePoint.y >= targetPoint.y) {
                //         sourceCell.top = targetCell.id
                //         targetCell.bottom = sourceCell.id
                //     } else if (sourcePoint.y < targetPoint.y) {
                //         sourceCell.bottom = targetCell.id
                //         targetCell.top = sourceCell.id
                //     }
                //     break
                // default:
                //     console.log('unknown link type')
                //     break
                // }
                // console.log(sourceCell.attributes)
                // console.log(targetCell.attributes)
            },
            'link:disconnect': function (linkView, evt, elementViewConnected, magnet, arrowhead) {
                // const type: string = linkView.model.attributes.type
                // const sourcePoint: joint.dia.Point = linkView.sourcePoint
                // const targetPoint: joint.dia.Point = linkView.targetPoint
                // const sourceCell: joint.dia.Cell = arrowhead === 'source' ? elementViewConnected.model : linkView.model.getSourceCell()
                // const targetCell: joint.dia.Cell = arrowhead === 'target' ? elementViewConnected.model : linkView.model.getTargetCell()
                // if (!sourceCell && !targetCell) return
                // switch (type) {
                //     case 'oneWayHLink':
                //         if (sourcePoint.x >= targetPoint.x) {
                //             delete sourceCell.attributes.left
                //         } else if (sourcePoint.x < targetPoint.x) {
                //             delete sourceCell.attributes.right
                //         }
                //         break
                //     case 'twoWayHLink':
                //         if (sourcePoint.x >= targetPoint.x) {
                //             delete sourceCell.attributes.left
                //             delete targetCell.attributes.right
                //         } else if (sourcePoint.x < targetPoint.x) {
                //             delete sourceCell.attributes.right
                //             delete targetCell.attributes.left
                //         }
                //         break
                //     case 'oneWayVLink':
                //         if (sourcePoint.y >= targetPoint.y) {
                //             delete sourceCell.attributes.bottom
                //         } else if (sourcePoint.y < targetPoint.y) {
                //             delete sourceCell.attributes.top
                //         }
                //         break
                //     case 'twoWayVLink':
                //         if (sourcePoint.y >= targetPoint.y) {
                //             delete sourceCell.top
                //             delete targetCell.bottom
                //         } else if (sourcePoint.y < targetPoint.y) {
                //             delete sourceCell.bottom
                //             delete targetCell.top
                //         }
                //         break
                //     default:
                //         console.log('unknown link type')
                //         break
                // }
                // console.log(sourceCell.attributes)
                // console.log(targetCell.attributes)
            },
            'blank:contextmenu': function (evt, x, y) {
                setAddCellCtxMenuPos({x, y})
            },
            'cell:contextmenu': function (cellView, evt, x, y) {
                setSelectedCell(cellView)
                setCtrlCellCtxMenuPos({x, y})
            }
        })
    }

    function addElement (type: string): void {
        const element = shapes.createElement(type)
        element.position(addCellCtxMenuPos.x, addCellCtxMenuPos.y)
        element.addTo(graph)
        closeAddCellCtxMenu()
    }

    function addLink (type: string): void {
        const link = shapes.createLink(type)
        const sourceAxis = {
            x: addCellCtxMenuPos.x,
            y: addCellCtxMenuPos.y
        }
        link.source(sourceAxis)

        // 依據水平、垂直，來決定線段要怎麼長
        switch (type.toLowerCase()) {
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
        if (!selectedCell) return

        graph.removeCells([selectedCell])
        closeCtrlCellCtxMenu()
    }

    // watch && mounted
    useEffect(initCanvas, [graph])
    useEffect(registerPaperEventHandler, [paper])

    // template
    return (
        <Fragment>
            <Box id="canvas" onContextMenu={(e) => e.preventDefault()}>
                <Menu
                    keepMounted
                    open={addCellCtxMenuPos.x !== -1}
                    onClose={closeAddCellCtxMenu}
                    anchorReference="anchorPosition"
                    anchorPosition={{
                        top: addCellCtxMenuPos.y,
                        left: addCellCtxMenuPos.x
                    }}
                >   
                    {shapes.ELEMENTS.map((type, index) =>
                        <MenuItem 
                            onClick={() => addElement(type)} 
                            key={index}
                        >
                            {type}
                        </MenuItem>
                    )}
                    {shapes.LINKS.map((type, index) =>
                        <MenuItem 
                            onClick={() => addLink(type)} 
                            key={index}
                        >
                            {type}
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
        </Fragment>
    )
}