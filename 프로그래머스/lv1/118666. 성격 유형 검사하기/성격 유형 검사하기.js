function solution(survey, choices) {
    const score = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    };

    for(let i=0; i<survey.length; i++){
        const [left, right] = [...survey[i]];
        const choicesNum = choices[i];
        if (choicesNum < 4){
            // score[left] += 2 - choicesNum/4;
            score[left] += Math.abs(4-choicesNum);
        }
        else if (choicesNum > 4){
            // score[right] += choicesNum/4;
            score[right] += Math.abs(4-choicesNum);
        }
    }
    
    let result = '';
    result += score.R >= score.T ? 'R' : 'T';
    result += score.C >= score.F ? 'C' : 'F';
    result += score.J >= score.M ? 'J' : 'M';
    result += score.A >= score.N ? 'A' : 'N';
    
    return result;
}