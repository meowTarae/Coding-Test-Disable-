function solution(a, b) {
    return Array(a.length).fill().reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}