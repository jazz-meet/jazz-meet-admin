import { BASE_URL } from '~/constants/envVariables';

export const fetchData = async (path: string, options?: RequestInit) => {
  return fetch(BASE_URL + path, options);
};
