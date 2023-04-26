function solution(d, budget) {
    while (d.sort((a, b) => a - b).reduce((acc, cur) => acc + cur, 0) > budget) {
      d.pop();
    }
    
    return (d.length);
}