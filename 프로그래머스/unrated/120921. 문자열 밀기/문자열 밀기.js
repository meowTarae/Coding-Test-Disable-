function solution(A, B) {
    const push = (str) => {
  const arr = Array(str.length + 1)
    .fill("")
    .map((v, i, arr) =>
      i === 0 ? (arr[i] = str[str.length - 1]) : (arr[i] = str[i - 1])
    );
  arr.pop();
  return arr.join("");
};

let arr = push(A);
let n = 1;
while (n !== A.length) {
  if (arr === B) break;
  arr = push(arr);
  n++;
}
return (A === B ? 0 : n === A.length ? -1 : n);
}