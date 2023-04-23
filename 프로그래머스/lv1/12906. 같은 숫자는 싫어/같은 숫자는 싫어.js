function solution(arr)
{
    // return (arr.filter((v, i) => v !== arr[i - 1])); 안됨
    // arr 배열을 필터링하는 동안, arr 배열 자체가 변경되기때문에 시간이 오래걸림
    // !==는 타입과 값 둘 다 신경쓰기 때문에 시간이 더 걸리는듯..?
    
    // return (arr.filter((v, i) => v != arr[i - 1])); 됨
    // return (arr.filter((v, i, array) => v !== array[i - 1])); 됨
    return (arr.filter((v, i) => v != arr[i - 1]));
}