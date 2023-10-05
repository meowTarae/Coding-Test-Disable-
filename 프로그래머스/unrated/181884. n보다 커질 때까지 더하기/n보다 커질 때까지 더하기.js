function solution(numbers, n) {
    let sum = 0;
    for (const i of numbers) {
        if (sum <= n) sum += i;
    }
    return (sum);
}