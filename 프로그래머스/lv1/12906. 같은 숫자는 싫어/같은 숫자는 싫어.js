function solution(arr)
{
    return (arr.filter((v, i,array) => v !== array[i - 1]));
}