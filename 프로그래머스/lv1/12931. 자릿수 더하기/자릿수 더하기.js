function solution(n) {
let sum = 0;
let num = n;
while (num > 0) {
  sum += num % 10;
  num = ~~(num / 10);
}
return (sum);
}