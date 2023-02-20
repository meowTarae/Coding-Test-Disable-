function solution(s) {
    const obj = [...s].reduce(
  (acc, cur) =>
    acc[cur] ? { ...acc, [cur]: 1 + acc[cur] } : { ...acc, [cur]: 1 },
  {}
);
    return   Object.keys(obj)
    .filter((v) => obj[v] === 1)
    .sort()
    .join("")
}