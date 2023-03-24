function solution(x) {
    let num = 0;
    [...(x + "")].forEach((v) => (num += +v));
    
    return (x % num === 0);
}