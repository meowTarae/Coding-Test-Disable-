function solution(nums) {
const set = new Set(nums);
const max = nums.length / 2;
return ([...set].length > max ? max : [...set].length);

}