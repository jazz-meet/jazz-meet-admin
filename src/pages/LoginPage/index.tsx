import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import JazzMeet from '~/assets/icons/JazzMeet.svg?react';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { PATH } from '~/constants/path';

const ID = 'id';
const PASSWORD = 'password';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate(PATH.SIGN_UP);
  };

  return (
    <StyledLoginPage>
      <StyledFormContainer>
        <JazzMeet />
        <StyledForm>
          <StyledH1>관리자 로그인</StyledH1>
          <label htmlFor={ID}>아이디</label>
          <Input id={ID} type="text" />
          <label htmlFor={PASSWORD}>비밀번호</label>
          <Input id={PASSWORD} type="password" />

          <Button type="submit">로그인</Button>
          <Button type="button" onClick={goToSignUp}>
            회원가입
          </Button>
        </StyledForm>
      </StyledFormContainer>
    </StyledLoginPage>
  );
};

const StyledLoginPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFormContainer = styled.div`
  width: 100%;
  height: 100dvh;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 100%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
