function solution(n, arr1, arr2) {
const parseBinary = (arr) => {
  return arr.map((v) => v.toString(2).padStart(n, "0"));
};

const binArr1 = parseBinary(arr1);
const binArr2 = parseBinary(arr2);

const newArr = binArr1.map((v, i1) =>
  [...v].map((v, i2) => (binArr2[i1][i2] === "1" ? "1" : v)).join("")
);

return (
  newArr.map((v) =>
    v.replace(/0|1/g, (match) => {
      if (match === "0") {
        return " ";
      } else if (match === "1") {
        return "#";
      }
    })
  )
);
}
