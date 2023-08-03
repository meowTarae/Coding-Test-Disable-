function solution(s) {
    const str = s.split('},');
    const regex = /[{}]/g;
    const arr = str.map(s=>s.replaceAll(regex, '').split(',').map(Number));

    const set = new Set();
    const recur = (goals)=>{
        for(let ele of arr){
            if(ele.length === goals) {
                set.add(...ele);
                ele.forEach(v=>set.add(v));
                break;
            }
        }
    }
    let count = 1;
    while(count <= arr.length){
        recur(count);
        count++;
    }
    
    return [...set]
}