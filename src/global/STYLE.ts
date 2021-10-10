import { makeStyles } from '@material-ui/core/styles'
const STYLE = makeStyles(() => ({
    yellowBlock: {
        borderRadius: '30px',
        border: '3px outset #222222',
        backgroundColor: '#fee59a'
    },
    xyCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    hoverEffect: {
        animation: `$btnHoverFrom 500ms, $btnHoverTo 500ms`,
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
        animationTimingFunction: 'ease-in-out',
    },
    '@keyframes btnHoverFrom': {
        '0%': {
            backgroundColor: '#9bd65b'
        },
        '100%': {
            backgroundColor: '#fee59a'
        }
    },
    '@keyframes btnHoverTo': {
        '0%': {
            backgroundColor: '#fee59a'
        },
        '100%': {
            backgroundColor: '#9bd65b'
        }
    }
}))

export default STYLE