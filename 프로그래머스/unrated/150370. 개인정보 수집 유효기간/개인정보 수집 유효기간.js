function solution(today, terms, privacies) {
    const arr_today = today.split('.');
    const arr_privacies = [];
    
    const getIndex = (word) =>{
        for(let idx=0; idx<terms.length; idx++){
            if (terms[idx][0] == word)
                return idx;
        }
    }
    
    for(let i=0; i<privacies.length; i++){
        const date = privacies[i].slice(0, 10).split('.');
        const index = getIndex(privacies[i].slice(-1));
        date[1] = +date[1] + +terms[index].slice(2);
        if (+date[1] > 12){
            date[0] = +date[0] + parseInt(date[1] / 12);
            date[1] = date[1] % 12;
            if (date[1] === 0){
                date[0]--;
                date[1]=12;
            }
        }
        arr_privacies.push(date);
    }
    
    const result = [];
    for(let j=0; j<arr_privacies.length; j++){
        const [p_y, p_m, p_d] = arr_privacies[j];
        const [t_y, t_m, t_d] = arr_today;
        let cnt = 0;
        
        if (p_y < t_y)
            cnt++;
        else if (p_y == t_y && p_m < t_m)
            cnt++;
        else if (p_y == t_y && p_m == t_m && p_d <= t_d)
            cnt++;
        
        if (cnt>0)
            result.push(j+1);
    }
    return result;
}
