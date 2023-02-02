function solution(array) {
    const obj = {};
    
    for (const n of array) {
      if (obj.hasOwnProperty(n)) {
        obj[n]++;
        continue;
      }
      obj[n] = 1;
    }
    
    const maxValue = Math.max(...Object.values(obj));
    const newObj = Object.keys(obj).filter((key) => obj[key] === maxValue);
    
    if (newObj.length !== 1) return -1;
    return parseInt(newObj[0]);
}