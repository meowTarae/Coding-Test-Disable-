function solution(s) {
    const isCorrect = (arr)=>{
        const stack=[];
        for(let j=0; j<arr.length; j++){
            if(stack.at(-1) === '[' && arr[j] === ']')
                stack.pop();
            else if(stack.at(-1) === '(' && arr[j] === ')') 
                stack.pop();
            else if(stack.at(-1) === '{' && arr[j] === '}') 
                stack.pop();
            else
                stack.push(arr[j]);
        }
        
        return !stack.length ? true : false;
    }

    let count = 0;
    const newStr = [...s];
    for(let i=0; i<newStr.length; i++){
        const firstLetter = newStr.splice(0, 1);
        newStr.push(...firstLetter);
        if(isCorrect(newStr)) count++;
    }
    return count;   
}