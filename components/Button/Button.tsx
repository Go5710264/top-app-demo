import { ButtonProps } from "./Button.props"
import styles from "./Button.module.scss"
import cn from 'classnames';

export const Button = ({appearance, children}:ButtonProps) => {
    return(
        <button className={cn(styles.button, {
            [styles.button__gradient]: appearance == 'gradient',
            [styles.button__gray]: appearance == 'gray'
        })}>
            {children}
        </button>
    )
}