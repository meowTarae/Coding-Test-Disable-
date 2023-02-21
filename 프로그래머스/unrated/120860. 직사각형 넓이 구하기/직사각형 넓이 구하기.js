function solution(dots) {
    const arrX = [];
const arrY = [];
dots.forEach((v) => {
  arrX.push(v[0]);
  arrY.push(v[1]);
});
    return (Math.max(...arrX) - Math.min(...arrX)) *
    (Math.max(...arrY) - Math.min(...arrY))
}