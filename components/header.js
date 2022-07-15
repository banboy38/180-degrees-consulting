import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    Img,
    Link,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiMenu } from 'react-icons/fi'
  
  export const Header = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
      <Box as="section" pb={{ base: '12', md: '24' }} >
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
          <Container py={{ base: '4', lg: '5' }}>
            <HStack spacing="10" justify="space-between">
        
              
                <Flex justify="center" flex="1" gap={3}>
                <Link href="/"><Img src='/logo.png' alt='logo'></Img></Link>
                </Flex>
              
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }
  

export default Header