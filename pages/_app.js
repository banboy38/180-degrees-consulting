import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import { AnimatePresence } from 'framer-motion'
import theme from '../libs/theme'
import Navbar from "../components/navbar"

function Website({ Component, pageProps,router}) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
            
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key ={router.route}/>
                    <Navbar/>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
  )
}

export default Website