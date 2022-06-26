import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import { AnimatePresence } from 'framer-motion'
import theme from '../libs/theme'

function Website({ Component, pageProps,router}) {
  return (
    <ChakraProvider theme={theme}>
            
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key ={router.route}/>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
  )
}

export default Website