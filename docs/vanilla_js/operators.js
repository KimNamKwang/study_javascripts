const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt"; //삼항연산자

let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

let add = inputs[0] + inputs[1];
let minus = inputs[0] - inputs[1];
let mul = inputs[0] * inputs[1];
let div = inputs[0] / inputs[1];
let divElse = inputs[0] % inputs[1];

console.log(add);
console.log(minus);
console.log(mul);
console.log(Math.floor(div));
console.log(divElse);
