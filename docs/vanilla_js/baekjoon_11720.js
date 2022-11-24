const fs = require("fs");

const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/baekjoon_11720.txt";
let inputs = fs.readFileSync(filepath).toString().split(" ").map(Number);
