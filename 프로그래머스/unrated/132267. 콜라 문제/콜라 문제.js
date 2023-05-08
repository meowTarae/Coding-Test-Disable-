function solution(a, b, n) {
    let count = 0;
    
    while (n >= a) {
      count += ~~(n / a) * b;
      n = ~~(n / a) * b + (n % a);
    }
    
    return (count);
}