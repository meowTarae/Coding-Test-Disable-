function solution(order) {
    return [...String(order)].map(v=>parseInt(v)===0?1:v).filter((v) => parseInt(v) % 3 === 0).length;
}