import {extendTheme,useColorModeValue} from "@chakra-ui/react"
import {mode} from '@chakra-ui/theme-tools';
const styles = {
    global: props => ({
            body: {
                bg: mode('#e9ebed','#295d09')(props)
            }
    })
}
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({config,styles})

export default theme