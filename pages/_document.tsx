import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { JSX } from "react/jsx-runtime";
class MyDocument extends Document{
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render(): JSX.Element {
        return(
            <Html lang="ru">
                <Head/>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;