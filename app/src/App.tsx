import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CertificationPage from './Pages/CertificationPage';
import CertificationsPage from './Pages/CertificationsPage';
import TrainingPage from './Pages/TrainingPage';
import TypingPage from './Pages/TypingPage';
import ErrorPage from './Pages/ErrorPage';
import darkTheme from './DarkTheme';
import TestPage from './Pages/TestPage';
import MenuPage from './Pages/MenuPage';
import NotFoundPage from './Pages/NotFoundPage';

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
