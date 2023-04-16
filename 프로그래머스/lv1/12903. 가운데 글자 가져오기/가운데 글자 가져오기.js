function solution(str) {
    const len = str.length;
    return len % 2 === 0 ? str[len / 2 - 1] + str[len / 2] : str[~~(len / 2)];
}