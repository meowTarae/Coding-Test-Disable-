function solution(arr1, arr2) {
const newArr = [];
for (let i = 0; i < arr1.length; i++) {
  const arr = [];
  for (let j = 0; j < arr1[0].length; j++) {
    arr.push(arr1[i][j] + arr2[i][j]);
  }
  newArr.push(arr);
}

return (newArr);
}