function solution(common) {
const check = -common[0] + common[1] * 2 === common[2];

return(
  check
    ? common[common.length - 1] * 2 - common[common.length - 2]
    : common[common.length - 1] ** 2 / common[common.length - 2]
);


}