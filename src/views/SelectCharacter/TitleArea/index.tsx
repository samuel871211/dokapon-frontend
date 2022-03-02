import React, { useContext } from 'react'
import { slideControllerContext } from '../../../reducers/slideController'
import styles from './index.module.css'

export default TitleArea

function TitleArea (props: { title: string }): JSX.Element {
    const { title } = props
    const { slideControllerDispatch, slideState } = useContext(slideControllerContext)
    const { titleArea } = slideState

    function handleAnimation (e: React.AnimationEvent) {
        if (e.animationName.includes('slideDown')) return

        slideControllerDispatch({
            type: 'titleArea',
            payload: false
        })
    }
    
    return (
        <div
            className={`
            ${styles.container}
            ${titleArea ? styles.leave : ''}`}
            onAnimationEnd={handleAnimation}
        >
            {title}
        </div>
    )
}