import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CertificationPage from './pages/certification-page';
import CertificationsPage from './pages/certifications-page';
import TrainingPage from './pages/training-page';
import TypingPage from './pages/typing-page';
import ErrorPage from './pages/error-page';
import darkTheme from './dark-theme';
import TestPage from './pages/test-page';
import MenuPage from './pages/menu-page';
import NotFoundPage from './pages/not-found-page';

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
      path: '/certification/:range',
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
