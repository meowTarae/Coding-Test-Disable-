function solution(numbers) {
    return  numbers.reduce((acc, cur, index, arr) => {
    for (index; index < arr.length - 1; index++) {
      acc = cur * arr[index + 1] > acc ? cur * arr[index + 1] : acc;
    }
    return acc;
  }, Number.NEGATIVE_INFINITY)
}