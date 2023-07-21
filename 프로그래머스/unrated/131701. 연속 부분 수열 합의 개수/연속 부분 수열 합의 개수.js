function solution(elements) {
    const set = new Set();
    const newArr = [...elements, ...elements];
    
    for(let i=1; i<=elements.length; i++){      
        for(let j=0; j<elements.length; j++){
            let sum=0;
            for(let k=0; k<i; k++)
                sum += newArr[j+k];
            set.add(sum);
        }
    }
    return [...set].length;
}