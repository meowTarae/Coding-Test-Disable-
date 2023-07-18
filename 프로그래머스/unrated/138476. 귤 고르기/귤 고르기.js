function solution(k, tangerine) {
    const storage = [0];
    tangerine.forEach(v=>storage[v] ? storage[v]++ : storage[v]=1);
    
    storage.sort((a,b)=> b-a);
    
    let count = 0;
    for(let i=0; i<storage.length; i++){
        count++;
        if(storage[i]>=k) break;
        k-= storage[i];    
    }
    
    return count;
}