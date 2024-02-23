import { createAdmin, logoutAdmin } from '~/apis/auth';
import {
  LOGIN_ID_MAX_LENGTH,
  LOGIN_ID_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from '~/constants/auth';
import { ERROR_MESSAGE } from '~/constants/errorMessage';
import {
  getTokenFromSessionStorage,
  removeTokenFromSessionStorage,
} from './storage';
import { isLengthValid } from './validators';

export const handleCreateAdmin = async (loginId: string, password: string) => {
  try {
    if (
      !isLengthValid(loginId, LOGIN_ID_MIN_LENGTH, LOGIN_ID_MAX_LENGTH) ||
      !isLengthValid(password, PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH)
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_LOGIN);
    }

    const token = getTokenFromSessionStorage();
    await createAdmin(loginId, password, token);
    alert('관리자 계정이 생성되었습니다.');
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }
};

export const handleLogout = async () => {
  try {
    const token = getTokenFromSessionStorage();
    await logoutAdmin(token);
    alert('로그아웃 되었습니다.');
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  } finally {
    removeTokenFromSessionStorage();
  }
};
