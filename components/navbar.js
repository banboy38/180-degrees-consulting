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




const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'/'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
    
  return (
    <>
      <Flex m={0} p={0} bg={useColorModeValue("gray.800","gray.900")} direction={{base:'column',md:'row'}} position="fixed" top="0" right="0" h="100%">
      {/* <Image w="200px" h="60px" src="./logo.png" alt='logo'/> */}
        <VStack m={0} p={0} justifyContent="left" gap={2} spacing="2em">
          <Spacer/>        
          <Container m={0} p={0} transform="rotate(90deg)"><NavLink m={0} p={0}>DASHBOARD</NavLink></Container><Spacer/>
          <Container m={0} p={0} transform="rotate(90deg)"><NavLink m={0} p={0}>TEAM</NavLink></Container><Spacer/>
          <Container m={0} p={0} transform="rotate(90deg)"><NavLink m={0} p={0}>PROJECTS</NavLink></Container><Spacer/>
          <ThemeToggleButton/><Spacer/>
        </VStack>
      </Flex>
    </>
  );
}

