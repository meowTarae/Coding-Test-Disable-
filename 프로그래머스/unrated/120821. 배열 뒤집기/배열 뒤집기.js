function solution(num_list) {
    return num_list.map((v, i, array) => array[array.length - 1 - i]);
}