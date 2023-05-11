function solution(name, yearning, photo) {
return (
  photo.map((v1) => {
    return v1
      .map((v2) => (name.includes(v2) ? yearning[name.indexOf(v2)] : 0))
      .reduce((acc, cur) => acc + cur);
  })
);

}