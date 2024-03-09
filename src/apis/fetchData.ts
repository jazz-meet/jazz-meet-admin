import { BASE_URL } from '~/constants/envVariables';
import { ERROR_MESSAGE } from '~/constants/errorMessage';
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
    throw new Error(ERROR_MESSAGE.TOKEN_NOT_FOUND);
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
