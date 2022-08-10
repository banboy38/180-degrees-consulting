import { Box, Container } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Head from 'next/head'

const variants = {
    hidden:{ opacity : 0, x:0, y:20},
    enter: {opacity: 1, x:0, y:0},
    exit: {opacity:0, x:0,y:20}
}

const Layout = ({children,title}) => (
    <motion.article
        initial="hidden" 
        animate="enter" 
        exit="exit" 
        variants={variants} 
        transition={{duration:0.4, type: 'easeInOut'}} 
        style={{position:'relative'}}>
            <>
                {title && 
                (<Head>
                    <title>180DC BITM - {title}</title>
                 </Head>
                )}
                <Box marginRight={{base:'none',md:'22'}}><Container paddingBottom={2} maxWidth="container.md" borderRadius={10} padding={0}>{children}</Container></Box>
            </>
    </motion.article>
)

export default Layout