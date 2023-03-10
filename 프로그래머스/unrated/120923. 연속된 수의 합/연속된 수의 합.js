function solution(num, total) {
    const getResults = (num, initail) => {
  return Array(num)
    .fill(initail)
    .map((v, i) => v + i);
};

return(
  num % 2 === 0
        ? getResults(num, Math.ceil(total / num) - num / 2)
    : getResults(num, total / num - Math.floor(num / 2))
);
} 