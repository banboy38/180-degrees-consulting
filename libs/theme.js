import {extendTheme,useColorModeValue} from "@chakra-ui/react"
import {mode} from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
            body: {
                bg: mode('#e9ebed','#2f2d31')(props),
                color: mode('#2f2d31', 'fafffd')(props)
            }
            
    })
}
const components = {
    Heading: {
        variants:{
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            },
            'title-heading': props => ({
                color: mode('#3C91E6','#93c420')(props)
            })
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3fc138', '#2F2D31')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    headinf:"'M PLUS Rounded 1c'"
}

const colors = {
    glassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode:false,
}

const theme = extendTheme({
    config, styles, components,
    colors, fonts
})

export default theme
