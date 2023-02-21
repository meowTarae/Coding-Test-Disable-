function solution(my_string) {
    return [...my_string.split(" ")]
    .filter((v) => v !== "")
    .reduce((acc, cur, i, arr) => {
      if (cur === "-") arr[i + 1] *= -1;
      if (i % 2 === 0) acc += +cur;
      return acc;
    }, 0)
}