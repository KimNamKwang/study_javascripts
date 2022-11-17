// function name(parameter1,parameter2,parameter3){
//    code;
// return;
// }
{
  let sum_num = sum(1, 3);
  sum_num = sum(3, 5);
  sum_num = sum(6, 9);
  let sum_functions = sum(1, 3);
}

// normal function
function sum(item_first, item_second) {
  return item_first + item_second;
}

// anonymous function 펑션의 이름이 없고 변수에다가 담는다.
let calculatesum = function (item_first, item_second) {
  return item_first + item_second;
};

console.log(`${calculatesum(5, 7)}`);

// Arrow Fuction 아래처럼 화살표 사용하면 function이라는 글자를 안 써도 됌
let calculatesum_second = (item_first, item_second) => {
  console.log();
  return item_first + item_second;
};

let result = calculatesum_second(7, 8); //아래와 같은 것임.
console.log(`${calculatesum_second(7, 8)}`);

// rest parameter 가변파라미터
function printRestParams(...args) {
  let restParam = (arg) => {
    console.log(`arg : ${arg}`);
  };

  args.forEach(restParam);
}

printRestParams(2, 4, 5);
printRestParams(2, 4, 5, 6, 7);
