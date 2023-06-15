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
    
    return [
        Math.min(...arrX),
        Math.min(...arrY),
        Math.max(...arrX) + 1,
        Math.max(...arrY) + 1,
    ];
}