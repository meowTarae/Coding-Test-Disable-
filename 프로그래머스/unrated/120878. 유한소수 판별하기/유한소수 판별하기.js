function solution(a, b) {
    let GCD = (a, b) => (a % b === 0 ? b : GCD(b, a % b));

const check = [];
const num = b / GCD(a, b);
for (let i = 2; i <= num; i++) {
  if (num % i === 0) {
    if (i % 2 !== 0 && i % 5 !== 0) {
      check.push(i);
    }
  }
}
    return check.length > 0 ? 2 : 1
}