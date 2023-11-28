import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const BaseLayout: React.FC = () => {
  return (
    <StyledLayout>
      <Sidebar />
      <Outlet />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: auto;
`;
