function solution(numbers, k) {
    let index = 0;
    
    for (let i = 0; i < k - 1; i++) {
        if (index + 1 === numbers.length) index = -1;
        if (index === numbers.length) index = 0;
        index += 2;
    }
    
    return numbers[index];
}