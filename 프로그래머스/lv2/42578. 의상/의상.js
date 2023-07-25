function solution(clothes) {
    const storage = {};
    for(let i=0; i<clothes.length; i++){
        if(storage.hasOwnProperty(clothes[i][1]))
            storage[clothes[i][1]]++;
        else
            storage[clothes[i][1]] = 1;        
    }
    
    let count = 1;
    for(const key in storage)
        count *= storage[key] + 1;
    
    return count - 1;
}
