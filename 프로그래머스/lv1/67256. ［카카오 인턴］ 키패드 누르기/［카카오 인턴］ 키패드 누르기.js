function solution(numbers, hand) {
    let result = "";
    let leftPos = [0, 0];
    let rightPos = [0, 0];
    
    const checkHand = (arr) => {
      const left = Math.abs(arr[0] - leftPos[0]) + Math.abs(arr[1] - leftPos[1]);
      const right = Math.abs(arr[0] - rightPos[0]) + Math.abs(arr[1] - rightPos[1]);
    
      if (left === right) {
        if (hand === "right") {
          rightPos = arr;
          return "R";
        } else {
          leftPos = arr;
          return "L";
        }
      } else if (left < right) {
        leftPos = arr;
        return "L";
      } else {
        rightPos = arr;
        return "R";
      }
    };
    
    for (let i = 0; i < numbers.length; i++) {
      const target = numbers[i];
    
      if (target === 1 || target === 4 || target === 7) {
        result += "L";
        if (target === 1) leftPos = [3, 0];
        else if (target === 4) leftPos = [2, 0];
        else leftPos = [1, 0];
      } else if (target === 3 || target === 6 || target === 9) {
        result += "R";
        if (target === 3) rightPos = [3, 0];
        else if (target === 6) rightPos = [2, 0];
        else rightPos = [1, 0];
      } else {
        if (target === 0) result += checkHand([0, 1]);
        else if (target === 2) result += checkHand([3, 1]);
        else if (target === 5) result += checkHand([2, 1]);
        else if (target === 8) result += checkHand([1, 1]);
      }
    }
    
    return (result);
}