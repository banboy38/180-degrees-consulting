import {
  Box,
  Flex,
  Img,
  VStack,
  Link,
  IconButton,
  Button,
  Menu,
  Spacer,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import {logoIcon} from './logo.png'
import ThemeToggleButton from './theme-toggle-button';
import NextLink from 'next/link'


const LinkItem = ({ href, path, children}) =>{
  const active = path === href
  const inactiveColor = useColorModeValue('gray2000, whiteAlpha.900')
  return(
      <NextLink href={href}>
          <Link px={2} py={1} rounded={'md'}>
              {children}
          </Link>
      </NextLink>
  )
}

const Links = ['Dashboard', 'Projects', 'Team'];

const Navbar = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const path = props
  return (
    <>
      <Flex display={{base:'none',md:"flex"}} zIndex={5} m={0} p={0} bg={useColorModeValue("#2f2d31","#93C420")} direction={{base:'column',md:'row'}} position="fixed" top="0" right="0" h="100%">
      {/* <Image w="200px" h="60px" src="./logo.png" alt='logo'/> */}
        <VStack m={0} p={0} justifyContent="space-around" gap={2} paddingY={10} spacing="2em">   
          <Container m={0} p={0} transform="rotate(90deg)"><LinkItem href="/" path={path}>HOME</LinkItem></Container>  
          <Container m={0} p={0} transform="rotate(90deg)"><LinkItem href="/about" path={path}>ABOUT</LinkItem></Container>
          <Container m={0} p={0} transform="rotate(90deg)"><LinkItem href="/contact" path={path}>CONTACT</LinkItem></Container>
          <Container m={0} p={0} transform="rotate(90deg)"><LinkItem href="/works" path={path}>TEAM</LinkItem></Container>
          <ThemeToggleButton/>
     
        </VStack>
      </Flex>
    </>
  );
}

export default Navbar