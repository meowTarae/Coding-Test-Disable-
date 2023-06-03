function solution(board, moves) {
    const stack = [];
    let result = 0;
    
    const checkBomb = (arr) => {
      // stack의 맨 마지막 값이 터트릴 값인지 체크
      if (arr.length > 1) {
        if (arr[arr.length - 1] === arr[arr.length - 2]) {
          arr.pop();
          arr.pop();
          result++;
        }
      }
      return arr;
    };
    
    for (let i = 0; i < moves.length; i++) {
      for (let j = 0; j < board.length; j++) {
        const doll = board[j][moves[i] - 1];
        if (doll !== 0) {
          stack.push(doll);
          board[j][moves[i] - 1] = 0;
          break;
        }
      }
      checkBomb(stack);
    }
    
    return (result * 2);
}