function solution(array, n) {
return   array.reduce((acc, cur) => {
    let absAcc = Math.abs(acc - n);
    let absCur = Math.abs(cur - n);
    if (absAcc === absCur) return acc > cur ? cur : acc;
    return absAcc > absCur ? cur : acc;
  }, Infinity)
}