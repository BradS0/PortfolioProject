import { MdLightMode, MdDarkMode } from 'react-icons/md';
import React from 'react';
import { useColorModeValue, useColorMode, IconButton } from '@chakra-ui/react';

function ThemeToggleBtn() {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      marginRight={['0.5rem', '0.5rem', '0.5rem', '0']}
      aria-label="Toggle theme"
      bg={useColorModeValue('secondaryColourLightMode', 'secondaryColourDarkMode')}
      onHover={useColorModeValue('primaryColourLightMode', 'primaryColourDarkMode')}
      icon={useColorModeValue(<MdLightMode />, <MdDarkMode />)}
      onClick={toggleColorMode}
    />

  );
}

export default ThemeToggleBtn;
