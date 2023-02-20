function solution(n) {
const arr = [];
for (let i = 1; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    arr.push(i);
    arr.push(n / i);
  }
}
return [...new Set(arr)].sort((a, b) => a - b)
}