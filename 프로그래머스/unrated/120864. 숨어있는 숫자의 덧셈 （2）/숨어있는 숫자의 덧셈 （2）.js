function solution(my_string) {
    let arr = my_string.match(/\d+/g) ?? 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += parseInt(arr[i]);
    }
    return result
}