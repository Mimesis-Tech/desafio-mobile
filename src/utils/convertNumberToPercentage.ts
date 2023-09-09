export const convertNumberToPercentage = (number: number | undefined) => {
  let newValue = Math.round(number as number);
  newValue = newValue % 100;
  return newValue;
};
