import React, { useEffect } from 'react'
import { Slide, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import GenderBlockBtn from './GenderBlockBtn'
import style from '../../global/style'

export default function SelectGender (): JSX.Element {
    const useStyles = makeStyles({
        btnGroup: {
            width: '80%',
            height: '80%',
            margin: 'auto',
            outline: 'none'
        }
    })
    const classes = useStyles()
    const globalStyle = style()

    useEffect(function focus () {
        document.getElementById('hello')?.focus()
    }, [])

    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            break
        case 'arrowleft':
            
            break
        case 'arrowright':
            break
        case 'arrowdown':
            break
        case 'd':
            break
        case 'x':
            break
        case 'z':
            break
        case 's':
            break
        default:
            break
        }
    }


    return (
        <Slide in={true} timeout={800}>
            <Box
                id='hello'
                className={`
                ${classes.btnGroup}
                ${globalStyle.xyCenter}`}
                tabIndex={0}
                onBlur={(event) => { event.target.focus() }}
                onKeyDown={handleKeyDown}
            >
                <GenderBlockBtn gender='male' selected/>
                <GenderBlockBtn gender='female'/>
            </Box>
        </Slide>
    )
}