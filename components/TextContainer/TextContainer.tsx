import { TextContainerProps } from "./TextContainer.props"
import styles from "./TextContainer.module.scss"

export const TextContainer = ({children}:TextContainerProps) => {
    return(
        <div className={styles.textContainer}>
            {children}
        </div>
    )
}