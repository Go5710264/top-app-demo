import { LayoutProps } from "./Layout.props"
import styles from "./Layout.module.scss"
import cn from 'classnames';
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { FunctionComponent } from "react";

export const Layout = ({children}:LayoutProps) => {
    return(
        <>
            <Header/>
                <main className="section">
                    {children}
                </main>
            <Footer/>
        </>
    )
}

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <Layout>
                <Component {...props}></Component>
            </Layout>
        )
    }
}