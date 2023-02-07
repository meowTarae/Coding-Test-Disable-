function solution(numbers) {
    const [n1, n2] = numbers.sort((a, b) => b - a);
    return n1*n2;
}