function solution(lines) {
const newArr = Array(200).fill(0);

for (let i = 0; i < lines.length; i++) {
  let from = lines[i][0];
  let to = lines[i][1];
  for (let j = from; j < to; j++) {
    newArr[j + 100]++;
  }
}

return(newArr.filter((v) => v > 1).length);
}