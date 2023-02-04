function solution(slice, n) {
    let result = 1;

    while ((slice * result) / n < 1) {
        ++result;
    }
    
    return result;
}