import styled from '@emotion/styled';
import CommentIcon from '@mui/icons-material/Comment';
import PianoIcon from '@mui/icons-material/Piano';
import PlaceIcon from '@mui/icons-material/Place';
import { Link } from 'react-router-dom';
import JazzMeet from '~/assets/icons/JazzMeet.svg?react';
import { SidebarItem } from './SidebarItem';

export const Sidebar: React.FC = () => {
  return (
    <StyledSideBar>
      <StyledLink to="/">
        <JazzMeet />
      </StyledLink>
      <SidebarItem linkTo="/venues" Icon={PlaceIcon} text="공연장" />
      <SidebarItem linkTo="/shows" Icon={PianoIcon} text="공연" />
      <SidebarItem linkTo="/inquiries" Icon={CommentIcon} text="문의" />
    </StyledSideBar>
  );
};

const StyledSideBar = styled.div`
  min-width: 230px;
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
