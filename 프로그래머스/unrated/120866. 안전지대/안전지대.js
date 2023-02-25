function solution(board) {
    const bombCheck = (j, i) => {
  const nearby = [
    [1, 1],
    [1, 0],
    [1, -1],
    [0, 1],
    [0, -1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
  ];

  const isInBoard = (j, i) =>
    j >= 0 && j < board.length && i >= 0 && i < board.length;

  return nearby.some(
    ([J, I]) => isInBoard(j + J, i + I) && board[j + J][i + I] === 1
  );
};

let count = 0;

for (let j = 0; j < board.length; j++) {
  for (let i = 0; i < board.length; i++) {
    if (board[j][i] !== 1 && !bombCheck(j, i)) count += 1;
  }
}
    return count;
}