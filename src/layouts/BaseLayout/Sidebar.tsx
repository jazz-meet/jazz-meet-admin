import styled from '@emotion/styled';
import CommentIcon from '@mui/icons-material/Comment';
import LogoutIcon from '@mui/icons-material/Logout';
import PianoIcon from '@mui/icons-material/Piano';
import PlaceIcon from '@mui/icons-material/Place';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Link, useNavigate } from 'react-router-dom';
import JazzMeet from '~/assets/icons/JazzMeet.svg?react';
import { PATH } from '~/constants/path';
import { handleLogout } from '~/utils/authUtils';
import { SidebarItem } from './SidebarItem';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const onLogoutClick = async () => {
    try {
      await handleLogout();
      navigate(PATH.LOGIN);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

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
      <SidebarItem
        linkTo={PATH.LOGIN}
        Icon={LogoutIcon}
        text="로그아웃"
        onClick={onLogoutClick}
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
