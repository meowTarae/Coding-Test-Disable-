function solution(n, lost, reserve) {
    const newLost = lost.filter((v) => !reserve.includes(v)).sort((a, b) => a - b);
    const newReserve = reserve.filter((v) => !lost.includes(v)).sort((a, b) => a - b);
    
    for (let i = 0; i < newLost.length; i++) {
      for (let j = 0; j < newReserve.length; j++) {
        if (newLost[i] + 1 === newReserve[j] || newLost[i] - 1 === newReserve[j]) {
          newLost[i] = "ok";
          newReserve[j] = "ok";
        }
      }
    }
    
    return n - newLost.filter((v) => v !== "ok").length;
}
/*
    1. 동일 요소 제거
    2. 정렬을 하지 않으면 안되는 이유?
        [2, 4, 6], [5, 3, 1]
        위 케이스일때 정렬했으면 다 날릴 수 있는데
        정렬 안해놓으면 하나 못 날림
        
        때문에 정렬을 하자
    3. lost의 원소들을 reserve 원소들과 하나하나 비교해보자
        reseve꺼는 ok로 변환하자
        lost꺼는 ok로 변환하자
    4. return n - lost의 ok 갯수 
*/
