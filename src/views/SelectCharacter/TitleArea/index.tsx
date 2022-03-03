import React, { useContext } from 'react'
import { UIStateContext } from '../../../reducers/SelectCharacter/UIState'
import styles from './index.module.css'

export default TitleArea

function TitleArea (props: { title: string }): JSX.Element {
    const { title } = props
    const { UIState: { showTitleArea }, UIStateDispatch } = useContext(UIStateContext)

    function handleAnimation (e: React.AnimationEvent) {
        if (e.animationName.includes('slideDown')) return

        UIStateDispatch({
            type: 'showTitleArea',
            payload: true
        })
    }
    
    return (
        <div
            className={`
            ${styles.container}
            ${showTitleArea ? '' : styles.leave}`}
            onAnimationEnd={handleAnimation}
        >
            {title}
        </div>
    )
}