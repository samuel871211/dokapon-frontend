import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import style from '../../global/style'
const backendUrl = process.env.REACT_APP_BACKEND_BASEURL || ''
const genderToCN = { male: '男', female: '女' }
type gender = 'male' | 'female'

export default function GenderBlockBtn (props: { gender: gender, selectedGender: gender }): JSX.Element {
    const { gender, selectedGender } = props
    const imgSrc = `${backendUrl}/imgs/beginner_${gender}_red_front.png`

    const useStyles = makeStyles({
        genderBlock: {
            width: '50%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'center'
        },
        btn: {
            width: '80%',
            height: '15%',
            display: 'flex',
            paddingLeft: '5%',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '2rem'
        },
        btnText: {
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: '15%',
            letterSpacing: '1px'
        },
        darkenImg: {
            filter: 'brightness(70%)'
        }
    })
    const classes = useStyles()
    const globalStyle = style()
    return (
        <Box className={classes.genderBlock}>
            <Box width='min(20vw, 41.6vh)'>
                <img 
                    src={imgSrc}
                    width='100%'
                    alt={genderToCN[gender]}
                    className={selectedGender === gender ? classes.darkenImg: ''}
                />
            </Box>
            <Box
                className={`
                ${classes.btn}
                ${globalStyle.yellowBlock}
                ${selectedGender === gender ? globalStyle.hoverEffect: ''}`}
            >
                <img src='' width='30px' height='30px'/>
                <Box className={classes.btnText}>
                    {genderToCN[gender]}
                </Box>
            </Box>
        </Box>
    )
}