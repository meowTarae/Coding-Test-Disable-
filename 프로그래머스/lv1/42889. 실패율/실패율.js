function solution(N, stages) {
const result = {};

const func = (stages, i) => {
  const newStage = stages.filter((v) => v > i);
  result[i] = (stages.length - newStage.length) / stages.length;
  return i === N
    ? Object.entries(result)
        .sort((a, b) => b[1] - a[1])
        .map((v) => +v[0])
    : func(newStage, i + 1);
};

return (func(stages, 1));
}