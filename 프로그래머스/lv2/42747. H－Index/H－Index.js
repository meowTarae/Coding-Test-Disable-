function solution(citations) {  
    if (Math.max(...citations) === 0) return 0;
    
    const storage = [];
    for(let i=1; i<=citations.length; i++){
        const count = citations.filter(v=>v>=i).length;
        count >= i && storage.push(i);
    }
    const H_index = [];
    for(let j=0; j<storage.length; j++){
        const count = citations.filter(v=>v<storage[j]).length;
        count <= storage[j] && H_index.push(storage[j])
    }
    return Math.max(...H_index)
}