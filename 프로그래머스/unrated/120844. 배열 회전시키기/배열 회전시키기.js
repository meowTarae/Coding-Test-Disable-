function solution(numbers, direction) {
    return (direction==="right") ? [numbers.splice(numbers.length - 1, 1), ...numbers].flat() : [...numbers.filter((_, i) => i !== 0), numbers.splice(0, 1)].flat();
}