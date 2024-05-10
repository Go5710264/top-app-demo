import styles from "./Link.module.scss"
import { LinkProps } from "./Link.props"

// Не востребованный компонент
const LinkProps = ({href, children, ...props}: LinkProps) => {
    return (
        <a href={href} className={styles.link}
            {...props}
        >
            {children}
        </a>
    )
}