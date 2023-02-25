function solution(spell, dic) {
    return   dic
    .map((v) => [...v].sort().join(""))
    .filter((v) => v === spell.sort().join("")).length >= 1
    ? 1
    : 2;
}