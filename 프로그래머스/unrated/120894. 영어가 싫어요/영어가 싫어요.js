function solution(numbers) {
    const num_list = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
const regexp = new RegExp(Object.keys(num_list).join("|"), "g");
    return +numbers.replace(regexp, (key) => num_list[key])
}