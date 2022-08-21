import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920
    }
  },
  palette: {
    primary: {
      main: '#5F6CAF',
      light: '#e6e6e6',
      dark: '#f0edf7'
    },
    secondary: {
      main: '#5BBFBA',
      dark: '#818182'

    },
    background: {
      main: "#4168c7",
      light: "#40c6c5"
    },
    text: {
      primary: '#121828',
      secondary: '#65748B',
      white: '#FFFFFF',
      orange: "#e4cb89"
    }
  },
  typography: {
    fontFamily: 'Noto Sans, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.375
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.375
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.375
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.375
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.375
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.375
    }
  }
})