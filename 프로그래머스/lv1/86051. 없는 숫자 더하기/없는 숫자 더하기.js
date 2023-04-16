function solution(numbers) {
    let result = 45;
    numbers.sort((a, b) => a - b).forEach((v) => (result -= v));
    return result;
}