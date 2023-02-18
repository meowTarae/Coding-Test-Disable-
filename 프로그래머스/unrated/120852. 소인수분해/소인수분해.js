function solution(n) {
    const arr = [];
Array(n - 1)
  .fill(1)
  .map((_, i) => i + 2)
  .reduce((acc, cur) => {
    if (acc % cur === 0) {
      while (acc % cur === 0) {
        acc /= cur;
      }
      arr.push(cur);
    }
    return acc;
  }, n);
    return arr;
}
// 공부는 월별 공부 파일로, 일기는 월별 일기파일로. 