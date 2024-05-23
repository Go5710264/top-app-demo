import { LayoutProps } from "./Layout.props"
import styles from "./Layout.module.scss"
import cn from 'classnames';

export const Layout = ({children}:LayoutProps) => {
    return(
        <>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </>
    )
}