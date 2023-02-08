function solution(sides) {
    const [n1, n2, n3] = sides.sort().reverse();
    return n2 + n3 > n1 ? 1 : 2;
}