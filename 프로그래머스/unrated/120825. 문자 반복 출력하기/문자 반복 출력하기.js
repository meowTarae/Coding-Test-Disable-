function solution(my_string, n) {
    return (
  my_string
    .split("")
    .map((word) => word.repeat(n))
    .join("")
);
}