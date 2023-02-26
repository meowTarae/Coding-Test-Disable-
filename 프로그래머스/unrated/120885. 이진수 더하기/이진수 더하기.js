function solution(bin1, bin2) {
    const binToDec = (num) => {
  return parseInt(num, 2);
};
const decToBin = (num) => {
  return num.toString(2);
};

const dec1 = binToDec(parseInt(bin1));
const dec2 = binToDec(parseInt(bin2));
    return decToBin(dec1 + dec2)
}