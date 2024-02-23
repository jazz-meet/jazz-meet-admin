import { logoutAdmin } from '~/apis/auth';
import {
  getTokenFromSessionStorage,
  removeTokenFromSessionStorage,
} from './storage';

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
