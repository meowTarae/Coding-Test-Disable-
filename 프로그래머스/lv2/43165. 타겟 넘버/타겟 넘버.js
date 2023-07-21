function solution(numbers, target) {
    let count = 0;
    const DFS = (i, sum)=>{
        if(numbers.length === i){
            if(sum === target)
                count++;
            return;
        }              
        
        DFS(i+1, sum + numbers[i]);
        DFS(i+1, sum - numbers[i]);
        return count;
    }
    
    return DFS(0,0);
}