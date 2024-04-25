import { IconProps } from "./Icon.props"
import styles from "./Icon.module.scss"

export const Icon = ({path, alt}:IconProps) => {
    return(
        <img className={styles.icon} src={path} alt={alt} />
    )
}