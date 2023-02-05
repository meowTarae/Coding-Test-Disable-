function solution(price) {
    const check = parseInt(price / 100000);
    
    return (
      check >= 1 && check < 3
          ? parseInt(price * 0.95)
          : check >= 3 && check < 5
          ? parseInt(price * 0.9)
          : check >= 5
          ? parseInt(price * 0.8)
          : price
    );
}