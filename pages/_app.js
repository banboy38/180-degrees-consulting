import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import { AnimatePresence } from 'framer-motion'
import theme from '../libs/theme'
import Router from "next/dist/server/router"

function Website({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
            
            <Layout router={Router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key = {Router.route}/>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
  )
}

export default Website