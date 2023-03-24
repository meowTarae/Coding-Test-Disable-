function solution(a, b) {
    let to = a>b?b:a
    let from = a>b?a:b
    let sum = 0;
    for (let i = to; i <= from; i++) {
        sum += i;
    }
    return (sum);
}