import { extendTheme } from 'native-base';

const theme = extendTheme({
  config: {
    initialColorMode: 'light', 
    useSystemColorMode: true, 
  },
  colors: {
    light: {
      background: {
        50: "#e6f0ff",
        100: "#b3d4ff",
      },
      text: {
        50: "black",
      },
    },
    dark: {
      background: {
        900: "#1a202c",
      },
      text: {
        50: "white",
      },
    },
    primary: {
      500: '#0073e6',
      600: '#0066cc',
    },
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'md',
      },
    },
    Input: {
      defaultProps: {
        variant: 'underlined',
      },
    },
  },
});

export default theme;