function solution(array, commands) {
    const arr = [];
    
    for (const [x, y, z] of commands) {
        arr.push(array.slice(x - 1, y).sort((a,b)=>a-b)[z - 1]);
    }
    
    return arr;
}