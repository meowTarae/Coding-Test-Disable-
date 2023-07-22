function solution(n, computers) {
    const visit = Array(n+1).fill(false);
    let count = 0;
    
    const DFS =(node)=>{
        visit[node] = true;
        
        const bridge = computers[node-1].map((v1, i)=>v1 === 1 && i+1).filter(v=>v>0);
        for(let i=0; i<bridge.length; i++){
            if(visit[bridge[i]]) continue;
            DFS(bridge[i]);
        }
    }
    
    for(let i=1; i<=n; i++){
        if(visit[i]) continue;
        DFS(i);
        count++;
    }
    return count;
}