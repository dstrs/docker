import assert from "assert";

let input1 = `
2020, mercedes-benz, a-class
1997,Ford,E350
`;
let input2 = `
1997, mercedes-benz, E350
not same as
1997,Ford,E350
`;

function solution(firstArg: string) {
  return [];
}

assert.deepStrictEqual(solution(input1), [
  [2020, "mercedes-benz", "a-class"],
  [1997, "Ford", "E350"],
]);
assert.deepStrictEqual(solution(input2), [
  [2020, "mercedes-benz", "a-class"],
  ["not same as", "", ""],
  [1997, "Ford", "E350"],
]);
