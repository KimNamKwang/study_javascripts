const fs = require("fs");
const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/step6_5597.txt"; //삼항연산자
let inputs = fs.readFileSync(filepath).toString().split("\n").map(Number);

inputs.sort(function (a, b) {
  return a - b;
});

console.log(inputs);

// console.log();
for (i = 1; i <= inputs.length; i++) {
  if (i == inputs[i - 1]) {
    console.log(i);
  }
}
