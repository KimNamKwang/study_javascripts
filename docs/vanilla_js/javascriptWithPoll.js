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

// 입력
const questions_list = [
  {
    questions_uid: "Q1",
    questions: "해당 매장을 방문시 매장은 청결 하였습니까?",
    orders: 1,
  },
  {
    questions_uid: "Q2",
    questions: "주문시 직원은 고객님께 친절 하였습니까?",
    orders: 2,
  },
  {
    questions_uid: "Q3",
    questions: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    orders: 3,
  },
  {
    questions_uid: "Q4",
    questions: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    orders: 4,
  },
  {
    questions_uid: "Q5",
    questions: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    orders: 5,
  },
];

const example_list = [
  { example_uid: "E5", example: "매우 그렇다", orders: 5 },
  { example_uid: "E1", example: "전혀 아니다", orders: 1 },
  { example_uid: "E4", example: "그렇다", orders: 4 },
  { example_uid: "E2", example: "아니다", orders: 2 },
  { example_uid: "E3", example: "보통이다", orders: 3 },
];

let answerList = [
  { questionUid: "Q1", exampleUid: "E1" },
  { questionUid: "Q1", exampleUid: "E2" },
  { questionUid: "Q1", exampleUid: "E3" },
  { questionUid: "Q2", exampleUid: "E1" },
  { questionUid: "Q2", exampleUid: "E2" },
  { questionUid: "Q2", exampleUid: "E3" },
  { questionUid: "Q2", exampleUid: "E4" },
  { questionUid: "Q3", exampleUid: "E1" },
  { questionUid: "Q3", exampleUid: "E2" },
  { questionUid: "Q4", exampleUid: "E1" },
  { questionUid: "Q4", exampleUid: "E2" },
  { questionUid: "Q4", exampleUid: "E3" },
  { questionUid: "Q4", exampleUid: "E4" },
  { questionUid: "Q4", exampleUid: "E5" },
  { questionUid: "Q5", exampleUid: "E1" },
  { questionUid: "Q5", exampleUid: "E2" },
  { questionUid: "Q5", exampleUid: "E3" },
];

// 처리

// forEach
questions_list.forEach((args) => console.log(args));

let arrowFunction = (element) => {
  console.log(element);
};

// if ((answerList[i].questionUid = "Q1")) {
//   console.log(answerList[i].exampleUid);
// }

console.log();
// 문항번호, 설문, 사용자 답 출력.
for (let i = 0; i < questions_list.length; i++) {
  console.log(
    questions_list[i].orders + "." + questions_list[i].questions + "\n"
  );

  while (answerList[i].questionUid == "Q1") {
    for (let j = 0; j < questions_list.length; j++) {
      if (answerList[i].exampleUid == example_list[i].example_uid) {
        console.log(example_list[i].orders, example_list[i].example);
      }
    }
    break;
  }
  // switch (answerList[i].questionUid) {
  //   case "Q1":
  //     break;
  //   case "Q2":
  //     console.log(answerList[i].exampleUid);
  //     break;
  //   case "Q3":
  //     console.log(answerList[i].exampleUid);
  //     break;
  //   case "Q4":
  //     console.log(answerList[i].exampleUid);
  //     break;
  //   case "Q5":
  //     console.log(answerList[i].exampleUid);
  //     break;
  //   default:
  //     break;
  // }
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
