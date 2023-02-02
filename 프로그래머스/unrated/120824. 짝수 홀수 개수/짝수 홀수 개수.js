function solution(num_list) {
    const arr = [0,0]
    
    for(let n of num_list){
        arr[n%2] += 1;
    }
    
    return arr;
}