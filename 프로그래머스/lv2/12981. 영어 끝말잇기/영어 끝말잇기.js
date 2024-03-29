function solution(n, words) {
    let [person, round] = [-1, -1];
    const storage = [words[0]];
    
    for(let i=1; i<words.length; i++){
        round = ~~(i/n+1);
        const word = words[i];
        
        const s = storage.at(-1).at(-1);
        // 1. 뒷글자랑 앞글자랑 같은지
        // 2. 중복되면 안됨        
        if(s === word.at(0) && !storage.includes(word))
            storage.push(word);
        else {
            person = (i % n ) + 1;
            break;
        }
    }
    
    return person == -1 ? [0,0] : [person, round];
}