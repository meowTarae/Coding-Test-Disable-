function solution(numbers) {
    let result = 45;
    numbers.forEach((v) => (result -= v));
    return result;
}
