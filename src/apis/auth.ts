import { LoginAdminResponse } from '~/types/api.types';
import { fetchData } from './fetchData';

export const createAdmin = async (
  loginId: string,
  password: string,
  token: string,
): Promise<void> => {
  const response = await fetchData('/api/admins/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: JSON.stringify({ token }),
    },
    body: JSON.stringify({ loginId, password }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.errorMessage);
  }

  return;
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
    body: JSON.stringify({ loginId, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errorMessage);
  }

  return data;
};

export const logoutAdmin = async (token: string): Promise<void> => {
  const response = await fetchData('/api/admins/logout', {
    method: 'POST',
    headers: {
      Authorization: JSON.stringify({ token }),
    },
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.errorMessage);
  }

  return;
};
