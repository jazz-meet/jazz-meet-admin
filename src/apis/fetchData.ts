import { BASE_URL } from '~/constants/envVariables';
import { getTokenFromSessionStorage } from '~/utils/storage';

export const fetchData = async (path: string, options?: RequestInit) => {
  return fetch(BASE_URL + path, options);
};

export const fetchDataWithToken = async (
  path: string,
  options?: RequestInit,
) => {
  const token = getTokenFromSessionStorage();
  if (!token) {
    throw new Error('Token not found');
  }

  return fetchData(path, {
    credentials: 'include',
    ...options,
    headers: {
      ...options?.headers,
      Authorization: token,
    },
  });
};
