function solution(id_list, report, k) {
    // 각 유저가 리포트한 사람을 담을 변수
    const totalReport = {};
    // 개인당 신고당한 횟수
    const countUserReported = {};
    for(const name of id_list){
        totalReport[name] = [];
        countUserReported[name] = 0;
    }

    // totalReport에 맞는 값들로 초기화
    for(let i=0; i<report.length; i++){
        const [who, reported] = report[i].split(' ');
        totalReport[who].push(reported);
    }
    
    for(const e in totalReport){
        // 중복 제거
        const reportArr = [...new Set(totalReport[e])];
        reportArr.forEach(v=>countUserReported[v]++);
    }
    
    const result = Array(id_list.length).fill(0);
    for(const user in countUserReported){
        const count = countUserReported[user];
        if (count >= k){
            for(const u in totalReport){
                const arr = totalReport[u];
                arr.includes(user) && result[id_list.indexOf(u)]++;
            }
        }
    }
    
    return (result);
}
