import styled from '@emotion/styled';
import CommentIcon from '@mui/icons-material/Comment';
import PianoIcon from '@mui/icons-material/Piano';
import PlaceIcon from '@mui/icons-material/Place';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Link } from 'react-router-dom';
import JazzMeet from '~/assets/icons/JazzMeet.svg?react';
import { PATH } from '~/constants/path';
import { SidebarItem } from './SidebarItem';

export const Sidebar: React.FC = () => {
  return (
    <StyledSideBar>
      <StyledLink to="/">
        <JazzMeet />
      </StyledLink>
      <SidebarItem linkTo={PATH.VENUES} Icon={PlaceIcon} text="공연장" />
      <SidebarItem linkTo={PATH.SHOWS} Icon={PianoIcon} text="공연" />
      <SidebarItem linkTo={PATH.INQUIRIES} Icon={CommentIcon} text="문의" />
      <SidebarItem
        linkTo={PATH.SIGN_UP}
        Icon={SupervisorAccountIcon}
        text="관리자 계정 생성"
      />
    </StyledSideBar>
  );
};

const StyledSideBar = styled.div`
  min-width: var(--sidebar-width);
  border-right: 1px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: sticky;
  top: 0px;
`;

const StyledLink = styled(Link)`
  width: 100%;
  border-bottom: 1px solid #000000;
`;
