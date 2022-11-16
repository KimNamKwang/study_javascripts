const fs = require("fs");
const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/step5_15596.txt";
let inputs = fs.readFileSync(filepath).toString().split(" ").map(Number);

let loops = inputs.length;

console.log(inputs);

function sum(item_first, item_second) {
  return item_first + item_second;
}

let sum_functions = sum(1, 3);
