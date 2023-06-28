function solution(s) {
    let [count, deleted] = [0,0];
    
    while(s!='1'){
        count++;
        deleted += [...s].filter(v=>!+v).length;
        
        s = [...s].filter(v=>+v).length.toString(2);
    }
    
    return [count, deleted];
}