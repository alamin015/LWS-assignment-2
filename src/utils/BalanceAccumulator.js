export function balanceAccumulator(array) {
  return array.reduce((sum, current) => sum + parseFloat(current.amount), 0);
}
