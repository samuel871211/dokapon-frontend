import React, { useState, useEffect, useRef } from 'react'
import globalStyles from '../../global/styles.module.css'
import styles from './ExampleCharacterImg.module.css'

const prefix = process.env.REACT_APP_BACKEND_BASEURL || ''

export default ExampleCharacterImg

function ExampleCharacterImg (props: { color: string, job: string }): JSX.Element {
    const focusElement = useRef<HTMLImageElement>(null)
    const [colorChange, toggleColorChange] = useState(true)
    const { color, job } = props

    function handleAnimationEnd (e: React.AnimationEvent<HTMLImageElement>) {
        if (e.animationName.includes('fadeIn')) {
            toggleColorChange(false)
        }
    }

    useEffect(() => {
        toggleColorChange(true)
    }, [color])
    
    /* 
    prop color change => react只會更新img src
    但如果再把img包成component，就會有fade特效了
    即便用useEffect來toggle fade特效，如果color change太快
    前面的animation還沒結束，沒辦法中斷，useEffect會在render後才執行
    */
    
    
    return (
        <div
            className={`
            ${styles.container}
            ${globalStyles.xyCenter}`}
        >
            <img
                src={`${prefix}/imgs/${job}_male_${color}_front.png`}
                className={`
                ${styles.img}
                ${colorChange ? styles.fade : ''}`}
                ref={focusElement}
                onAnimationEnd={handleAnimationEnd}
            />
        </div>
    )
}