import styled from '@emotion/styled';
import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path !== '');

  return (
    <StyledHeader>
      <Link to="/">{'홈'}</Link>
      {paths.map(
        (path, index) =>
          path in pathNameMapping && (
            <Fragment key={`${path + index}`}>
              <div>{'>'}</div>
              <Link to={path}>{pathNameMapping[path]}</Link>
            </Fragment>
          ),
      )}
    </StyledHeader>
  );
};

const pathNameMapping: {
  [key: string]: string;
} = {
  venues: '공연장',
  shows: '공연',
  inquiries: '문의',
  post: '생성',
  edit: '수정',
};

const StyledHeader = styled.div`
  border-bottom: 1px solid #000000;
  font-size: 24px;
  padding: 20px;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  display: flex;
  gap: 10px;

  a {
    text-decoration: none;
    color: #000000;
  }
`;
