function solution(progresses, speeds) {
    const storage = [];
    
    const update = ()=>{
        for(let i=0; i<progresses.length; i++){
            progresses[i] += speeds[i];
        }
    }
    
    let index = 0;
    while(index !== progresses.length){
        let count = 0;
        update();
        
        while(progresses[index] >= 100){
            index++;
            count++;
        }
        if(count > 0)
            storage.push(count);
    }
    return storage;
}