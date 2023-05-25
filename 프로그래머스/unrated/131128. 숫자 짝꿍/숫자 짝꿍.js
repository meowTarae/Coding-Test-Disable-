function solution(X, Y) {
    let str = "";
    
    for (let i = 0; i < 10; i++) {
      const countX = [...X].filter((v) => +v === i).length;
      const countY = [...Y].filter((v) => +v === i).length;
    
      str += (i + "").repeat(Math.min(countX, countY));
    }
    
    if(str.length === 0) return '-1';
    if(+str === 0) return '0';
    
    return ([...str].sort((a, b) => b - a).join(""));
}