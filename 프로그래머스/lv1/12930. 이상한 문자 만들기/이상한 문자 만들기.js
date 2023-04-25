function solution(s) {
const newArr = [];
let cnt = 0;
for (const i of s.toLowerCase()) {
  cnt = i === " " ? 0 : (cnt += 1);
  const word = cnt % 2 === 0 ? i : i.toUpperCase();
  newArr.push(word);
}

return (newArr.join(""));
}