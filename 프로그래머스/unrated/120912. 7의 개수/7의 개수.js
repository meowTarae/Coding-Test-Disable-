function solution(array) {
    return  array
    .map((v) => v.toString().split(""))
    .flat()
    .filter((v) => v === "7").length;
}