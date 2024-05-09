import { ButtonContainerProps } from "./ButtonContainer.props"
import styles from "./ButtonContainer.module.scss"
import cn from 'classnames';

export const ButtonContainer = ({children}:ButtonContainerProps) => {
    console.log('hi')
    return(
        <div className={styles.buttonContainer}>
            {children}
        </div>
    )
}