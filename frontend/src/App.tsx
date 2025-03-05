import { Routes, Route } from 'react-router-dom';
import CertificationPage from './Pages/CertificationPage';
import TypingPage from './Pages/TypingPage';
import TrainingPage from './Pages/TrainingPage';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ErrorPage from './Pages/ErrorPage';
import darkTheme from './DarkTheme';

function App() {
  const routes = [
    { path: '*', element: <ErrorPage /> },
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
