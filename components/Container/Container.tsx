import { ContainerProps } from "./Container.props"
import styles from "./Container.module.scss";
import cn from 'classnames';

export const Container = ({children, className, typeContainer = 'none', ...props}:ContainerProps) => {
    return(
        <div className={cn(className, {
            [styles.header]: typeContainer == 'header',
            [styles.buttons]: typeContainer == 'buttons',
            [styles.input]: typeContainer == 'input',
        })}
        {...props}>
            {children}
        </div>
    )
}