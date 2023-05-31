function solution(s) {
    const arr = [0, 0];
    let count = 0;
    let x = 0;
    
    for(let i=0; i<s.length; i++){
        if (arr[0] === 0 || s[i] === s[x]) {
            arr[0]+=1;
            x = i;
        }
        else arr[1]+=1;
        
        if(arr[0] === arr[1]){
            count++;
            arr[0] = 0;
            arr[1] = 0;
        }
    }
    
    return (arr[0]>0 || arr[1]>0) ? count + 1 : count;
}