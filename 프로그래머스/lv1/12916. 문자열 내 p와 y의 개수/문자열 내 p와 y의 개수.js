function solution(s){
const newstr = s.toLowerCase();
const lenP = [...newstr].filter((v) => v === "p").length;
const lenY = [...newstr].filter((v) => v === "y").length;
return (lenP === lenY ? true : false);
}