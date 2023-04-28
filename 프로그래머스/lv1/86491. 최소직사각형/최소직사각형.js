function solution(sizes) {
// 1
const w = sizes.map((v) => v.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0])[
  sizes.length - 1
][0];
const h = sizes.reduce((acc, cur) => [...acc, ...cur]).sort((a, b) => a - b)[
  sizes.length * 2 - 1
];
return w*h
    
// 2
const newArr = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

let max = [0, 0];
newArr.forEach(([w, h]) => {
    if (w > max[0]) max[0] = w;
    if (h > max[1]) max[1] = h;
})
return max[0]*max[1];
}