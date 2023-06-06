function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const skipAlphabet = [...alphabet].filter(v=>skip.indexOf(v)==-1)
    
    return [...s].map(v=>{
        let idx = skipAlphabet.indexOf(v);
        idx += index
        while (idx >= skipAlphabet.length){
            idx -= skipAlphabet.length
        }
        return skipAlphabet[idx]
    }).join('')
}