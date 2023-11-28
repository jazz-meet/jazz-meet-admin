import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(<Route></Route>));

export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
