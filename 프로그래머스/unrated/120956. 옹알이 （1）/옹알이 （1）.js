function solution(babbling) {
const word = ["aya", "ye", "woo", "ma"];

const arr = babbling.map((v) => {
  let newWord = v;
  for (let i = 0; i < word.length; i++) {
    newWord = newWord.replaceAll(word[i], " ");
  }
  return newWord;
});

let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i].trim() === "") {
    count++;
  }
}

return count
}