function solution(arr) {
    let num = arr[0];
for (const n of arr) {
  if (num > n) num = n;
}
return (arr.length ===1 ? [-1] :arr.filter((v) => v !== num));
}