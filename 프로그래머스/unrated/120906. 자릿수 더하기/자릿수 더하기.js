function solution(n) {
    return [...String(n)].map((v)=>+v).reduce((acc, cur) => acc + cur);
}