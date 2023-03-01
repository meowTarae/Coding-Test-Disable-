function solution(numlist, n) {
    return   numlist.sort((a, b) => {
    const [A, B] = [Math.abs(a - n), Math.abs(b - n)];
    if (A === B) return b - a;
    return A - B;
  });
}