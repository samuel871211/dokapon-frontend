import guide from '../imgs/guide.png'
import selectCharacterBackground from '../imgs/selectCharacterBackground.png'
// import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Slide from '@material-ui/core/Slide'
import CustomBorderBottom from '../components/CustomBorderBottom'
import PersonIcon from '@material-ui/icons/Person'
import AdbIcon from '@material-ui/icons/Adb'
// import Divider from '@material-ui/core/Divider'
import { useEffect, useState } from 'react'
import AISpeakingDialog from '../components/AISpeakingDialog'
// import { SVG } from '../global/shapes'

// 目標 => 人數 => 性別 => 名字 => 顏色 => 職業


export default function SelectCharacter (): JSX.Element {
    // data
    const [selectedGoal, setSelectedGoal] = useState<'期間' | '金額'>('期間')

    // methods
    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            console.log('arrowup')
            break
        case 'arrowleft':
            console.log('arrowleft')
            break
        case 'arrowright':
            console.log('arrowright')
            break
        case 'arrowdown':
            console.log('arrowdown')
            break
        case 'd':
            console.log('d')
            break
        case 'x':
            console.log('x')
            break
        case 'z':
            console.log('z')
            break
        case 's':
            console.log('s')
            break
        default:
            console.log(e.key.toLowerCase())
            break
        }
    }

    // styles
    const styles = makeStyles(() => ({
        container: {
            width: '100%',
            height: '100%',
            backgroundImage: `url(${selectCharacterBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            overflow: 'hidden'
        },
        topLeftArea: {
            height: '65%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        },
        biggestSquare: {
            width: "min(41.6vw, 65vh)",
            height: "min(41.6vw, 65vh)"
        },
        topRightArea: {
            height: '65%'
        },
        // bottomArea: {
        //     height: '35%'
        // },
        // nameArea: {
        //     width: '35%',
        //     height: '20%',
        //     marginLeft: '5%',
        //     borderRadius: '30px',
        //     border: '3px outset #222222',
        //     backgroundColor: '#fee59a',
        //     position: 'relative',
        //     top: '7.5%'
        // },
        // name: {
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     height: "100%",
        //     fontWeight: 'bold',
        //     fontSize: '2rem',
        // },
        // messageArea: {
        //     width: '95%',
        //     height: '75%',
        //     marginLeft: '2.5%',
        //     borderRadius: '30px',
        //     border: '3px outset #222222',
        //     backgroundColor: '#fee59a'
        // },
        // message: {
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     height: '100%',
        //     fontWeight: 'bold',
        //     fontSize: '2rem',
        //     letterSpacing: '1px'
        // },
        settingTitleArea: {
            width: '80%',
            height: '15%',
            marginTop: '5%',
            borderRadius: '30px',
            border: '3px outset #222222',
            backgroundColor: '#fee59a'
        },
        settingTitle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontWeight: 'bold',
            fontSize: '2rem',
            letterSpacing: '1px'
        },
        chooseArea: {
            width: '80%',
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        chooseBtn: {
            width: '80%',
            height: '15%',
            marginTop: '5%',
            borderRadius: '30px',
            border: '3px outset #222222',
            backgroundColor: '#fee59a',
            display: 'flex',
            paddingLeft: '5%',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '2rem',
            letterSpacing: '1px',
            // '&:hover': {
            //     animation: `$btnHoverFrom 500ms, $btnHoverTo 500ms`,
            //     animationIterationCount: 'infinite',
            //     animationDirection: 'alternate',
            //     animationTimingFunction: 'ease-in-out'
            // }
        },
        topRightFlexBox: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        },
        goalArea: {
            width: '80%',
            height: '40%',
            borderRadius: '30px',
            border: '3px outset #222222',
            backgroundColor: '#fee59a'
        },
        goalTitle: {
            width: '100%',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '2rem',
        },
        goalInputArea: {
            display: 'flex',
            justifyContent: 'center',
            height: 'calc(100% - 60px)',
            alignItems: 'center'
        },
        goalBtnGroup: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '30px',
            border: '3px outset #222222',
            backgroundColor: '#fee59a',
            padding: '8px'
        },
        goalBtn: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '35px',
            height: '35px',
            fontWeight: 'bold',
            fontSize: '2rem',
            marginLeft: '1px',
            marginRight: '1px',
            animation: `$btnHoverFrom 500ms, $btnHoverTo 500ms`,
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
            animationTimingFunction: 'ease-in-out'
        },
        goalUnit: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '2rem',
            marginLeft: '8px'
        },
        guideImg: {
            clipPath: 'polygon(0% 0%, 33.3% 0%, 33.3% 33.3%, 0% 33.3%)',
            width: '300%',
            height: '300%'
        },
        playerNum: {
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: '5%'
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
    const classes = styles()

    // components
    function SelectPlayerNumberBtn (props: { playerNum: number }): JSX.Element {
        const { playerNum } = props
        const rows = []
        for (let i = 0; i < 4; i++) {
            if (i >= playerNum) {
                rows.push(<AdbIcon fontSize="large" key={i}/>)
            } else {
                rows.push(<PersonIcon fontSize="large" key={i}/>)
            }
        }
        return (
            <Box className={classes.chooseBtn}>
                {rows}
                <Box className={classes.playerNum}>
                    {playerNum}人
                </Box>
            </Box>
        )
    }

    function SelectGoalBtn (props: { type: '期間' | '金額' }): JSX.Element {
        const { type } = props
        return (
            <Box className={classes.chooseBtn}>
                <img width="30px" height="30px"/>
                {type}目標
            </Box>
        )
    }

    function GoalArea (): JSX.Element {
        const inputBlocks = []
        const goalUnit = selectedGoal === '期間' ? '週' : '¥'
        const inputLen = selectedGoal === '期間' ? 3 : 9
        for (let i = 0; i < inputLen; i++) {
            inputBlocks.push(<Box className={classes.goalBtn} key={i}>0</Box>)
        }
        return (
            <Box className={classes.goalArea}>
                <Box className={classes.goalTitle}>目標{selectedGoal}</Box>
                <CustomBorderBottom/>
                <Box className={classes.goalInputArea}>
                    <Box className={classes.goalBtnGroup}>
                        {inputBlocks}
                    </Box>
                    <Box className={classes.goalUnit}>{goalUnit}</Box>
                </Box>
            </Box>
        )
    }

    // mount
    useEffect(() => {
        // focus on this HTML Element so that it can handle key down
        document.getElementById('gridContainer')?.focus()
    }, [])
    
    // template
    return (
        <Grid
            id="gridContainer"
            container
            className={classes.container}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <Slide direction="right" in={true} timeout={800}>
                <Grid item xs={5} className={classes.topLeftArea}>
                    <Box className={classes.biggestSquare}>
                        <img src={guide} alt='ナビイ' className={classes.guideImg}></img>
                    </Box>
                </Grid>
            </Slide>
            <Grid item xs={7} className={classes.topRightArea}>
                {/* <Slide direction="down" in={true} timeout={800}>
                    <Box className={classes.settingTitleArea}>
                        <Box className={classes.settingTitle}>自由模式設定</Box>
                    </Box>
                </Slide>
                <Slide direction="left" in={true} timeout={800}>
                    <Box className={classes.chooseArea}>
                        <SelectGoalBtn type="期間"/>
                        <SelectGoalBtn type="金額"/>
                        <SelectPlayerNumberBtn playerNum={1}/>
                        <SelectPlayerNumberBtn playerNum={2}/>
                        <SelectPlayerNumberBtn playerNum={3}/>
                        <SelectPlayerNumberBtn playerNum={4}/>
                    </Box>
                </Slide> */}

                <Slide direction="left" in={true} timeout={800}>
                    <Box className={classes.topRightFlexBox}>
                        <GoalArea/>
                    </Box>
                </Slide>
            </Grid>
            <AISpeakingDialog name="ナビイ" message="要選擇什麼遊戲模式呢？"/>
        </Grid>
    )
}