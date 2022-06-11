// Standard library imports.

// Related third party imports.
import { useLayoutEffect, useRef, AnimationEvent } from 'react'

// Local application/library specific imports.
import styles from './ExampleCharacterImg.module.css'

// Stateless vars declare.
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL

export default ExampleCharacterImg

function ExampleCharacterImg (props: {
    color: string,
    job: string,
    gender: string,
    isFadeOut: boolean,
}): JSX.Element {
    const focusElement = useRef<HTMLImageElement>(null)
    const { color, job, gender, isFadeOut } = props

    // useLayoutEffect fires synchronously after all DOM mutations.
    // Use this to read layout from the DOM and synchronously re-render.
    useLayoutEffect(handleImgFadeAnimation, [color, job])

    function handleImgFadeAnimation (): void {
        focusElement.current?.classList.remove(`${styles.fade}`)
        setTimeout(() => focusElement.current?.classList.add(`${styles.fade}`), 10)
    }

    function handleAnimationEnd (e: AnimationEvent<HTMLDivElement>) {
        focusElement.current?.classList.remove(`${styles.fade}`)
    }

    return (
        <div className={styles.container}>
            <img
                src={`${backendBaseUrl}/imgs/${job}_${gender}_${color}_front.png`}
                className={`
                ${styles.img}
                ${isFadeOut ? styles.fadeOut : ''}`}
                onAnimationEnd={handleAnimationEnd}
                ref={focusElement}
            />
        </div>
    )
}