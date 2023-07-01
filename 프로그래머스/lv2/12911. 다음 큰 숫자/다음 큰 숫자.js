function solution(n) {
    const nCount = [...n.toString(2)].filter(v=>+v).length;
    let count = 0;
    
    const recur = (num) => {
        num++;
        count = [...num.toString(2)].filter(v=>+v).length;
        return nCount == count ? num : recur(num);
    }
    return recur(n)
}