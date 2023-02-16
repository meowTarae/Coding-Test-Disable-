function solution(my_string) {
    let sum = 0;
    [...my_string].forEach((v) => {
      if (Number.isInteger(v - "")) sum += +v;
    });
    return sum
}