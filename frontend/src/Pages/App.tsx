import { Routes, Route } from 'react-router-dom';
import ProgressionPage from '../Pages/ProgressionPage';
import TypingPage from '../Pages/TypingPage';
import TrainingPage from './TrainingPage';

function App() {
  const routes = [
    { path: '/', element: <ProgressionPage /> },
    {
      path: '/training/:wpm',
      element: <TrainingPage />,
    },
    {
      path: '/typing/:exercise',
      element: <TypingPage />,
    },
    { path: '/progression', element: <ProgressionPage /> },
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
