function solution(age) {
    return [...String(age)].map((word) => String.fromCharCode(+word + 97)).join("")
}