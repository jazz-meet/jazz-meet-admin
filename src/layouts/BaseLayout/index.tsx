import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const BaseLayout: React.FC = () => {
  return (
    <StyledLayout>
      <Sidebar />
      <StyledOutletWrapper>
        <Header />
        <Outlet />
      </StyledOutletWrapper>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  display: flex;
`;

const StyledOutletWrapper = styled.div`
  width: 100%;
`;
