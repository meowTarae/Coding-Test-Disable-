function solution(n,a,b) {
    for(let i=1; i<=Math.log2(n); i++){
        const A = Math.ceil(a/2);
        const B = Math.ceil(b/2);
        
        if(A==B) return i;
        else {
            a = A;
            b = B;
        }
    }
}