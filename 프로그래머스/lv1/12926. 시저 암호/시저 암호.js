function solution(s, n) {
    const arr = [];
    for (const i of s) {
      if (i === " ") {
        arr.push(i);
        continue;
      }
    
      let ASCII = i.charCodeAt();
      if (ASCII >= 97) {
        ASCII + n >= 123 ? (ASCII = ASCII + n - 26) : (ASCII += n);
      } else {
        ASCII + n >= 91 ? (ASCII = ASCII + n - 26) : (ASCII += n);
      }
      arr.push(String.fromCharCode(ASCII));
    }
    
    return (arr.join(""));
}