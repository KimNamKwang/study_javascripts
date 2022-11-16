const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/step4.txt"; //삼항연산자
let inputs = fs.readFileSync(filepath).toString();

// 백준 9498번

// let grade = parseInt(inputs);
// if (90 <= grade && grade <= 100) {
//   console.log("A");
// } else if (80 <= grade && grade <= 89) {
//   console.log("B");
// } else if (70 <= grade && grade <= 79) {
//   console.log("C");
// } else if (60 <= grade && grade <= 69) {
//   console.log("D");
// } else {
//   console.log("F");
// }

//백준 2753번

let year = parseInt(inputs);

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("1");
} else {
  console.log("0");
}
