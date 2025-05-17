import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CertificationPage from './pages/CertificationPage/CertificationPage';
import CertificationsPage from './pages/CertificationsPage/CertificationsPage';
import TrainingPage from './pages/TrainingPage/TrainingPage';
import TypingPage from './pages/TypingPage/TypingPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import darkTheme from './utils/DarkTheme';
import TestPage from './pages/TestPage/TestPage';
import MenuPage from './pages/LandingPage/LandingPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  const routes = [
    { path: '*', element: <NotFoundPage /> },
    { path: '/', element: <MenuPage /> },
    { path: '/error', element: <ErrorPage /> },
    {
      path: '/training/',
      element: <TrainingPage />,
    },
    {
      path: '/certifications/',
      element: <CertificationsPage />,
    },
    {
      path: '/certification/:certificationID',
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
