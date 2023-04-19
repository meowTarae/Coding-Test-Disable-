function solution(s) {
    if (s.length === 4 || s.length === 6) {
        const len = [...s].filter((v) => Number.isInteger(+v)).length;
        // parseInt()로 숫자인지 아닌지를 체크하려했으나, 
        // 0이 들어올 경우 false처리되어서 isInteger()로 처리했음.
        return (s.length === len ? true : false);
    }
    else return false;
}