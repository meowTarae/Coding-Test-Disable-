function rank(num){
    switch (num){
        case 6:
            return 1;
        case 5:
            return 2;
        case 4:
            return 3;
        case 3:
            return 4;
        case 2:
            return 5;
        default :
            return 6;
    }
}

function solution(lottos, win_nums) {
    let cnt = 0;
    win_nums.map(v1=>{
        lottos.map(v2=>v1===v2 && cnt++)
    })
    const max = cnt + lottos.filter(v=>v===0).length;
    const min = cnt;
    
    return [rank(max), rank(min)];
}