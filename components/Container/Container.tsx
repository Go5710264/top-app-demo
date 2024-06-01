import { ContainerProps } from "./Container.props"
import styles from "./Container.module.scss";
import cn from 'classnames';

export const Container = ({children, className, typeContainer = 'none', mobileHide = false, columnGap, ...props}:ContainerProps) => {
    return(
        <div className={cn(className, {
            [styles.container__header]: typeContainer == 'header',
            [styles.container__buttons]: typeContainer == 'buttons',
            [styles.container__input]: typeContainer == 'input',
            [styles.container__rating]: typeContainer == 'rating',
            [styles.container__preview]: typeContainer == 'preview',
            [styles.container__mobileHide]: mobileHide == true,
            [styles.container_columnGapS]: columnGap == 's',
            [styles.container_columnGapM]: columnGap == 'm',

        })}
            {...props}
        >
            {children}
        </div>
    )
}