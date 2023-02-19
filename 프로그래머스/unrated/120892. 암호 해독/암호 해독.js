function solution(cipher, code) {
    return   [...cipher].reduce(
    (acc, cur, index) => ((index + 1) % code === 0 ? acc + cur : acc),
    ""
  )
}