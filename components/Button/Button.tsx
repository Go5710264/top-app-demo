import { ButtonProps } from "./Button.props"
import styles from "./Button.module.scss"
import cn from 'classnames';
import SouvenirIcon from './souvenir.svg'

export const Button = ({appearance, children, className, icon = false}:ButtonProps) => {
    return(
        <button className={cn(styles.button, className, {
            [styles.button__gradient]: appearance == 'gradient',
            [styles.button__gray]: appearance == 'gray',
            [styles.button__icon]: icon == true,
        })}>
            {children}
            {/* {icon != "none" && <span className={styles.button__icon}>
                <SouvenirIcon/>    
            </span>} */}
        </button>
    )
}