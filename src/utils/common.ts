export const confirmDelete = (
  confirmationMessage: string,
  expectedMessage: string,
  onConfirmed: VoidFunction,
  onCancel: VoidFunction,
) => {
  const result = prompt(confirmationMessage);

  if (result === expectedMessage) {
    onConfirmed();
  } else {
    onCancel();
  }
};
