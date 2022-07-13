import { ChakraProvider,CSSReset } from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import { AnimatePresence } from 'framer-motion'
import theme from '../libs/theme'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
//import {  } from '@chakra-ui/core';

function Website({ Component, pageProps,router}) {
  return (
      <ChakraProvider theme={theme} resetCSS={true}>
            <CSSReset/>          
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                <CSSReset/>  
                    <Component {...pageProps} key ={router.route}/>
                    <Navbar/>
                    <Footer/>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
  )
}

export default Website