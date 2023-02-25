function solution(i, j, k) {
    let count = 0;
for (i; i <= j; i++) {
  (i + "").split("").forEach((v) => {
    if (+v === k) count++;
  });
}
return (count);
}