function hammingWeight(x) {
  let ones = 0;
  while (x > 0) {
    ones += x & 1;
    x >>= 1;
  }
  return ones;
}