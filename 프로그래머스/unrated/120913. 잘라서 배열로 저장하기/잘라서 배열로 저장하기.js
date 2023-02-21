function solution(my_str, n) {
    let arr = [];
for (let i = 0; i < my_str.length / n; i++) {
  arr = [...arr, my_str.slice(i * n, i * n + n)];
}
    return arr;
}