function solution(str) {
let arr = [];
for (let i = 0; i < str.length; i++) {
  // 숫자일때
  if (Number.isInteger(+str[i])) {
    if (str[i] === "0" && str[i - 1] === "1") {
      arr.pop();
      arr.push(10);
    } else {
      arr.push(+str[i]);
    }
  }

  // 문자일때
  if (str[i] === "S") {
  }
  if (str[i] === "D") {
    arr[arr.length - 1] = Math.pow(arr[arr.length - 1], 2);
  }
  if (str[i] === "T") {
    arr[arr.length - 1] = Math.pow(arr[arr.length - 1], 3);
  }
  if (str[i] === "*") {
    if (arr.length >= 2) {
      arr[arr.length - 2] = arr[arr.length - 2] * 2;
    }
    arr[arr.length - 1] = arr[arr.length - 1] * 2;
  }
  if (str[i] === "#") {
    arr[arr.length - 1] *= -1;
  }
}
return arr.reduce((a, b) => a + b);
}