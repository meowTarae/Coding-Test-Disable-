function solution(n) {
    return ([...(n + "")].map((v) => parseInt(v)).reverse());
}