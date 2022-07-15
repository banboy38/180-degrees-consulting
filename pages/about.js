import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Text, useColorMode, Button,IconButton, Box, Stack, Spacer, Heading, HStack, Img, Grid} from '@chakra-ui/react'
import ThemeToggleButton from '../components/theme-toggle-button'
import Navbar from '../components/navbar'
import ImageSlider from '../components/imageslider'
import { ImageSliderData } from '../components/imagesliderdata'
import { Icon } from '@chakra-ui/icons'


const About = () => {
    return(
        <>
            <Container paddingTop={32} paddingBottom={5} maxWidth="container.xl" bg="whiteAlpha.50">
                <Box paddingBottom={5} textAlign="center"><Heading>ABOUT US</Heading></Box>

                <Box borderRadius={8} maxWidth="100%" bg='blackAlpha.500' ht={5} paddingTop={8}>
                    <Heading><Container textAlign="center">Mission and Vision</Container></Heading>
                    <Container maxWidth="100%">
                        <HStack padding={10} maxWidth="100%" justifyContent="space-around" gap={2}>
                            <Container paddingBottom={5} borderRadius={5} bg="whiteAlpha.400" textAlign="center"><Heading paddingBottom={4} size="lg">MISSION</Heading>
                                <Box>To help non-profits and social enterprises overcome challenges for the greatest possible social impact by providing affordable and high quality consulting services.</Box>
                            </Container>
                            <Container paddingBottom={5} borderRadius={5} bg="whiteAlpha.400" textAlign="center"><Heading paddingBottom={4} size="lg">VISION</Heading>
                                <Box>To ensure that the movement towards resolving pressing world issues such as poverty, global warming, etc. is unfettered by constraints and thereby develop the next generation of leaders.</Box>
                            </Container>
                        </HStack>
                    </Container>
                </Box>
            </Container>
        
        </>
    )
}

export default About