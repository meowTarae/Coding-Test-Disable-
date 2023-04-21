function solution(n, m) {
const gcd = (a, b) => (b > 0 ? gcd(b, a % b) : a);
const lcm = (a, b) => (a * b) / gcd(a, b);

return ([gcd(n, m), lcm(n, m)]);
}