import { PtagProps } from "./Ptag.props"
import styles from "./Ptag.module.scss"
import cn from 'classnames';

export const Ptag = ({appearance='none', children}:PtagProps) => {
    return(
        <p className={cn(styles.text, {
            [styles.text_descriptionMain]: appearance == 'description-main',
            [styles.text_descriptionSeries]: appearance == 'description-series',
            [styles.text_reviews]: appearance == 'reviews',
        })}>
            {children}
        </p>
    )
}