function solution(n) {
    const storage = [0, 1];
    
    for(let i=2; i<=n; i++){
        storage[i] = (storage[i-1] + storage[i-2]) % 1234567;
    }

    return (storage[n-1] + storage[n-2]) % 1234567;
}