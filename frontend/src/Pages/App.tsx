import { Routes, Route } from 'react-router-dom';
import CertificationPage from './CertificationPage';
import TypingPage from '../Pages/TypingPage';
import TrainingPage from './TrainingPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

function App() {
  const routes = [
    { path: '/', element: <CertificationPage /> },
    {
      path: '/training/:wpm',
      element: <TrainingPage />,
    },
    {
      path: '/typing/:exercise',
      element: <TypingPage />,
    },
    { path: '/progression', element: <CertificationPage /> },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
