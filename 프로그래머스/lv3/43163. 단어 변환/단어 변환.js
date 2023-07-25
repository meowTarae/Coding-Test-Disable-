function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
        
    const checkWord = (s1, s2)=>{
        let cnt = 0;
        for(let i=0; i<s1.length; i++){
            s1[i] != s2[i] && cnt++;
            if(cnt > 1) return false;
        }
        return true;
    }

    const BFS = (arr)=>{
        const queue = [arr];
        
        while(queue.length){
            const [w, c] = queue.shift();
            for(const e of words){
                if(checkWord(w, e)){
                    if(w === target) return c;
                    queue.push([e, c+1]);
                }
            }
        }
    }
    
    return BFS([begin, 0]);
}