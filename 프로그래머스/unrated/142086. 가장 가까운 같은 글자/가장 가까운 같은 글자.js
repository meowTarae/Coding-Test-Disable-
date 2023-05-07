function solution(s) {
// 1번
// console.log(
//   [...s]
//     .reverse()
//     .map((v, i, arr) => {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (v === arr[j]) return ~~(j - i);
//       }
//       return -1;
//     })
//     .reverse()
// );

// 2번
return [...s].map((v, i) => {
  const cnt = s.substring(0, i).lastIndexOf(v);
  return cnt < 0 ? cnt : i - cnt;
});
}