import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const BaseLayout: React.FC = () => {
  return (
    <StyledLayout>
      <Sidebar />
      <StyledOutletWrapper>
        <Outlet />
      </StyledOutletWrapper>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  height: 100vh;
  overflow-y: auto;
  display: flex;
`;

const StyledOutletWrapper = styled.div`
  width: calc(100% - var(--sidebar-width));
`;
