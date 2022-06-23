import {extendTheme,useColorModeValue} from "@chakra-ui/react"

const styles = {
    global: props => ({
            body: {
                bg: mode('#a1a1a1','#202024')(props)
            }
    })
}
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({config,styles})

export default theme