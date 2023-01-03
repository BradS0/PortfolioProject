import { Container, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import NavList from './nav-list/nav-list';
import NavLogo from './nav-logo/nav-logo';

// TODO: Fix being able to scroll right when in reduced view (but not in mobile view).

function NavBar() {
  return (
    <Container
      minWidth="100%"
      minHeight="3rem"
      background={useColorModeValue('secondaryColourLightMode', 'tertiaryColourDarkMode')}
      m="0"
      paddingX="0"
      paddingY="0.25rem"
      display="inline-flex"
    >
      <NavLogo />
      <NavList />
    </Container>
  );
}

export default NavBar;
