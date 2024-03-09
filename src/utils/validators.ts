export const isLengthValid = (
  value: string,
  options: {
    minLength?: number;
    maxLength?: number;
  },
) => {
  const { minLength, maxLength } = options;

  return (
    minLength !== undefined &&
    maxLength !== undefined &&
    value.length >= minLength &&
    value.length <= maxLength
  );
};
