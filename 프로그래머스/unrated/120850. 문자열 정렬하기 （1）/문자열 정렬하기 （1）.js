function solution(my_string) {
    return [...my_string.matchAll(/[\d]/g)].map((v) => +v.shift()).sort((a, b) => a - b);
}