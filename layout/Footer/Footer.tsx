import { FooterProps } from "./Footer.props"
import styles from "./Footer.module.scss"
import cn from 'classnames';

export const Footer = ({...props}:FooterProps) => {
    return(
        <footer {...props}>
            Footer
        </footer>
    )
}