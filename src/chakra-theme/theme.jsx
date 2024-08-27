import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark', // Set dark mode as the initial color mode
  useSystemColorMode: false, // Disable the system color mode preference
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode('gray.50', 'gray.900')(props), // Example body background colors
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
