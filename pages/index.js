import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Text, useColorMode, Button,IconButton, Box} from '@chakra-ui/react'
import ThemeToggleButton from '../components/theme-toggle-button'
import Navbar from '../components/navbar'
const Page = () => {
  return (
    <>
    <Box><Navbar/></Box>      
    </>
  )
}

export default Page