import {
    Container,
    Text,
    Box
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import navImage from './/../../../../../public/chimpanzee.jpg'

import 'typeface-roboto'

const NavLogo = () => {
    return (
        // If you want a logo here in the future see {craftz.dog LogoBox component}

        <Container display='flex' justifyContent='flex-start' maxWidth='10rem' paddingY='0' m='0' >
            <Box p='0' m='0' maxHeight='3rem' maxWidth='3rem' borderRadius='4rem' overflow='hidden'>
                <NextLink href='/'>
                    <Image
                        src={navImage}
                        objectFit='cover'
                    />
                </NextLink>
            </Box>

            <Text
                color='gray.800'
                fontFamily="Roboto"
                fontWeight='bold'
                paddingLeft='1rem'
                paddingTop='0.75rem'
            >
                BradSO
            </Text>
        </Container>
    )
}

export default NavLogo
