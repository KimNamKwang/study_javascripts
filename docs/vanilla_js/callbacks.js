console.log(`first`);
// console.log(`second`);
// setTimeout(functionRef, delay);
// function (){ anonymous형식

// }
setTimeout(function () {
  console.log(`setTimeout : second`); //setTimeout은 callback의 예제일뿐이다.
}, 2000);
console.log(`third`);

// 5 + 6
function plus(first, second) {
  return first + second;
}
plus(5, 6);
// 5 - 6
function minus(first, second) {
  return first - second;
}

minus(5, 6);

function callbackFunction(
  callback /** 콜백은 펑션이다. 여기서는 plus라고 생각, 33라인으로*/,
  first /**이 경우는 호출과 실행의 순서가 같기 때문에 완전한 callback은 아니다. 예제일뿐*/,
  second
) {
  let result = callback(first, second);
  console.log(`result : ${result}`);
}

callbackFunction(plus, 5, 6); //여기서 plus를 호출하면 plus.

callbackFunction(minus, 5, 6); //여기서 minus를 호출하면 minus.
