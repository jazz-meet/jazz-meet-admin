import {
  LOGIN_ID_MAX_LENGTH,
  LOGIN_ID_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from '~/constants/auth';

const isLengthValid = (
  value: string,
  options: {
    minLength?: number;
    maxLength?: number;
  } & ({ minLength: number } | { maxLength: number }),
): boolean => {
  const { minLength = 0, maxLength = Infinity } = options;

  return value.length >= minLength && value.length <= maxLength;
};

export const isValidCredential = (loginId: string, password: string) => {
  const isInvalidLoginId = !isLengthValid(loginId, {
    minLength: LOGIN_ID_MIN_LENGTH,
    maxLength: LOGIN_ID_MAX_LENGTH,
  });

  const isInvalidPassword = !isLengthValid(password, {
    minLength: PASSWORD_MIN_LENGTH,
    maxLength: PASSWORD_MAX_LENGTH,
  });

  return isInvalidLoginId || isInvalidPassword;
};
