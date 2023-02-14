function solution(num_list, n){
    let result = new Array(), arr;
    for(let i = 0 ; i<num_list.length ; i++){
        if(i%n===0){
            arr = new Array();
            result.push(arr);
        }
        arr.push(num_list[i]);
    }
    return result;
}