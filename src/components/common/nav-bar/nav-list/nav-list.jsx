import {
  Container,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { GoMarkGithub } from 'react-icons/go';
import ThemeToggleBtn from '../../theme-toggle-btn/theme-toggle-btn';

// TODO: Map NextLink components, can be used to make these lines a little more efficient!

function NavList() {
  return (
    <>
      <Container display={['none', 'none', 'none', 'flex']} maxW="100%" justifyContent="flex-end" m="0" paddingTop="0.4rem" paddingLeft="0">
        <Link href="/projects">
          <Button
            size="sm"
            variant="ghost"
            marginRight="0.5rem"
            marginTop="0.2rem"
            fontFamily="Quicksand"
          >
            Projects & Works
          </Button>
        </Link>
        {/* <Link href="/posts">
          <Button
            size="sm"
            variant="ghost"
            marginRight="0.5rem"
            marginTop="0.2rem"
            fontFamily="Quicksand"
          >
            Posts
          </Button>
        </Link> */}
        <Link href="https://github.com/BradS0/">
          <Button
            size="sm"
            variant="ghost"
            leftIcon={<GoMarkGithub />}
            marginRight="0.5rem"
            marginTop="0.2rem"
            fontFamily="Quicksand"
          >
            Source
          </Button>
        </Link>
        <Container
          m="0"
          p="0"
          maxWidth="2.5rem"
          display="flex"
          justifyContent="flexEnd"
        >
          <ThemeToggleBtn />
        </Container>
      </Container>
      <Container display={['flex', 'flex', 'flex', 'none']} justifyContent="flex-end" m="0" maxW="100%" paddingTop="0.4rem" px="0.5rem">
        <ThemeToggleBtn />
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                as={Button}
                variant="ghost"
                leftIcon={<HamburgerIcon />}
                rightIcon={<ChevronDownIcon />}
                isActive={isOpen}
                bg={useColorModeValue('secondaryColourLightMode', 'secondaryColourDarkMode')}
                onHover={useColorModeValue('primaryColourLightMode', 'primaryColourDarkMode')}
              />
              <MenuList>
                <Link href="/projects">
                  <MenuItem
                    fontFamily="Quicksand"
                  >
                    Projects & Works
                  </MenuItem>
                </Link>
                {/* <Link href="/posts">
                  <MenuItem
                    fontFamily="Quicksand"
                  >
                    Posts
                  </MenuItem>
                </Link> */}
                <Link href="https://github.com/BradS0/PortfolioProject">
                  <MenuItem
                    fontFamily="Quicksand"
                    icon={<GoMarkGithub />}
                  >
                    Source
                  </MenuItem>
                </Link>
              </MenuList>
            </>
          )}
        </Menu>
      </Container>

    </>
  );
}

export default NavList;
