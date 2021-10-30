import {
    Container,
    Text,
    useColourModeValue
} from '@chakra-ui/react'
import 'typeface-roboto'

import styled from '@emotion/styled'

const NavLogo = () => {
    return (
        // If you want a logo here in the future see {craftz.dog LogoBox component}

        <Container>
            <Text
            color='gray.800'
            fontFamily="Roboto"
            fontWeight='bold'
            >
                Bradley Onyett
            </Text>
        </Container>
    )
}

export default NavLogo
