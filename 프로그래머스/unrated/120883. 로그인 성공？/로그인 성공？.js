function solution(id_pw, db) {
    const arr = db.filter((v) => v[0] === id_pw[0]).flat();
    return   arr.length === 0 ? "fail" : arr[1] === id_pw[1] ? "login" : "wrong pw"

}