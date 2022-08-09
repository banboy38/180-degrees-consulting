import { Container,Flex, Text, useColorMode, Button,IconButton, Box, Stack, Spacer, Heading, HStack, Img, Grid,GridItem, VStack, Center} from '@chakra-ui/react'
import ImageSlider from '../components/imageslider'
import { ImageSliderData } from '../components/imagesliderdata'



const Page = () => {
  return (
    <>
    <Container maxWidth="container.xl">
    <Container maxWidth="container.md">
    
    <ImageSlider slides={ImageSliderData}/>
    
    
      <Container textAlign="center" maxHeight="lg" maxWidth="container.lg">
          <Heading>
              Who we are...
          </Heading>
          <Box maxWidth="container.lg" paddingX={{base:'none',md:"32"}} paddingTop={5}>
              <Box>Birla Institute of Technology, Mesra, is one of the country's most prestigious and acclaimed educational universities. It was founded and established by the ingenious industrialist, B.M. Birla over more than six decades ago and has been creating ripples of success ever since. It has churned out professionals in various fields: both technological and cultural. The university has one of the strongest alumni bases of any college in the eastern zone. The institute has always centred its focus on the welfare of its students and accordingly taken action for their nurture and education.</Box>
              <Spacer/>
              <Container>BIT Mesra had been conceived with a vision to be recognized as a world-class learning institution for engineering and technology. Now, it has moved beyond the fulfilment of a scholastic promise to re-defining education in the new age through the creation of aptitude and comprehensive intelligence.</Container>
          </Box>
      </Container>
    </Container>
    <div>
      <Container maxWidth="container.md" textAlign="center" justifyContent="center">
        <Heading justifyContent="center" paddingY={5}>Our Services</Heading>
        We offer a plethora of services, including but not limited to...
        <Grid templateColumns='repeat(2, 1fr)' direction={{base:'column',md:'row'}} gap={8} maxWidth="container.md" justifyContent="center" padding={5}>
          <GridItem alignContent="top"><Box textAlign="center"><Center><Img src="/process_rocket.png"></Img></Center><Heading paddingBottom={5} >Market Research</Heading>We conduct detailed market research, competitor analysis and benchmarking to help our clients gain an in-depth understanding of the sectoral landscape, identify opportunities and navigate challenges.</Box></GridItem>
        
          <GridItem alignContent="top"><Box textAlign="center"><Center><Img src="/process_rocket.png"></Img></Center><Heading paddingBottom={5} >Branding &amp; Marketing</Heading>We develop innovative branding and marketing campaigns which portray our clients’ work in the best way possible and maximise their reach.</Box></GridItem>
     
          <GridItem alignContent="top"><Box textAlign="center"><Center><Img src="/process_rocket.png"></Img></Center><Heading paddingBottom={5} >Resource Management</Heading>We help our clients attract and retain top talent by devising employee/volunteer recruitment and management strategies.</Box></GridItem>
      
          <GridItem alignContent="top"><Box textAlign="center"><Center><Img src="/process_rocket.png"></Img></Center><Heading paddingBottom={5} >Process Optimization</Heading>We identify key performance indicators and help our clients optimize business processes to maximize their operational efficiency.</Box></GridItem>
          
          <GridItem alignContent="top"><Box textAlign="center"><Center><Img src="/process_rocket.png"></Img></Center><Heading paddingBottom={5} >Financial Planning</Heading>We formulate funding, revenue generation and cost-cutting strategies thereby helping our clients build financially sustainable organisations.</Box></GridItem>
          
        </Grid>

      </Container>
    </div>
    </Container>
    </>
  )
}

export default Page