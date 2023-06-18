function solution(park, routes) {
    let posX = 0;
    let posY = 0;
    
    // 현재 위치 구하기
    park.forEach((v1,ix)=>
        [...v1].forEach((v2,iy)=>{
            if(v2 === 'S'){
                posY = iy;
                posX = ix;
                return;
            }
        })
    )
    
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    const direction = {
        E: 0,
        W: 1,
        S: 2,
        N: 3,
    }
    
    for(let i=0; i<routes.length; i++){
        const [route, preq] = routes[i].split(' ');
        const prevX = posX;
        const prevY = posY;
        
        for(let i=0; i<preq; i++){
            posX += dx[direction[route]];
            posY += dy[direction[route]];
            
            // 길에 막히거나, 'X'를 만나거나
            if (
                posY < 0 || posY > park[0].length - 1 
                || posX < 0 || posX > park.length - 1
                || park[posX][posY] === 'X'
            ){
                posX = prevX;
                posY = prevY;
                break;
            }
        }  
    }
    
    return [posX, posY];
}