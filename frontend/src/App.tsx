import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CertificationPage from './pages/CertificationPage';
import CertificationsPage from './pages/CertificationsPage';
import TrainingPage from './pages/TrainingPage';
import TypingPage from './pages/TypingPage';
import ErrorPage from './pages/ErrorPage';
import darkTheme from './DarkTheme';
import TestPage from './pages/TestPage';
import MenuPage from './pages/MenuPage';

function App() {
  const routes = [
    { path: '*', element: <ErrorPage /> },
    { path: '/', element: <MenuPage /> },
    {
      path: '/training/:wpm',
      element: <TrainingPage />,
    },
    {
      path: '/certifications/',
      element: <CertificationsPage />,
    },
    {
      path: '/certification/',
      element: <CertificationPage />,
    },
    {
      path: '/typing/:exercise',
      element: <TypingPage />,
    },
    {
      path: '/test',
      element: <TestPage />,
    },
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
