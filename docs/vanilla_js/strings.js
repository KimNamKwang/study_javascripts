//operate number and string
let number_first = 3;
let string_second = "5";

console.log(number_first + string_second); // +를 사용하지말고 아래처럼 `` 백틱 사용.
let concat_string = `${number_first}${string_second}`;
console.log(concat_string);

string_second = "A";
console.log(number_first + string_second);

// Strings
let animal = "tiger";
console.log(`${animal}`);

animal.charAt(0);
("t");
animal = animal.replace("ti", "TI");
("TIger");
animal.charAt(0);

let sentence = " 5 2 6 ";
let trims = sentence.trim(); //trim == 공백제거
let splits = trims.split(" "); //split == 공백을 기준으로 나눠 배열만듬
let maps = splits.map(Number); // 각 배열을 String to Number
console.log(maps[0] + maps[1] + maps[2]); //합산함

let inputs = sentence.trim().split(" ").map(Number); //Chain function
console.log(inputs[0] + inputs[1] + inputs[2]);
