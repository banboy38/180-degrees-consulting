import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Text, useColorMode, Button,IconButton, Box, Stack, Spacer, Heading, HStack, Img, Grid} from '@chakra-ui/react'
import ThemeToggleButton from '../components/theme-toggle-button'
import Navbar from '../components/navbar'
import ImageSlider from '../components/imageslider'
import { ImageSliderData } from '../components/imagesliderdata'
import { Icon } from '@chakra-ui/icons'


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
      <Container paddingTop={10} maxWidth="container.xl" textAlign="center" justifyContent="center">
        <Heading justifyContent="center" paddingBottom={3}>Our Services</Heading>
        We offer a plethora of services, including but not limited to...
        <HStack maxWidth="container.xl" justifyContent="center" padding={5}>
          <Grid alignContent="center"><Box textAlign="center"><Container><Img src="/process_rocket.png"></Img></Container><Heading paddingBottom={5}>Market Research</Heading>We conduct detailed market research, competitor analysis and benchmarking to help our clients gain an in-depth understanding of the sectoral landscape, identify opportunities and navigate challenges.</Box></Grid>
          <Grid alignContent="center"><Box textAlign="center"><Container><Img src="/process_rocket.png"></Img></Container><Heading paddingBottom={5}>Branding &amp; Marketing</Heading>We develop innovative branding and marketing campaigns which portray our clients’ work in the best way possible and maximise their reach.</Box></Grid>
          <Grid alignContent="center"><Box textAlign="center"><Container><Img src="/process_rocket.png"></Img></Container><Heading paddingBottom={5}>Financial Planning</Heading>We formulate funding, revenue generation and cost-cutting strategies thereby helping our clients build financially sustainable organisations.</Box></Grid>
          <Grid alignContent="center"><Box textAlign="center"><Container><Img src="/process_rocket.png"></Img></Container><Heading paddingBottom={5}>Human Resource Management</Heading>We help our clients attract and retain top talent by devising employee/volunteer recruitment and management strategies.</Box></Grid>
          <Grid alignContent="center"><Box textAlign="center"><Container><Img src="/process_rocket.png"></Img></Container><Heading paddingBottom={5}>Process Optimization</Heading>We identify key performance indicators and help our clients optimize business processes to maximize their operational efficiency.</Box></Grid>
        </HStack>
      </Container>
    </div>
    </div>
    </>
  )
}

export default Page