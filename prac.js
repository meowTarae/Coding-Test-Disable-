const obj = [];
const n = 10;
let sum = 0;

for (let i = 1; i < n + 1; i++) {
  if (i % 2 == 0) obj.push(i);
}

obj.forEach((element) => (sum += element));

console.log(sum);
