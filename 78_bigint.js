// 78_bigint.js
// BigInt for integers larger than Number.MAX_SAFE_INTEGER

const big = 123456789012345678901234567890n;
console.log('bigint', big);
console.log('add', big + 1n);