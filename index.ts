export const binomial = (a: number, b: number, coeffs: Array<number>) => {
  return (coeffs[0] * a + coeffs[1]) * (coeffs[2] * b + coeffs[3]);
};
