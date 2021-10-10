import guide from '../imgs/guide.png'
// import selectCharacterBackground from '../imgs/selectCharacterBackground.png'
// import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Fade from '@material-ui/core/Fade'
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
import JAPAN_WORDS from '../global/JAPAN_WORDS'
import STYLE from '../global/STYLE'
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
    const globalStyle = STYLE()
    const styles = makeStyles(() => ({
        container: {
            width: '100%',
            height: '100%',
            overflow: 'hidden'
        },
        topRightArea: {
            height: '65%'
        },
        chooseArea: {
            width: '80%',
            height: '80%',
            margin: 'auto'
        },
        chooseBtn: {
            width: '80%',
            height: '15%',
            marginTop: '5%',
            display: 'flex',
            paddingLeft: '5%',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '2rem',
            letterSpacing: '1px'
        },
        topLeftArea: {
            height: '65%',
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
            height: '40%'
        },
        goalTitle: {
            width: '100%',
            height: '50px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '2rem'
        },
        goalInputArea: {
            height: 'calc(100% - 60px)'
        },
        goalBtnGroup: {
            padding: '8px'
        },
        goalBtn: {
            width: '35px',
            height: '35px',
            fontWeight: 'bold',
            fontSize: '2rem',
            marginLeft: '1px',
            marginRight: '1px'
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
            width: 'min(20vw, 41.6vh)',
            margin: 'auto'
        },
        nameInputArea: {
            height: '100vh'
        },
        nameDisplayArea: {
            width: '40%',
            height: '10%',
            position: 'relative',
            top: '5%',
            left: '56%'
        },
        nameDisplaySingleWord: {
            width: 'calc(100% / 10)',
            flexDirection: 'column',
            fontWeight: 'bold',
            fontSize: '2.5rem'
        },
        nameDisplayBottomLine: {
            width: '90%',
            height: '3px',
            backgroundColor: 'black'
        },
        keyboardArea: {
            width: '90%',
            height: '80%',
            margin: 'auto',
            padding: '5vh 0%',
            display: 'flex',
            justifyContent: 'space-evenly'
        },
        keyboardSection: {
            width: '30%',
            display: 'flex',
            flexWrap: 'wrap'
        },
        keyboardKey: {
            width: '20%',
            height: 'calc(100% / 9)',
            fontSize: '2.5rem',
            fontWeight: 'bold'
        },
        keyboardMenu: {
            width: '15%',
            display: 'flex',
            flexDirection: 'column'
        },
        keyboardMenuBtn: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            height: 'calc(100% / 9)',
            display: 'flex',
            alignItems: 'center'
        },
        colorExampleImgContainer: {
            width: '65%',
            height: '100%'
        },
        colorExampleImg: {
            width: 'min(calc(100vw / 12 * 7 * 0.8 * 0.65), calc(65vh * 0.8))',
            height: 'min(calc(100vw / 12 * 7 * 0.8 * 0.65), calc(65vh * 0.8))'
        },
        selectColorBtnGroup: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: '35%',
            height: '100%',
        },
        selectColorBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '90%',
            height: 'calc(100% / 10)'
        },
        selectColorCircle: {
            borderRadius: '50%',
            border: '2px solid black',
            background: 'red',
            height: '90%',
            width: '20%'
        },
        selectColorName: {
            fontSize: '1.5rem',
            fontWeight: 'bold'
        }
    }))
    const classes = styles()

    // components
    function SelectGoal (): JSX.Element {
        return (
            <Slide direction='left' in={true} timeout={800}>
                <Box className={`${classes.chooseArea} ${globalStyle.xyCenter}`} flexDirection='column'>
                    <Box className={`${classes.chooseBtn} ${globalStyle.yellowBlock}`}>
                        <img width='30px' height='30px'/>
                        期間目標
                    </Box>
                    <Box className={`${classes.chooseBtn} ${globalStyle.yellowBlock}`}>
                        <img width='30px' height='30px'/>
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
            for (let i = 0; i < 4; i++) {
                if (i < playerNum) icons.push(<PersonIcon fontSize='large'/>)
                else icons.push(<AdbIcon fontSize='large'/>)
            }
            return (
                <Box className={`${classes.chooseBtn} ${globalStyle.yellowBlock}`}>
                    {icons}
                    <Box className={classes.flexEnd} pr='5%'>1人</Box>
                </Box>
            )
        }
        return (
            <Slide direction='left' in={true} timeout={800}>
                <Box className={`${classes.chooseArea} ${globalStyle.xyCenter}`} flexDirection='column'>
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
            <Slide direction='left' in={true} timeout={800}>
                <Box className={`${classes.chooseArea} ${globalStyle.xyCenter}`}>
                    <Box className={classes.selectGenderBlock}>
                        <Box flexGrow={1}></Box>
                        <Box className={classes.biggestSquare}>
                            <img 
                                src={`${backendUrl}${suffixMale}`}
                                width='100%'
                                alt='男'
                            />
                        </Box>
                        <Box className={`${classes.chooseBtn} ${globalStyle.yellowBlock}`} m='auto'>
                            <img src='' width='30px' height='30px'/>
                            <Box className={classes.flexEnd} pr='15%'>男</Box>
                        </Box>
                    </Box>
                    <Box className={classes.selectGenderBlock}>
                        <Box flexGrow={1}></Box>
                        <Box className={classes.biggestSquare}>
                            <img 
                                src={`${backendUrl}${suffixFemale}`}
                                width='100%'
                                alt='女'
                            />
                        </Box>
                        <Box className={`${classes.chooseBtn} ${globalStyle.yellowBlock}`} m='auto'>
                            <img src='' width='30px' height='30px'/>
                            <Box className={classes.flexEnd} pr='15%'>女</Box>
                        </Box>
                    </Box>
                </Box>
            </Slide>
        )
    }

    function SelectColor (): JSX.Element {
        const prefix = process.env.REACT_APP_BACKEND_BASEURL || ''
        const suffix = 'imgs/warrior_male_red_front.png'
        return (
            <Box className={`${classes.chooseArea} ${globalStyle.xyCenter}`}>
                <Fade in={true} timeout={1200}>
                    <Box className={`${classes.colorExampleImgContainer} ${globalStyle.xyCenter}`}>
                        <img src={`${prefix}/${suffix}`} className={`${classes.colorExampleImg}`}/>
                    </Box>
                </Fade>
                <Slide direction="up" in={true} timeout={800}>
                    <Box className={`${classes.selectColorBtnGroup} ${globalStyle.xyCenter}`}>
                        <Box className={`${classes.selectColorBtn} ${globalStyle.yellowBlock}`}>
                            <Box className={classes.selectColorCircle}></Box>
                            <Box className={classes.selectColorName}>紅色</Box>
                        </Box>
                        <Box className={`${classes.selectColorBtn} ${globalStyle.yellowBlock}`}>
                            <Box className={classes.selectColorCircle}></Box>
                            <Box className={classes.selectColorName}>紅色</Box>
                        </Box>
                        <Box className={`${classes.selectColorBtn} ${globalStyle.yellowBlock}`}>
                            <Box className={classes.selectColorCircle}></Box>
                            <Box className={classes.selectColorName}>紅色</Box>
                        </Box>
                        <Box className={`${classes.selectColorBtn} ${globalStyle.yellowBlock}`}>
                            <Box className={classes.selectColorCircle}></Box>
                            <Box className={classes.selectColorName}>紅色</Box>
                        </Box>
                        <Box className={`${classes.selectColorBtn} ${globalStyle.yellowBlock}`}>
                            <Box className={classes.selectColorCircle}></Box>
                            <Box className={classes.selectColorName}>紅色</Box>
                        </Box>
                        <Box className={`${classes.selectColorBtn} ${globalStyle.yellowBlock}`}>
                            <Box className={classes.selectColorCircle}></Box>
                            <Box className={classes.selectColorName}>紅色</Box>
                        </Box>
                        <Box className={`${classes.selectColorBtn} ${globalStyle.yellowBlock}`}>
                            <Box className={classes.selectColorCircle}></Box>
                            <Box className={classes.selectColorName}>紅色</Box>
                        </Box>
                        <Box className={`${classes.selectColorBtn} ${globalStyle.yellowBlock}`}>
                            <Box className={classes.selectColorCircle}></Box>
                            <Box className={classes.selectColorName}>紅色</Box>
                        </Box>
                        <Box className={`${classes.selectColorBtn} ${globalStyle.yellowBlock}`}>
                            <Box className={classes.selectColorCircle}></Box>
                            <Box className={classes.selectColorName}>紅色</Box>
                        </Box>
                    </Box>
                </Slide>
            </Box>
        )
    }

    function GoalArea (): JSX.Element {
        const inputBlocks = []
        const goalUnit = selectedGoal === '期間' ? '週' : '¥'
        const inputLen = selectedGoal === '期間' ? 3 : 9
        for (let i = 0; i < inputLen; i++) {
            inputBlocks.push(<Box className={`${classes.goalBtn} ${globalStyle.xyCenter}`} key={i}>0</Box>)
        }
        return (
            <Box className={`${classes.goalArea} ${globalStyle.yellowBlock}`}>
                <Box className={`${classes.goalTitle} ${globalStyle.xyCenter}`}>目標{selectedGoal}</Box>
                <CustomBorderBottom/>
                <Box className={`${classes.goalInputArea} ${globalStyle.xyCenter}`}>
                    <Box className={`${classes.goalBtnGroup} ${globalStyle.xyCenter} ${globalStyle.yellowBlock}`}>
                        {inputBlocks}
                    </Box>
                    <Box className={classes.goalUnit}>{goalUnit}</Box>
                </Box>
            </Box>
        )
    }

    function NameInputArea (props: { section: 'hiragana' | 'katakana' | 'special' }): JSX.Element {
        const { section } = props
        
        const rows1: Array<JSX.Element> = []
        const rows2: Array<JSX.Element> = []
        function KeyBoardKey (props: { word: string }): JSX.Element {
            const { word } = props
            return (
                <Box className={`${classes.keyboardKey} ${globalStyle.xyCenter}`}>
                    {word}
                </Box>
            )
        }
        JAPAN_WORDS[section][0].forEach((word, index) => {
            rows1.push(<KeyBoardKey word={word} key={index}/>)
        })
        JAPAN_WORDS[section][1].forEach((word, index) => {
            rows2.push(<KeyBoardKey word={word} key={index}/>)
        })
        return (
            <Slide direction='up' in={true} timeout={800}>
                <Grid item xs={12} className={classes.nameInputArea}>
                    <Box className={`${classes.nameDisplayArea} ${globalStyle.xyCenter} ${globalStyle.yellowBlock}`}>
                        <Box className={`${classes.nameDisplaySingleWord} ${globalStyle.xyCenter}`}>
                            我
                            <Box className={classes.nameDisplayBottomLine}></Box>
                        </Box>
                        <Box className={`${classes.nameDisplaySingleWord} ${globalStyle.xyCenter}`}>
                            真
                            <Box className={classes.nameDisplayBottomLine}></Box>
                        </Box>
                        <Box className={`${classes.nameDisplaySingleWord} ${globalStyle.xyCenter}`}>
                            的
                            <Box className={classes.nameDisplayBottomLine}></Box>
                        </Box>
                        <Box className={`${classes.nameDisplaySingleWord} ${globalStyle.xyCenter}`}>
                            是
                            <Box className={classes.nameDisplayBottomLine}></Box>
                        </Box>
                        <Box className={`${classes.nameDisplaySingleWord} ${globalStyle.xyCenter}`}>
                            一
                            <Box className={classes.nameDisplayBottomLine}></Box>
                        </Box>
                        <Box className={`${classes.nameDisplaySingleWord} ${globalStyle.xyCenter}`}>
                            個
                            <Box className={classes.nameDisplayBottomLine}></Box>
                        </Box>
                        <Box className={`${classes.nameDisplaySingleWord} ${globalStyle.xyCenter}`}>
                            帥
                            <Box className={classes.nameDisplayBottomLine}></Box>
                        </Box>
                        <Box className={`${classes.nameDisplaySingleWord} ${globalStyle.xyCenter}`}>
                            哥
                            <Box className={classes.nameDisplayBottomLine}></Box>
                        </Box>
                        <Box className={`${classes.nameDisplaySingleWord} ${globalStyle.xyCenter}`}>
                            拉
                            <Box className={classes.nameDisplayBottomLine}></Box>
                        </Box>
                    </Box>
                    <Box className={`${classes.keyboardArea} ${globalStyle.yellowBlock}`}>
                        <Box className={classes.keyboardSection}>
                            {rows1}
                        </Box>
                        <Box className={classes.keyboardSection}>
                            {rows2}
                        </Box>
                        <Box className={classes.keyboardMenu}>
                            <Box className={classes.keyboardMenuBtn}>平假名</Box>
                            <Box className={classes.keyboardMenuBtn}>片假名</Box>
                            <Box className={classes.keyboardMenuBtn}>ＡＢＣ</Box>
                            <Box className={classes.keyboardMenuBtn}></Box>
                            <Box className={classes.keyboardMenuBtn}>前進</Box>
                            <Box className={classes.keyboardMenuBtn}>後退</Box>
                            <Box className={classes.keyboardMenuBtn}>刪除</Box>
                            <Box className={classes.keyboardMenuBtn}></Box>
                            <Box className={classes.keyboardMenuBtn}>ＯＫ</Box>
                        </Box>
                    </Box>
                </Grid>
            </Slide>
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
            id='gridContainer'
            container
            className={classes.container}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            {/* <NameInputArea section='hiragana'/> */}
            <Grid item xs={5} className={`${classes.topLeftArea} ${globalStyle.xyCenter}`}>
                <AITopLeftImgArea
                    src={guide}
                    alt='ナビイ'
                />
            </Grid>

            <Grid item xs={7} className={classes.topRightArea}>
                <SettingTitleArea title='自由模式設定'/>
                {/* <SelectGoal/> */}
                {/* <SelectNumberOfPlayers/> */}
                {/* <SelectGender/> */}
                <SelectColor/>

                {/* <Slide direction='left' in={true} timeout={800}>
                    <Box className={classes.topRightFlexBox}>
                        <GoalArea/>
                    </Box>
                </Slide> */}
            </Grid>
            
            <AISpeakingDialog
                name='ナビイ'
                message='要選擇什麼遊戲模式呢？'
            />
        </Grid>
    )
}