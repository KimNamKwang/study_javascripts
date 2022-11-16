const fs = require("fs");
const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/step6_5597.txt"; //삼항연산자
let inputs = fs.readFileSync(filepath).toString().split("\n").map(Number);

console.log(inputs);

for (i = 1; i <= 30; i++) {
  if (!1 >= inputs[i] <= 30) {
    console.log(inputs[i]);
  }
}
