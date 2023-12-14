import { Global } from '@emotion/react';
import { Router } from './Router';
import { globalStyles } from './styles/globalStyles';

export const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Router />
    </>
  );
};
