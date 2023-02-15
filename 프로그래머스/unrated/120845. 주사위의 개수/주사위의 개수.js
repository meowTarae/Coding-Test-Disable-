function solution(box, n) {
    const x = ~~(box[0]/n);
    const y = ~~(box[1]/n);
    const z = ~~(box[2]/n);
    return x*y*z
}