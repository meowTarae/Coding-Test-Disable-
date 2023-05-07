function solution(s) {
return (
  [...s]
    .reverse()
    .map((v, i, arr) => {
      for (let j = i + 1; j < arr.length; j++) {
        if (v === arr[j]) return ~~(j - i);
      }
      return -1;
    })
    .reverse()
);
}