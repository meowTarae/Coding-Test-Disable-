function solution(s) {
    return   s.split(" ").reduce((acc, cur, i, arr) => {
    if (cur === "Z") {
      return (acc -= arr[i - 1]);
    } else {
      return +acc + +cur;
    }
  }, 0);
}