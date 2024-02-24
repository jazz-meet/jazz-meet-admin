import { Navigate, Outlet } from 'react-router-dom';
import { PATH } from '~/constants/path';
import { getTokenFromSessionStorage } from '~/utils/storage';

export const PrivateRoutes = () => {
  const token = getTokenFromSessionStorage();

  return token ? <Outlet /> : <Navigate to={PATH.LOGIN} />;
};
