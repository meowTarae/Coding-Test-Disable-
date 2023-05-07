function solution(food) {
    const arr = [];
    
    for (let i = 1; i < food.length; i++) {
      for (let j = 0; j < ~~(food[i] / 2); j++) {
        arr.push(i);
      }
    }
    
    const str = arr.join("");
    const reverseStr = arr.reverse().join("");
    
    return (str + 0 + reverseStr);
}