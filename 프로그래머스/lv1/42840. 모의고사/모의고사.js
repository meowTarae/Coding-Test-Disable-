function solution(answers) {
    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const intersection = (arr) => {
      return answers.filter((v, i) => v === arr[i % arr.length]).length;
    };
    
    const P1 = intersection(p1);
    const P2 = intersection(p2);
    const P3 = intersection(p3);
    
    return (
      [P1, P2, P3]
        .map((v, i) => (v === Math.max(...[P1, P2, P3]) ? i + 1 : ""))
        .filter((v) => v !== "")
    );
}