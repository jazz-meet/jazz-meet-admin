import styled from '@emotion/styled';
import { useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JazzMeet from '~/assets/icons/JazzMeet.svg?react';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import {
  LOGIN_ID_MAX_LENGTH,
  LOGIN_ID_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from '~/constants/auth';
import { PATH } from '~/constants/path';
import { handleLogin } from '~/utils/authUtils';

export const LoginPage: React.FC = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const id = useId();
  const loginInputId = id + 'loginId';
  const passwordInputId = id + 'password';

  const onChangeLoginId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginId(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await handleLogin(loginId, password);
      navigate(PATH.HOME);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <StyledLoginPage>
      <StyledFormContainer>
        <JazzMeet />
        <StyledForm onSubmit={onSubmit}>
          <StyledH1>관리자 로그인</StyledH1>
          <label htmlFor={loginInputId}>아이디</label>
          <Input
            id={loginInputId}
            type="text"
            minLength={LOGIN_ID_MIN_LENGTH}
            maxLength={LOGIN_ID_MAX_LENGTH}
            value={loginId}
            onChange={onChangeLoginId}
          />
          <label htmlFor={passwordInputId}>비밀번호</label>
          <Input
            id={passwordInputId}
            type="password"
            minLength={PASSWORD_MIN_LENGTH}
            maxLength={PASSWORD_MAX_LENGTH}
            value={password}
            onChange={onChangePassword}
          />

          <Button type="submit" disabled={!loginId || !password}>
            로그인
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
