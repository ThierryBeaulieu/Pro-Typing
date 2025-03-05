import { Routes, Route } from 'react-router-dom';
import CertificationPage from './Pages/CertificationsPage';
import TypingPage from './Pages/TypingPage';
import TrainingPage from './Pages/TrainingPage';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ErrorPage from './Pages/ErrorPage';
import darkTheme from './DarkTheme';
import CertificationsPage from './Pages/CertificationsPage';

function App() {
  const routes = [
    { path: '*', element: <ErrorPage /> },
    { path: '/', element: <CertificationsPage /> },
    {
      path: '/training/:wpm',
      element: <TrainingPage />,
    },
    {
      path: '/certification/:wpm',
      element: <CertificationPage />,
    },
    {
      path: '/typing/:exercise',
      element: <TypingPage />,
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
