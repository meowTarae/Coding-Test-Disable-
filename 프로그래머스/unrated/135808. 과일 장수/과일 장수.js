function solution(k, m, score) {
let cnt = 0;

score.sort((a, b) => b - a);

for (let i = 0; i < ~~(score.length / m); i++) {
  cnt += m * score.slice(i * m, i * m + m)[m - 1];
}

return cnt;

}