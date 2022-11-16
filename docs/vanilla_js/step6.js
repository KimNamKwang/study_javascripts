// 최솟값, 최댓값은 object
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/step6.txt"; //삼항연산자
let inputs = fs.readFileSync(filepath).toString().split("\n");

let loops = inputs[0];
let numbers = [];
numbers = inputs[1].split(" ").map(Number);

let max_num = numbers[0];
let min_num = numbers[0];

for (let i = 0; i <= loops; i++) {
  if (max_num < numbers[i]) {
    max_num = numbers[i];
  }
  if (min_num > numbers[i]) {
    min_num = numbers[i];
  }
}

let statistics_obj = { min: min_num, max: max_num };
statistics_obj[`min`];
statistics_obj[`max`];

console.log(statistics_obj.min);
console.log(statistics_obj.max);
