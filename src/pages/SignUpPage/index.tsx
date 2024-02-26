import styled from '@emotion/styled';
import { useId, useState } from 'react';
import JazzMeet from '~/assets/icons/JazzMeet.svg?react';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import {
  LOGIN_ID_MAX_LENGTH,
  LOGIN_ID_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from '~/constants/auth';
import { handleCreateAdmin } from '~/utils/authUtils';

export const SignUpPage: React.FC = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const id = useId();
  const loginInputId = id + 'id';
  const passwordInputId = id + 'password';

  const handleLoginIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginId(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await handleCreateAdmin(loginId, password);
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
          <StyledH1>관리자 계정 생성</StyledH1>
          <label htmlFor={loginInputId}>아이디</label>
          <Input
            id={loginInputId}
            type="text"
            minLength={LOGIN_ID_MIN_LENGTH}
            maxLength={LOGIN_ID_MAX_LENGTH}
            onChange={handleLoginIdChange}
          />
          <label htmlFor={passwordInputId}>비밀번호</label>
          <Input
            id={passwordInputId}
            type="password"
            minLength={PASSWORD_MIN_LENGTH}
            maxLength={PASSWORD_MAX_LENGTH}
            onChange={handlePasswordChange}
          />

          <Button type="submit" disabled={!loginId || !password}>
            관리자 계정 생성
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
