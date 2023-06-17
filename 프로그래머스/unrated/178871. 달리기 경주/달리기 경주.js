function solution(players, callings) {
    const currentRank = {};
    for(let i=0; i<players.length; i++){
        currentRank[players[i]] = i;
    }
    
    for(let i=0; i<callings.length; i++){
        const index = currentRank[callings[i]]; 
        const temp = players[index-1]; 
        
        currentRank[temp] = index;
        currentRank[callings[i]] = index-1;
        
        players[index-1] = callings[i];
        players[index] = temp;
    }
    return players;
}
