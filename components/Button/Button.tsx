import { ButtonProps } from "./Button.props"
import styles from "./Button.module.scss"
import cn from 'classnames';
import SouvenirIcon from './souvenir.svg'

export const Button = ({appearance, children, fontSize = 's', className, icon = false}:ButtonProps) => {
    return(
        <button className={cn(styles.button, className, {
            [styles.button_gradient]: appearance == 'gradient',
            [styles.button_gray]: appearance == 'gray',
            [styles.button_transparent]: appearance == 'transparent',
            [styles.button_fontS]: fontSize == 's',
            [styles.button_fontM]: fontSize == 'm',
            [styles.button_icon]: icon == true,
        })}>
            {children}
            {/* {icon != "none" && <span className={styles.button__icon}>
                <SouvenirIcon/>    
            </span>} */}
        </button>
    )
}