function solution(array, n) {
    const newArr = array.filter((v) => v === n);
    return newArr.length;
}