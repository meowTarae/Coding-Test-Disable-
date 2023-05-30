function solution(babbling) {
const words = ["aya", "ye", "woo", "ma"];

const arr = babbling.map((v) => {
  for (let i = 0; i < words.length; i++) {
    if (v.includes(words[i])) v = v.replaceAll(words[i], i);
  }
  return v;
});

let count = 0;
for (const i of arr) {
  if (Number.isInteger(+i)) {
    if (![...i].find((v, i, arr) => v === arr[i + 1])) count++;
  }
}
return count;
}