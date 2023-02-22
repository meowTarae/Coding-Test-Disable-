function solution(keyinput, board) {
let x = 0;
let y = 0;

keyinput.forEach((v) => {
  switch (v) {
    case "left":
      Math.abs(x-1) > board[0] / 2 ? (x = -parseInt(board[0] / 2)) : --x;
      break;
    case "right":
      Math.abs(x+1) > board[0] / 2 ? (x = parseInt(board[0] / 2)) : ++x;
      break;
    case "up":
      Math.abs(y+1) > board[1] / 2 ? (y = parseInt(board[1] / 2)) : ++y;
      break;
    case "down":
      Math.abs(y-1) > board[1] / 2 ? (y = -parseInt(board[1] / 2)) : --y;
      break;
    default:
      break;
  }
});
return [x,y]
}