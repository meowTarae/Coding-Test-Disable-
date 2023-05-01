function solution(s) {
    let str = s;
    str = str.replace(/zero/gi, 0);
    str = str.replace(/one/gi, 1);
    str = str.replace(/two/gi, 2);
    str = str.replace(/three/gi, 3);
    str = str.replace(/four/gi, 4);
    str = str.replace(/five/gi, 5);
    str = str.replace(/six/gi, 6);
    str = str.replace(/seven/gi, 7);
    str = str.replace(/eight/gi, 8);
    str = str.replace(/nine/gi, 9);
    
    return (parseInt(str));
}