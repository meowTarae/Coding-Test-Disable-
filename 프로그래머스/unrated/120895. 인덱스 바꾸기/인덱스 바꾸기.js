function solution(my_string, num1, num2) {
   return   [...my_string]
    .map((v, i, arr) => {
      if (i === num1) return (v = arr[num2]);
      else if (i === num2) return (v = arr[num1]);
      return v;
    })
    .join("")
}