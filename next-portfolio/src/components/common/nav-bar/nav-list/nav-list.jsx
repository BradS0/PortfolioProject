import {
    Container,
    Button,
    Menu,
    MenuButton,
    MenuList
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { GoMarkGithub } from "react-icons/go";
import NextLink from 'next/link'

// TODO: Componentise to make this list more efficient
const NavList = () => {
    return (
        <>
        <Container display={['none', 'none', 'flex', 'flex']} m='0' paddingTop='0.4rem'>
            <NextLink href='/projects'>
                <Button
                    size='sm'
                    variant='ghost'
                    marginRight='0.5rem'
                >
                    Projects & Works
                </Button>
            </NextLink>
            <NextLink href='/posts'>
                <Button
                    size='sm'
                    variant='ghost'
                    marginRight='0.5rem'
                >
                    Posts
                </Button>
            </NextLink>
            {/* TODO: Add link to git once public */}
            <NextLink href=''>
                <Button
                    size='sm'
                    variant='ghost'
                    leftIcon={<GoMarkGithub />}
                >
                    Source
                </Button>
            </NextLink>
        </Container>

        <Container display={['flex', 'flex', 'none', 'none']} justifyContent='flex-end' m='0' paddingTop='0.4rem'>
            <Menu>
                <MenuButton
                as={Button}
                variant='ghost' 
                leftIcon={<HamburgerIcon />}/>
                {/* TODO: Finish DropDowns */}
            </Menu>
        </Container>
        </>
    )
}

export default NavList
