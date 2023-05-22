function solution(n, m, section) {
    let count = 0;
    let num = 0;
    
    for(let i=0; i<section.length; i++){
        if(section[i] > num){
            num = section[i] + m - 1;
            count++;            
        }
    }
    
    return count;
}
