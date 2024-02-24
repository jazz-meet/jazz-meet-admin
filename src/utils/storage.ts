const SESSION_STORAGE_KEYS = {
  TOKEN: 'token',
};

const setSessionStorage = (key: string, value: string) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const setTokenToSessionStorage = (token: string) => {
  setSessionStorage(SESSION_STORAGE_KEYS.TOKEN, 'Bearer ' + token);
};

export const getTokenFromSessionStorage = () => {
  const token = sessionStorage.getItem(SESSION_STORAGE_KEYS.TOKEN);

  return token ? JSON.parse(token) : null;
};

export const removeTokenFromSessionStorage = () => {
  sessionStorage.removeItem(SESSION_STORAGE_KEYS.TOKEN);
};
