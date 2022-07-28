import {ColorModeScript} from "@chakra-ui/react"
import NextDocument,{Html,Head,NextScript,Main} from "next/document"
import theme from "../libs/theme"
//import Main from "/components/layouts/main"

export default class Document extends NextDocument {
    render(){

      return(
        <Html lang="en">
            <Head>
      
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
