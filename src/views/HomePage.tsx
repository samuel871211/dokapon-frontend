import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
// import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Fragment } from 'react'

export default function HomePage (): JSX.Element {
    // data

    // methods

    // watch && mounted && unmount

    // styles
    const styles = makeStyles(() => ({
        title: {
            marginTop: '32px',
            marginBottom: '32px'
        },
        container: {
            width: '100vw'
            // height: '100vh'
        },
        buttonGroup: {
            width: '35%'
        },
        buttons: {
            marginTop: '12px',
            marginBottom: '12px',
            fontWeight: 'bold',
            fontSize: '18px'
        }
    }))
    const classes = styles()

    // child components

    // template
    return (
        <Fragment>
            <Typography
                variant="h2"
                color="textPrimary"
                align="center"
                children="DOKAPON THE WORLD"
                className={classes.title}
            />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                className={classes.container}
            >
                <Box className={classes.buttonGroup}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        children="故事模式"
                        className={classes.buttons}
                        onClick={() => {window.location.assign('/StoryMode')}}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        children="對戰模式"
                        className={classes.buttons}
                        onClick={() => {window.location.assign('/SelectCharacter')}}
                    />
                    {/* <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        children="繪圖"
                        className={classes.buttons}
                        onClick={() => {window.location.assign('/GraphEditor')}}
                    /> */}
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        children="設定"
                        className={classes.buttons}
                    />
                </Box>
            </Box>
        </Fragment>
    )
}