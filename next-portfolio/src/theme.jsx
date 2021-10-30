import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#F5F7FA', '#171A1C')(props),
        },
        h1: {
          fontSize: '2rem'
        }, 
        h2: {
          fontSize: '1.5rem'
        },
        h3: {
          fontSize: '1.35rem'
        },
        h4: {
          fontSize: '1rem'
        },
        a: {
          fontSize: '1.5rem'
        },
        p: {
          fontSize: '1rem'
        }
    })
}

const components = {
}

const fonts = {

}

const colors = {
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
