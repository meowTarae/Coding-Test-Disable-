function solution(sizes) {
    const w = sizes.map((v) => v.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0])[
  sizes.length - 1
][0];
    const h = sizes.reduce((acc, cur) => [...acc, ...cur]).sort((a, b) => a - b)[
  sizes.length * 2 - 1
];

    return (w*h);
}