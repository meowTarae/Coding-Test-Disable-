const factorial = (num) => {
  let value = 1;
  for (let i = 1; i < num + 1; i++) {
    value *= i;
  }
  return value;
};

function solution(n) {
    let cal = 0;
    let i = 0;
    while (cal <= n) {
      i++;
      cal = factorial(i);
    }
    return i-1
}