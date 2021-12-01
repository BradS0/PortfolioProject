import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'


const MainLayout = ({ children }) => {
    return (
        <Box as='main' display='inline-flex' height='100%' width='100%'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="A web portfolio" />
                <meta name="author" content="Bradley Onyett" />
                <title>Bradley Onyett - Portfolio</title>
            </Head>

            {/* Navbar here probably */}

            <Container display='flex' flexDirection='column' p='0' m='0' maxW='100%' >

                {children}
            
            </Container>
        </Box>
    )
}

export default MainLayout
