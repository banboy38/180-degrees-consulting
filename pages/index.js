import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Text, useColorMode, Button,IconButton} from '@chakra-ui/react'
import ThemeToggleButton from '../components/theme-toggle-button'
import Navbar from '../components/navbar'
const Page = () => {
  return (
    <>
      <Container>
        <Navbar/>
      </Container>
    </>
  )
}

export default Page