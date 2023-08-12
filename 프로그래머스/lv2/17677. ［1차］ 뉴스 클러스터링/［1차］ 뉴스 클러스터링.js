function solution(str1, str2) {
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();

    if(s1 === s2) return 65536;
    
    const storage1 = [];
    const storage2 = [];
    
    const regex = /[a-z]/g;
    const divideWord = (str,arr) =>{
        for(let i=0; i<str.length-1; i++){
            const word = str[i]+str[i+1];
            if(word.match(regex)?.join('') === word)
                arr.push(word);
        }
    }
    divideWord(s1, storage1)
    divideWord(s2, storage2)

    let count = 0;
    for(let ele of storage1){
        const index = storage2.indexOf(ele);
        if(index >= 0){
            storage2.splice(index, 1);
            count++;
        }
    }    
    
    return ~~(count / (storage1.length + storage2.length) * 65536);
}