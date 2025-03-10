import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#242424',
      paper: '#333333',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#FFD700',
    },
  },
});

export default darkTheme;
