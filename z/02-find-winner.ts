import assert from "assert";

let input1 = `
-x-
x-x
000
`;

let input2 = `
00x
--x
-0x
`;

let input3 = `
-x0
x0x
0-0
`;

let input4 = `
00x
x00
0xx
`;

let input5 = `
x--
-0-
x-0
`;

function solution(firstArg: string) {
  console.log("Go!");
  return "кто-то выиграл?";
}

console.log(solution(input1));
// assert.deepStrictEqual(solution(input1), "выиграл 0");
// assert.deepStrictEqual(solution(input2), "выиграл x");
// assert.deepStrictEqual(solution(input3), "выиграл 0");
// assert.deepStrictEqual(solution(input4), "ничья");
// assert.deepStrictEqual(solution(input5), "игра еще не завершена");
