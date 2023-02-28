function solution(score) {
const arr = score.map((v) => (v[0] + v[1]) / 2);
const newArr = Array(arr.length).fill(1);

for (let j = 0; j < arr.length; j++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[j] > arr[i]) {
      newArr[i]++;
    }
  }
}
    
    return newArr
}