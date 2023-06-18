function solution(s){
    let check = true;
    let count = 0;
    
    for(let i=0; i<s.length; i++){
        if(s[i] === '(')
            count++;
        else if(s[i] === ')')
            count--;
        
        if(count < 0){
            check = false;
            break;
        }
    }
    if(!check) return check;
    return !count;
}
