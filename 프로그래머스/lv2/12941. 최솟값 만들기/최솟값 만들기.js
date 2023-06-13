function solution(A,B){
    let sortA = A.sort((a,b)=> a-b);
    let sortB = B.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
      sum += sortA[i] * sortB[i];
    }
    
    return (sum)
}