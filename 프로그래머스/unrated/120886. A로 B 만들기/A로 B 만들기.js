function solution(before, after) {
    const arrangement = (str) => [...str].sort().join("");
    return arrangement(before) === arrangement(after) ? 1 : 0
}