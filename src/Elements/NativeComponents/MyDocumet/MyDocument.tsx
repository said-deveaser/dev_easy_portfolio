import React, {FC} from "react"
import Head from "next/head";
import {BasicComponents} from "../NativeComponents";
import MyDocumentLang from "./lang/MyDocumentLang";

const MyDocument: FC<BasicComponents.MyDocument> =
    ({
         children,
         title = MyDocumentLang.get("DEFAULT_PAGE_TITLE"),
         description = MyDocumentLang.get("DEFAULT_PAGE_DESC"),
         keyWords = ["Разработка", "Development"],
     }) => {
        return (
            <>
                <Head>
                    <title>{title}</title>
                    <meta charSet="UTF-8"/>
                    <meta name="description" content={description}/>
                    <meta name="keywords" content={keyWords.join(", ")}/>
                    <meta name="author" content="Said Tashmanov - Deveaser"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </Head>
                <>
                    {children}
                </>
            </>
        )
    }

export default MyDocument