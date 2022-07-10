import {
  Container,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { GoMarkGithub } from 'react-icons/go';
import NextLink from 'next/link';
import ThemeToggleBtn from '../../theme-toggle-btn/theme-toggle-btn';

// TODO: Map NextLink components, can be used to make these lines a little more efficient!

function NavList() {
  return (
    <>
      <Container display={['none', 'none', 'flex', 'flex']} m="0" paddingTop="0.4rem" paddingLeft="0">
        <NextLink href="/projects">
          <Button
            size="sm"
            variant="ghost"
            marginRight="0.5rem"
            marginTop="0.2rem"
            fontFamily="Quicksand"
          >
            Projects & Works
          </Button>
        </NextLink>
        <NextLink href="/posts">
          <Button
            size="sm"
            variant="ghost"
            marginRight="0.5rem"
            marginTop="0.2rem"
            fontFamily="Quicksand"
          >
            Posts
          </Button>
        </NextLink>
        {/* TODO: Add link to git once public */}
        <NextLink href="">
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
        </NextLink>

        <ThemeToggleBtn
          justifyContent="flexEnd"
        />
      </Container>
      <Container display={['flex', 'flex', 'none', 'none']} justifyContent="flex-end" m="0" paddingTop="0.4rem" px="0.5rem">
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
                <MenuItem
                  fontFamily="Quicksand"
                >
                  Projects & Works
                </MenuItem>
                <MenuItem
                  fontFamily="Quicksand"
                >
                  Posts
                </MenuItem>
                <MenuItem
                  fontFamily="Quicksand"
                  icon={<GoMarkGithub />}
                >
                  Source
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Container>

    </>
  );
}

export default NavList;
