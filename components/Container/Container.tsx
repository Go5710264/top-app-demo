import { ContainerProps } from "./Container.props"
import styles from "./Container.module.scss";
import cn from 'classnames';

export const Container = ({children, className, typeContainer = 'none', mobileHide = false, columnGap, ...props}:ContainerProps) => {
    return(
        <div className={cn(styles.container, className, {
            [styles.container_header]: typeContainer == 'header',
            [styles.container_buttons]: typeContainer == 'buttons',
            [styles.container_input]: typeContainer == 'input',
            [styles.container_rating]: typeContainer == 'rating',
            [styles.container_subheader]: typeContainer == 'subheader',
            [styles.container_preview]: typeContainer == 'preview',
            [styles.container_logoNewFilm]: typeContainer == 'logoNewFilm',
            [styles.container_mobileHide]: mobileHide == true,
            [styles.container_columnGapS]: columnGap == 's',
            [styles.container_columnGapM]: columnGap == 'm',

        })}
            {...props}
        >
            {children}
        </div>
    )
}