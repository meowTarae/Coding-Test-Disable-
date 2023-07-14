

function solution(arr) {
    const GCD = (a, b) =>{
        return a%b === 0 ? b : GCD(b, a%b);
    }
    
    return arr.reduce((acc,cur)=>{
        return acc * cur / GCD(acc, cur);
    })
}