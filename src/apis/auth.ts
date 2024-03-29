import { LoginAdminResponse } from '~/types/api.types';
import { fetchData, fetchDataWithToken } from './fetchData';

export const createAdmin = async (
  loginId: string,
  password: string,
): Promise<void> => {
  const response = await fetchDataWithToken('/api/admins/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ loginId, password }),
  });

  if (!response.ok) {
    const data = await response.json();

    throw new Error(data.errorMessage);
  }
};

export const loginAdmin = async (
  loginId: string,
  password: string,
): Promise<LoginAdminResponse> => {
  const response = await fetchData('/api/admins/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ loginId, password }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errorMessage);
  }

  return data;
};

export const logoutAdmin = async (): Promise<void> => {
  const response = await fetchDataWithToken('/api/admins/logout', {
    method: 'POST',
  });

  if (!response.ok) {
    const data = await response.json();

    throw new Error(data.errorMessage);
  }
};

export const refreshAdminToken = async (): Promise<string> => {
  const response = await fetchData('/api/admins/reissue', {
    method: 'POST',
    credentials: 'include',
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errorMessage);
  }

  return data.accessToken;
};
