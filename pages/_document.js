import {ColorModeScript} from "@chakra-ui/react"
import NextDocument,{Html,Head,NextScript,Main} from "next/document"
import theme from "../libs/theme"
//import Main from "/components/layouts/main"

export default class Document extends NextDocument {
    render(){

      return(
        <Html lang="en">
            <Head>
            <style href="/dist/output.css" rel="stylesheet"/>
            
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <title>180DC - BIT Mesra</title>
            </Head>
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <Main/>
                <NextScript/>
            </body>
        </Html>
        )
    }
}
