const fs = require("fs");
const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/javascriptWithPoll.txt";

let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let str = "";

// 처리

// forEach
// questions_list.forEach((args) => console.log(args));

// let arrowFunction = (element) => {
//   console.log(element);
// };

// if ((answerList[i].questionUid = "Q1")) {
//   console.log(answerList[i].exampleUid);
// }

console.log();
// 문항번호, 설문, 사용자 답 출력.
for (let i = 0; i < questions_list.length; i++) {
  console.log(
    questions_list[i].orders + "." + questions_list[i].questions + "\n"
  );

  // if (answerList[i].questionUid == "Q1" && ) {
  //   console.log(answerList[i].orders);
  // }
  for (let j = 0; j < answerList.length; j++) {
    if (answerList[j].questionUid == "Q1") {
      for (let a = 0; a < example_list.length; a++) {
        if (answerList[j].exampleUid == example_list[a].example_uid) {
          console.log(example_list[a].example);
        }
      }
    } else if (answerList[j].questionUid == "Q2") {
      for (let a = 0; a < example_list.length; a++) {
        if (answerList[j].exampleUid == example_list[a].example_uid) {
          console.log(example_list[a].example);
        }
      }
    } else if (answerList[j].questionUid == "Q3") {
      for (let a = 0; a < example_list.length; a++) {
        if (answerList[j].exampleUid == example_list[a].example_uid) {
          console.log(example_list[a].example);
        }
      }
    } else if (answerList[j].questionUid == "Q4") {
      for (let a = 0; a < example_list.length; a++) {
        if (answerList[j].exampleUid == example_list[a].example_uid) {
          console.log(example_list[a].example);
        }
      }
    } else if (answerList[j].questionUid == "Q5") {
      for (let a = 0; a < example_list.length; a++) {
        if (answerList[j].exampleUid == example_list[a].example_uid) {
          console.log(example_list[a].example);
        }
      }
    }
  }
  // "답) " +
  // inputs[i]
}
console.log();

// function printQuestions(...args) {
//   let restParam = (arg) => {
//     console.log(`${arg}`);
//   };

//   args.forEach(restParam);
// }

// printQuestions(
//   questions_list[0].questions_uid +
//     "." +
//     questions_list[0].questions +
//     "\n" +
//     "답) " +
//     questions_list[0].orders
// );
// printQuestions(
//   questions_list[1].questions_uid +
//     "." +
//     questions_list[1].questions +
//     "\n" +
//     "답) " +
//     questions_list[1].orders
// );
// printQuestions(
//   questions_list[2].questions_uid +
//     "." +
//     questions_list[2].questions +
//     "\n" +
//     "답) " +
//     questions_list[2].orders
// );
// printQuestions(
//   questions_list[3].questions_uid +
//     "." +
//     questions_list[3].questions +
//     "\n" +
//     "답) " +
//     questions_list[3].orders
// );
// printQuestions(
//   questions_list[4].questions_uid +
//     "." +
//     questions_list[4].questions +
//     "\n" +
//     "답) " +
//     questions_list[4].orders
// );

// console.log("--------------- 설문자 선택 ----------------");
