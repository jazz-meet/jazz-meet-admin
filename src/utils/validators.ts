export const isLengthValid = (
  value: string,
  minLength?: number,
  maxLength?: number,
) => {
  return (
    (minLength === undefined || value.length >= minLength) &&
    (maxLength === undefined || value.length <= maxLength)
  );
};
