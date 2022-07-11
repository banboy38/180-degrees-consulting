import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Text, useColorMode, Button,IconButton, Box, Stack, Spacer, Heading, HStack} from '@chakra-ui/react'
import ThemeToggleButton from '../components/theme-toggle-button'
import Navbar from '../components/navbar'
import ImageSlider from '../components/imageslider'
import { ImageSliderData } from '../components/imagesliderdata'
const Page = () => {
  return (
    <>
    <div>
    <Container maxWidth="100%">
    <div>
    <ImageSlider slides={ImageSliderData}/>
    </div>
    
    <div>
      <Container maxHeight="lg" maxWidth="container.xl">
          <Heading>
              Who we are...
          </Heading>
          <Box maxWidth="container.md" paddingTop={5}>180 Degrees provides socially conscious organizations around the world with very high quality, extremely affordable consulting services. We work with organizations to develop innovative, practical and sustainable solutions to whatever challenges they’re facing.</Box>
      </Container></div>
    </Container>
    <div>
      <Container paddingTop={10} maxWidth="container.xl">
        <Heading justifyContent="center">Our Services</Heading>
        <HStack maxWidth="container.xl" justifyContent="space-around" paddingTop={5}><Box>Hi</Box><Box>Hello</Box><Box>Namaste</Box><Box>Pranam</Box></HStack>
      </Container>
    </div>
    </div>
    </>
  )
}

export default Page