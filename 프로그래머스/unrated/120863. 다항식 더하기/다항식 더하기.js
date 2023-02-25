function solution(polynomial) {
const variable = [];
const num = [];

polynomial
  .split(" + ")
  .forEach((v) =>
    isNaN(v)
      ? variable.push(v === "x" ? 1 : parseInt(v.split("x").join("")))
      : v === "0"
      ? null
      : num.push(parseInt(v))
  );

const v =
  variable.length !== 0 ? variable.reduce((acc, cur) => (acc += cur)) : null;
const n = num.length !== 0 ? num.reduce((acc, cur) => (acc += cur)) : null;

if (v === null) return(n + "");
else if (n === null) return(v === 1 ? "x" : v + "x");
else return(v === 1 ? `x + ${n}` : `${v}x + ${n}`);
}