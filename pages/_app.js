import { ChakraProvider,CSSReset } from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import { AnimatePresence } from 'framer-motion'
import theme from '../libs/theme'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Header from "../components/header"
import Head from "next/head"
import Router from "next/router"
//import {  } from '@chakra-ui/core';

function Website({ Component, pageProps,router}) {
  return (
      <ChakraProvider theme={theme} resetCSS={true}>
        <Head>
        <style href="/styles/globals.css" rel="stylesheet"/>
            
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <title>180DC - BIT Mesra</title>
        </Head>
            <Layout router={Router}>
                <AnimatePresence exitBeforeEnter initial={true}> 
                    <Header/>
                    <Navbar path={router.asPath}/>
                    <Component {...pageProps}/>
                    <Footer/>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
  )
}

export default Website