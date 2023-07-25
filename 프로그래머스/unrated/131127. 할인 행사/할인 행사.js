function solution(want, number, discount) {
    let count = 0;
    const numberCount = number.reduce((a,b)=>a+b);
    const wantObj = {};
    for(let i=0; i<want.length; i++){
        wantObj[want[i]] = number[i];
    }
    const wantObjToArray = Object.entries(wantObj).sort().toString();
    
    const makeObj = (arr) =>{
        const obj = {};
        if (arr.length !== numberCount) return obj;
        
        for(let i=0; i<numberCount; i++){
            obj[arr[i]] = (obj[arr[i]] || 0) + 1;
        }
        return obj;
    }
    
    for(let i=0; i<discount.length; i++){
        const compareObj = makeObj(discount.slice(i,i+numberCount));
        if(Object.keys(compareObj).length !== 0)
            if(wantObjToArray == Object.entries(compareObj).sort().toString())
                count++;
    }
    
    return count;
}