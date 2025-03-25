import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#9CCE7120', '#353941')(props),
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      _focus: {
        boxShadow: 'none',
      },
    },
  },
  Link: {
    baseStyle: {
      _focus: {
        boxShadow: 'none',
      },
    },
  },
};

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
};

const colors = {
  primaryColourLightMode: '#9CCE7120',
  secondaryColourLightMode: '#9CCE7185',
  tertiaryColourLightMode: '#3F72AF',
  quaternaryColourLightMode: '#112D4E',

  primaryColourDarkMode: '#525252',
  secondaryColourDarkMode: '#414141',
  tertiaryColourDarkMode: '#313131',
  quaternaryColourDarkMode: '#CA3E47',
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components,
  breakpoints,
  colors,
});

export default theme;
