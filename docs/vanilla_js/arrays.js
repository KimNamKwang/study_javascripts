// Array == ArrayList와 비슷함
let fruits = ["apple", "banana", "orange", "melon"];
let numbers = [1, 2, 3, 4, 5];

let fruits_init = new Array(); // 초기화
fruits_init = []; // 초기화

// object == Hashmap과 비슷함
let objects = { name: "Tom", age: 4 };
let mixins_first = [1, 2, 3, "apple", 4, "melon"];
let mixins_second = [1, 2, 3, "apple", { name: "Tom", age: 4 }];
let mixins_third = [1, 2, 3, "banana", objects];
let mixins_fourth = [fruits, numbers];

const mixins_array = [
  ["apple", "banana"],
  ["orange", "mellon"],
  ["berry", "strawberry"],
];

let first = ["apple", "banana"];
let sec = ["orange", "mellon"];
let thr = ["berry", "strawberry"];

let mixins_list = { first, sec, thr };

console.log();
