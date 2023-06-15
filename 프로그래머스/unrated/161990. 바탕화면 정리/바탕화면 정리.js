function solution(wallpaper) {
    const storage = [];
    for(let i=0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[i].length; j++){
            const test = wallpaper[i][j];
            if (test === '#'){
                storage.push([i, j]);
            }
        }
    }
    
    const arrX = [];
    const arrY = [];
    for(let i=0; i<storage.length; i++){
        arrX.push(storage[i][0]);
        arrY.push(storage[i][1]);
    }
    arrX.sort((a,b)=>a-b);
    arrY.sort((a,b)=>a-b);
    return [arrX[0], arrY[0], arrX[arrX.length-1]+1, arrY[arrY.length-1]+1];
}