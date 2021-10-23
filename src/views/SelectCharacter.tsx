import guide from '../imgs/guide.png'
// import selectCharacterBackground from '../imgs/selectCharacterBackground.png'
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
import japanWords from '../global/japanWords'
import style from '../global/style'
import { colors, basicJobs } from '../global/characters'

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
    const globalStyle = style()
    const useStyles = makeStyles(() => ({
        container: {
            width: '100%',
            height: '100%',
            overflow: 'hidden'
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
        goalInputArea: {
            width: '80%',
            height: '40%',
            margin: 'calc(65vh * 0.3) 10%'
        },
        goalTitle: {
            width: '100%',
            height: '50px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '2rem'
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
            width: '55%',
            height: '100%'
        },
        colorExampleImg: {
            width: 'min(calc(100vw / 12 * 7 * 0.8 * 0.55), calc(65vh * 0.8))',
            height: 'min(calc(100vw / 12 * 7 * 0.8 * 0.55), calc(65vh * 0.8))'
        },
        verticalBtnGroup: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
            width: '45%',
            height: '100%',
        },
        selectJobOrAILevelBtn: {
            width: '90%',
            height: 'calc(100% / 6)',
            fontSize: '2.5rem',
            fontWeight: 'bold'
        },
        selectColorBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '70%',
            height: 'calc(100% / 11)'
        },
        selectColorCircle: {
            borderRadius: '50%',
            border: '2px solid black',
            height: '90%',
            width: '20%',
            marginLeft: '7.5%'
        },
        selectColorName: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginRight: '7.5%'
        },
        aiGenerateDialog: {
            width: '85%',
            height: '100%',
            position: 'relative',
            top: '5%',
            left: '5%',
            display: 'flex',
            flexDirection: 'column'
        },
        aiGenerateDialogTitle: {
            fontWeight: 'bold',
            fontSize: '2.5rem',
            textAlign: 'center',
            width: '100%'
        },
        aiGenerateDialogBottom: {
            display: 'flex',
            flexGrow: 1
        },
        aiGenerateDialogBtnGroup: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '50%'
        },
        aiGenerateDialogBtn: {
            height: 'calc(100% / 6)',
            width: '90%',
            fontSize: '2.5rem',
            fontWeight: 'bold'
        }
    }))
    const classes = useStyles()

    // components
    function SelectGoalType (): JSX.Element {
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

    function ExampleCharacterImg (): JSX.Element {
        const prefix = process.env.REACT_APP_BACKEND_BASEURL || ''
        const suffix = 'imgs/warrior_male_red_front.png'
        return (
            <Fade in={true} timeout={1200}>
                <Box className={`${classes.colorExampleImgContainer} ${globalStyle.xyCenter}`}>
                    <img src={`${prefix}/${suffix}`} className={`${classes.colorExampleImg}`}/>
                </Box>
            </Fade>
        )
    }

    function SelectColor (): JSX.Element {
        const colorRows = []

        for (const [color, value] of Object.entries(colors)) {
            const { chinese, rgb } = value
            colorRows.push( 
                <Box className={`${classes.selectColorBtn} ${globalStyle.yellowBlock}`} key={chinese}>
                    <Box className={classes.selectColorCircle} bgcolor={rgb}></Box>
                    <Box className={classes.selectColorName}>{chinese}</Box>
                </Box>
            )
        }

        return (
            <Box className={`${classes.chooseArea} ${globalStyle.xyCenter}`}>
                <ExampleCharacterImg/>
                <Slide direction="up" in={true} timeout={800}>
                    <Box className={`${classes.verticalBtnGroup}`} justifyContent="space-evenly">
                        {colorRows}
                    </Box>
                </Slide>
            </Box>
        )
    }

    function SelectJob (): JSX.Element {
        const jobRows = []

        for (const [job, value] of Object.entries(basicJobs)) {
            const { chinese } = value
            jobRows.push(
                <Box
                    className={`\t
                        ${classes.selectJobOrAILevelBtn}\t
                        ${globalStyle.yellowBlock}\t
                        ${globalStyle.xyCenter}\t
                    `}
                    key={chinese}
                    children={chinese}
                />
            )
        }

        return (
            <Box className={`${classes.chooseArea} ${globalStyle.xyCenter}`}>
                <ExampleCharacterImg/>
                <Slide direction="up" in={true} timeout={800}>
                    <Box className={`${classes.verticalBtnGroup}`} justifyContent="space-evenly">
                        {jobRows}
                    </Box>
                </Slide>
            </Box>
        )
    }

    function SelectAILevel (): JSX.Element {
        const aiLevelRows = []

        for (const aiLevel of ['弱', '普通', '狡猾']) {
            aiLevelRows.push(
                <Box
                    className={`
                        ${classes.selectJobOrAILevelBtn}
                        ${globalStyle.yellowBlock}
                        ${globalStyle.xyCenter}
                    `}
                    key={aiLevel}
                    children={aiLevel}
                    mb={2}
                />
            )
        }

        return (
            <Box className={`${classes.chooseArea} ${globalStyle.xyCenter}`}>
                <Box width="65%"></Box>
                <Slide direction="up" in={true} timeout={800}>
                    <Box className={`${classes.verticalBtnGroup}`} justifyContent="center">
                        {aiLevelRows}
                    </Box>
                </Slide>
            </Box>
        )
    }

    function GoalInputArea (): JSX.Element {
        const inputBlocks = []
        const goalUnit = selectedGoal === '期間' ? '週' : '¥'
        const inputLen = selectedGoal === '期間' ? 3 : 9
        for (let i = 0; i < inputLen; i++) {
            inputBlocks.push(
                <Box className={`${classes.goalBtn} ${globalStyle.xyCenter}`} key={i}>0</Box>
            )
        }
        return (
            <Slide direction='left' in={true} timeout={800}>
                <Box className={`${classes.goalInputArea} ${globalStyle.yellowBlock}`}>
                    <Box className={`${classes.goalTitle} ${globalStyle.xyCenter}`}>目標{selectedGoal}</Box>
                    <CustomBorderBottom/>
                    <Box height='calc(100% - 60px)' className={globalStyle.xyCenter}>
                        <Box p={1} className={`${globalStyle.xyCenter} ${globalStyle.yellowBlock}`}>
                            {inputBlocks}
                        </Box>
                        <Box className={classes.goalUnit}>{goalUnit}</Box>
                    </Box>
                </Box>
            </Slide>
        )
    }

    function AIGenerateDialog (): JSX.Element {
        return (
            <Box className={`${classes.aiGenerateDialog} ${globalStyle.yellowBlock}`}>
                <Box className={classes.aiGenerateDialogTitle}>勇者募集!!</Box>
                <CustomBorderBottom/>
                <Box className={`${classes.aiGenerateDialogBottom}`}>
                    <Box className={globalStyle.xyCenter} width="50%">aaa</Box>
                    <Box className={`${classes.aiGenerateDialogBtnGroup}`}>
                        <Box className={`${globalStyle.yellowBlock} ${classes.aiGenerateDialogBtn} ${globalStyle.xyCenter}`}>弱</Box>
                        <Box className={`${globalStyle.yellowBlock} ${classes.aiGenerateDialogBtn} ${globalStyle.xyCenter}`}>男</Box>
                        <Box className={`${globalStyle.yellowBlock} ${classes.aiGenerateDialogBtn} ${globalStyle.xyCenter}`}>綠</Box>
                        <Box className={`${globalStyle.yellowBlock} ${classes.aiGenerateDialogBtn} ${globalStyle.xyCenter}`}>魔法師</Box>
                        <Box className={`${globalStyle.yellowBlock} ${classes.aiGenerateDialogBtn} ${globalStyle.xyCenter}`}>決定</Box>
                    </Box>
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
        japanWords[section][0].forEach((word, index) => {
            rows1.push(<KeyBoardKey word={word} key={index}/>)
        })
        japanWords[section][1].forEach((word, index) => {
            rows2.push(<KeyBoardKey word={word} key={index}/>)
        })
        return (
            <Slide direction='up' in={true} timeout={800}>
                <Grid item xs={12}>
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

            <AITopLeftImgArea src={guide} alt='ナビイ'/>

            <Grid item xs={7}>
                <SettingTitleArea title='自由模式設定'/>
                {/* <SelectGoalType/> */}
                {/* <SelectNumberOfPlayers/> */}
                {/* <SelectGender/> */}
                {/* <SelectColor/> */}
                {/* <SelectJob/> */}
                <SelectAILevel/>

                {/* <GoalInputArea/> */}
                {/* <AIGenerateDialog/> */}
            </Grid>

            <AISpeakingDialog
                name='ナビイ'
                message='要選擇什麼遊戲模式呢？'
            />
        </Grid>
    )
}