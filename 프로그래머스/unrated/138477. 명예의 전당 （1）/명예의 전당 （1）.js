function solution(k, score) {
const arr = [];
const result = [];

for (let i = 0; i < score.length; i++) {
  arr.push(score[i]);
  arr.sort((a, b) => b - a);
  result.push(arr.length < k ? arr[arr.length - 1] : arr[k - 1]);
}
return (result);

}