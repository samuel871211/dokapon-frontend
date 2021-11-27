import React, { useContext } from 'react'
import { UserSelectContext } from '../../reducers/SelectCharacter'
import styles from './TitleArea.module.css'

export default TitleArea

function TitleArea (props: { title: string }): JSX.Element {
    const { title } = props
    const { dispatch, userSelect } = useContext(UserSelectContext)
    const { titleAreaIsLeaving } = userSelect

    function handleAnimation (e: React.AnimationEvent) {
        if (e.animationName.includes('slideDown')) return

        dispatch({
            type: 'toggleTitleAreaLeaving',
            payload: ''
        })
    }
    
    return (
        <div
            className={`
            ${styles.container}
            ${titleAreaIsLeaving ? styles.leave : ''}`}
            onAnimationEnd={handleAnimation}
        >
            {title}
        </div>
    )
}