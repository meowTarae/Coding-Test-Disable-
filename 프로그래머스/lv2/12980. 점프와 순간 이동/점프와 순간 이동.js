function solution(n) {
    let count = 0;
    while (n>0) 
        (n%2 === 0) ? n/=2 : (n--, count++);
    return count;
}