function solution(number, limit, power) {
    const divisor = (num) =>{
        let count  = 0;
        for(let i = 1; i<=Math.sqrt(num); i++){
            if(num % i === 0) count++;
            if(i===Math.sqrt(num)) count -= 0.5;
        }    
        return count*2;
    }
    
    const arr = Array(number).fill().map((v,i)=>divisor(i+1)).map(v=>v>limit ? power : v);
    
    return arr.reduce((a,b)=>a+b);
}