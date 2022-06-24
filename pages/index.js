import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Text, useColorMode, Button,IconButton} from '@chakra-ui/react'
import ThemeToggleButton from '../components/theme-toggle-button'
const Page = () => {
  return (
    <>
      <Container>
        <ThemeToggleButton/>
      </Container>
    </>
  )
}

export default Page