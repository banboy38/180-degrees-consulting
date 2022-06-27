import Head  from 'next/head'
import { Box,Container } from '@chakra-ui/react'
import Navbar from '/components/navbar.js'


const Main = ({children,router}) => {
    return(
        <>
            <Box as="main" pb={8}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <title>180DC - BIT Mesra</title>
                </Head>
                <Navbar path={router.asPath}/>
                <Container>
                    {children}
                </Container>
            </Box>
        </>
    )
}