function solution(quiz) {
    return quiz.map((v) => {
    let arr = [...v.split(" ")];
    let result = arr[1] === "+" ? +arr[0] + +arr[2] : arr[0] - arr[2];
    return result === parseInt(arr.pop()) ? "O" : "X";
  })
}