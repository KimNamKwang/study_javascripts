// let fs = require("fs");

// // let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// let readFileSync = fs.readFileSync("/dev/stdin");
// let toString = readFileSync.toString();
// let trim = toString.trim();
// let split = split.split(" ");

// console.log();

const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt"; //삼항연산자

let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

console.log(inputs[0] + inputs[1]);
