function solution(sides) {
    const [big, small] = sides.sort((a, b) => b - a);
    let num = 0;

    for (let i = big - small + 1; i < big + small; i++) num++;
    return num;
}