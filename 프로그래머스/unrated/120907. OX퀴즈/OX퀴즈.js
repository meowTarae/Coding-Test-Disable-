function solution(quiz) {
    return   quiz.map((v) => {
    let [num1, operator, num2, , num3] = [...v.split(" ")];
    let result = operator === "+" ? +num1 + +num2 : num1 - num2;
    return result === parseInt(num3) ? "O" : "X";
  })
}
