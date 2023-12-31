import { extendTheme } from '@chakra-ui/react';
import { mode, createBreakpoints } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#9CCE7120', '#353941')(props),
    },
  }),
};

const components = {

};

const fonts = {

};

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
});

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
  config, styles, components, fonts, breakpoints, colors,
});
export default theme;
