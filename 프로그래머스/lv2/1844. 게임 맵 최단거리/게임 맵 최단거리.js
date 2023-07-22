function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    
    const BFS = (x, y)=>{
        const queue = [[x,y]];

        while(queue.length){
            const [qx, qy] = queue.shift();
            for(let i=0; i<4; i++){
                const ix = qx + dx[i];
                const iy = qy + dy[i];    
                if(ix<0 || ix>=n || iy<0 || iy>=m) continue;
                if(maps[ix][iy] === 0 || maps[ix][iy] !== 1) continue;
                maps[ix][iy] = maps[qx][qy] + 1;
                queue.push([ix, iy]);
            }
        }
    }

    BFS(0,0);
    const result = maps[n-1][m-1];
    return result === 1 ? -1 : result;
}