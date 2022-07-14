import styles from '../styles/Home.module.css'
import { Container, Text, useColorMode, Button,IconButton, Box, Stack, Spacer, Heading, HStack, Img, Grid, VStack, Center} from '@chakra-ui/react'
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
      <Container textAlign="center" maxHeight="lg" maxWidth="container.xl">
          <Heading>
              Who we are...
          </Heading>
          <Box maxWidth="container.xl" paddingX={{base:'none',md:"72"}} paddingTop={5}>180 Degrees provides socially conscious organizations around the world with very high quality, extremely affordable consulting services. We work with organizations to develop innovative, practical and sustainable solutions to whatever challenges they’re facing.</Box>
      </Container></div>
    </Container>
    <div>
      <Container maxWidth="container.xl" textAlign="center" justifyContent="center">
        <Heading justifyContent="center" paddingY={5}>Our Services</Heading>
        We offer a plethora of services, including but not limited to...
        <Stack flexBasis={5} direction={{base:'column',md:'row'}} maxWidth="container.xl" justifyContent="center" padding={5}>
          <VStack alignContent="center" justifyContent="left"><Box textAlign="center"><Center><Img src="/process_rocket.png"></Img></Center><Heading paddingBottom={5}>Market Research</Heading>We conduct detailed market research, competitor analysis and benchmarking to help our clients gain an in-depth understanding of the sectoral landscape, identify opportunities and navigate challenges.</Box></VStack>
          <VStack alignContent="center" justifyContent="left"><Box textAlign="center"><Center><Img src="/process_rocket.png"></Img></Center><Heading paddingBottom={5}>Branding &amp; Marketing</Heading>We develop innovative branding and marketing campaigns which portray our clients’ work in the best way possible and maximise their reach.</Box></VStack>
          <VStack alignContent="center" justifyContent="left"><Box textAlign="center"><Center><Img src="/process_rocket.png"></Img></Center><Heading paddingBottom={5}>Financial Planning</Heading>We formulate funding, revenue generation and cost-cutting strategies thereby helping our clients build financially sustainable organisations.</Box></VStack>
          <VStack alignContent="center" justifyContent="left"><Box textAlign="center"><Center><Img src="/process_rocket.png"></Img></Center><Heading paddingBottom={5}>Resource Management</Heading>We help our clients attract and retain top talent by devising employee/volunteer recruitment and management strategies.</Box></VStack>
          <VStack alignContent="center" justifyContent="left"><Box textAlign="center"><Center><Img src="/process_rocket.png"></Img></Center><Heading paddingBottom={5}>Process Optimization</Heading>We identify key performance indicators and help our clients optimize business processes to maximize their operational efficiency.</Box></VStack>
        </Stack>
      </Container>
    </div>
    </div>
    </>
  )
}

export default Page