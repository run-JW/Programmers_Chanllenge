const reduce = (a, ...args) => a.reduce(...args);
const bcd = (a, b) => (b % a === 0) ? a : bcd((b % a), a);
const lcm = (a, b) => (a * b) / bcd(a, b);

const solution = (arr) => reduce(arr, lcm);
