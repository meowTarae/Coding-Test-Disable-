function solution(dots) {
const arr = [];

for (let i = 0; i < dots.length - 1; i++) {
  for (let j = i + 1; j < dots.length; j++) {
    let lean = (dots[j][1] - dots[i][1]) / (dots[j][0] - dots[i][0]);
    // if (arr.includes(lean)) console.log(1);
    arr.push(lean);
  }
}
for (let k = 0; k < arr.length / 2; k++) {
  if (arr[k] === arr[arr.length - 1 - k]) return 1;
}
return 0;
}