import { Routes, Route } from 'react-router-dom';
import CertificationPage from './CertificationPage';
import TypingPage from '../Pages/TypingPage';
import TrainingPage from './TrainingPage';

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
    <Routes>
      {routes.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
}

export default App;
