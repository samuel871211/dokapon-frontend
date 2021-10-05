import guide from '../imgs/guide.png'
import selectCharacterBackground from '../imgs/selectCharacterBackground.png'
// import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Slide from '@material-ui/core/Slide'
// slide裡面只能允許單一children，且不可包裝成component，
import CustomBorderBottom from '../components/CustomBorderBottom'
import PersonIcon from '@material-ui/icons/Person'
import AdbIcon from '@material-ui/icons/Adb'
// import Divider from '@material-ui/core/Divider'
import { Fragment, useEffect, useState } from 'react'
import SettingTitleArea from '../components/SettingTitleArea'
import AISpeakingDialog from '../components/AISpeakingDialog'
import AITopLeftImgArea from '../components/AITopLeftImgArea'
// import { SVG } from '../global/shapes'

// 目標 => 人數 => 性別 => 名字 => 顏色 => 職業

const backendUrl = process.env.REACT_APP_BACKEND_BASEURL || ''

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
        topRightArea: {
            height: '65%'
        },
        chooseArea: {
            width: '80%',
            height: '80%',
            display: 'flex',
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
        topLeftArea: {
            height: '65%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
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
        flexEnd: {
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        selectGenderBlock: {
            width: '50%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        biggestSquare: {
            width: "min(20vw, 41.6vh)",
            margin: 'auto'
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
    function SelectGoal (): JSX.Element {
        return (
            <Slide direction="left" in={true} timeout={800}>
                <Box className={classes.chooseArea} flexDirection="column">
                    <Box className={classes.chooseBtn}>
                        <img width="30px" height="30px"/>
                        期間目標
                    </Box>
                    <Box className={classes.chooseBtn}>
                        <img width="30px" height="30px"/>
                        金額目標
                    </Box>
                </Box>
            </Slide>
        )
    }

    function SelectNumberOfPlayers (): JSX.Element {
        
        function SelectNumberOfPlayersBtn (props: { playerNum: number }): JSX.Element {
            const { playerNum } = props
            const icons = []
            for (let i = 0; i <= 4; i++) {
                if (i < playerNum) icons.push(<PersonIcon fontSize="large"/>)
                else icons.push(<AdbIcon fontSize="large"/>)
            }
            return (
                <Box className={classes.chooseBtn}>
                    {icons}
                    <Box className={classes.flexEnd} pr="5%">1人</Box>
                </Box>
            )
        }
        return (
            <Slide direction="left" in={true} timeout={800}>
                <Box className={classes.chooseArea} flexDirection="column">
                    <SelectNumberOfPlayersBtn playerNum={1}/>
                    <SelectNumberOfPlayersBtn playerNum={2}/>
                    <SelectNumberOfPlayersBtn playerNum={3}/>
                    <SelectNumberOfPlayersBtn playerNum={4}/>
                </Box>
            </Slide>
        )
    }

    function SelectGender (): JSX.Element {
        const suffixMale = '/imgs/beginner_male_red_front.png'
        const suffixFemale = '/imgs/beginner_female_red_front.png'
        return (
            <Slide direction="left" in={true} timeout={800}>
                <Box className={classes.chooseArea}>
                    <Box className={classes.selectGenderBlock}>
                        <Box flexGrow={1}></Box>
                        <Box className={classes.biggestSquare}>
                            <img 
                                src={`${backendUrl}${suffixMale}`}
                                width="100%"
                                alt="男"
                            />
                        </Box>
                        <Box className={classes.chooseBtn} m="auto">
                            <img src="" width="30px" height="30px"/>
                            <Box className={classes.flexEnd} pr="15%">男</Box>
                        </Box>
                    </Box>
                    <Box className={classes.selectGenderBlock}>
                        <Box flexGrow={1}></Box>
                        <Box className={classes.biggestSquare}>
                            <img 
                                src={`${backendUrl}${suffixFemale}`}
                                width="100%"
                                alt="女"
                            />
                        </Box>
                        <Box className={classes.chooseBtn} m="auto">
                            <img src="" width="30px" height="30px"/>
                            <Box className={classes.flexEnd} pr="15%">女</Box>
                        </Box>
                    </Box>
                </Box>
            </Slide>
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
            <Grid item xs={5} className={classes.topLeftArea}>
                <AITopLeftImgArea
                    src={guide}
                    alt='ナビイ'
                />
            </Grid>

            <Grid item xs={7} className={classes.topRightArea}>
                <SettingTitleArea title="自由模式設定"/>
                {/* <SelectGoal/>
                <SelectNumberOfPlayers/> */}
                <SelectGender/>

                {/* <Slide direction="left" in={true} timeout={800}>
                    <Box className={classes.topRightFlexBox}>
                        <GoalArea/>
                    </Box>
                </Slide> */}
            </Grid>
            
            <AISpeakingDialog
                name="ナビイ"
                message="要選擇什麼遊戲模式呢？"
            />
        </Grid>
    )
}