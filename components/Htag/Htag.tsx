import { HtagProps } from "./Htag.props"
import styles from "./Htag.module.scss"
import cn from 'classnames';

export const Htag = ({tag, children}:HtagProps) => {
    switch (tag) {
        case 'h3':
            return <h3 className={cn(styles.title, styles.title__h3)}>{children}</h3>
        case 'h4':
            return <h4 className={cn(styles.title, styles.title__h4)}>{children}</h4>
        case 'h5':
            return <h5 className={cn(styles.title, styles.title__h5)}>{children}</h5>
        default:
            return <></>
    }
}