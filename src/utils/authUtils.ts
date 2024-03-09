import { createAdmin, loginAdmin, logoutAdmin } from '~/apis/auth';
import { ERROR_MESSAGE } from '~/constants/errorMessage';
import {
  removeTokenFromSessionStorage,
  setTokenToSessionStorage,
} from './storage';
import { isValidCredential } from './validators';

export const handleCreateAdmin = async (loginId: string, password: string) => {
  if (isValidCredential(loginId, password)) {
    throw new Error(ERROR_MESSAGE.INVALID_LOGIN);
  }

  await createAdmin(loginId, password);
  alert('관리자 계정이 생성되었습니다.');
};

export const handleLogin = async (loginId: string, password: string) => {
  if (isValidCredential(loginId, password)) {
    throw new Error(ERROR_MESSAGE.INVALID_LOGIN);
  }

  const { accessToken } = await loginAdmin(loginId, password);
  setTokenToSessionStorage(accessToken);
};

export const handleLogout = async () => {
  await logoutAdmin();
  removeTokenFromSessionStorage();
  alert('로그아웃 되었습니다.');
};
