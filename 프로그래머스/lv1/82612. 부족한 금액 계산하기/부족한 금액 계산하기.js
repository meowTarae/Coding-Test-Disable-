function solution(price, money, count) {
    const result =
     Array(count)
        .fill()
        .reduce((acc, _, i) => acc + price * (i + 1), 0) - money;

    return (result < 0 ? 0 : result);
}