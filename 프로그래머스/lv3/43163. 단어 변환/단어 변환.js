function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
        
    const checkWord = (s1, s2)=>{
        let cnt = 0;
        [...s1].forEach((v,i)=>v !== s2[i] && cnt++)
        return cnt===1 ? true : false;
    }

    const visit = Array(words.length).fill(false);
    let count = 0;
    const BFS = (word) =>{
        const queue = [word];
        
        while(queue.length){
            const qw = queue.shift();
            for(let i=0; i<words.length; i++){
                if(checkWord(qw, words[i]) && !visit[i]){
                    if(words[i] === target)
                        return count+1;
                    queue.push(words[i]);
                    visit[i] = true;
                }    
            }
            count++;
        }
        return 0;
    }
    
    return BFS(begin);
}