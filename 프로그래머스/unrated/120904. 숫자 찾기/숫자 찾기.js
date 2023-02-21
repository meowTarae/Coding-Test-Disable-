function solution(num, k) {
    const answer = [...num.toString()].indexOf(k.toString());
    return answer === -1 ? answer : answer+1
}