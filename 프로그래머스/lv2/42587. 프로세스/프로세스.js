function solution(priorities, location) {
    const arr = priorities.map((process,index)=>{return {process,index}});
    let count = 0;    
    while(arr.length){
        const queue = arr.shift();
        if(arr.some(v=>v.process > queue.process))
            arr.push(queue);
        else{
            count++;            
            if(queue.index === location) break;
        }
    }
    return count
}