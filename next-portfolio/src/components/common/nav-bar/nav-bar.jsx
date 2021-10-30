import { Container } from '@chakra-ui/react'
import NavLogo from './nav-logo/nav-logo'

const NavBar = () => {
    return (
        <Container minWidth='100%' minHeight='3rem' bg='lightgray' m='0' display='inline-flex'>
            <NavLogo />
        </Container>
    )
}

export default NavBar
