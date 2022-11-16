const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/step6.txt"; //삼항연산자
let inputs = fs.readFileSync(filepath).toString().split("\n").map(Number);

let loops = inputs.length;

let max_num = inputs[0];
let min_num = inputs[0];

for (let i = 0; i < loops; i++) {
  if (max_num <= inputs[i]) {
    max_num = inputs[i];
  }
  if ((min_num) => inputs[i]) {
    min_num = inputs[i];
  }
}

let where = inputs.indexOf(max_num) + 1;
console.log(max_num);
console.log(where);
