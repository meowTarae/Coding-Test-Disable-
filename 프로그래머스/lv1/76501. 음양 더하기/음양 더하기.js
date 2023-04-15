function solution(absolutes, signs) {
    return (
  absolutes.reduce((acc, cur, i) => {
    return acc + cur * (signs[i] || -1);
  }, 0)
);
}