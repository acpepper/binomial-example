export const binomial = (a: number, b: number, coeffs: Array<number>) => {
  return (coeffs[0] * a + coeffs[1]) * (coeffs[2] * b + coeffs[3]);
};

export const one = (a: number, b: number) => {
  binomial(a, b, [1, 2, 1, 1]);
};

export const two = (a: number, b: number) => {
  binomial(a, b, [1, -1, 1, 2]);
};
