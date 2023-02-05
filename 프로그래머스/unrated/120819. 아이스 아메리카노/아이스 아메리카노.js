function solution(money) {
    return [parseInt(money / 5500)].concat([money - 5500 * parseInt(money / 5500)])
}