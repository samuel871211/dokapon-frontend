import { ReactNode } from 'react'
import { AspectRatioTypes } from '../../global'
import styles from './Container.module.css'
import indexStyles from '../../index.module.css'
import classNames from 'classnames'
const aspectRatioStyles = {
    '16:9': indexStyles.wideAspectRatio,
    '4:3': indexStyles.traditionalAspectRatio,
    'stretch': indexStyles.stretchAspectRatio
}

export default Container

function Container (props: {
    children: ReactNode | ReactNode[],
    aspectRatio: AspectRatioTypes
    className?: string,
}): JSX.Element {
    const { children, aspectRatio, className } = props
    return (
        <div className={classNames(
            styles.container,
            className,
            aspectRatioStyles[aspectRatio]
        )}>
            <>{children}</>
        </div>
    )
}