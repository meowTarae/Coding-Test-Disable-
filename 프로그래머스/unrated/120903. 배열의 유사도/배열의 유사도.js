function solution(s1, s2) {
    return s1.filter((w)=>s2.includes(w)).length;
}