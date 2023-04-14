function solution(num) {
let count = 0;

const Collatz = (n) => {
  if (n === 1 || count === 500) return;
  count++;
  n % 2 === 0 ? Collatz(n / 2) : Collatz(n * 3 + 1);
};

Collatz(num);

return (count >= 500 ? -1 : count);
}