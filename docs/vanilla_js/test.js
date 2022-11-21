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
  { example_uid: "E5", example: "(5)매우 그렇다", orders: 5 },
  { example_uid: "E1", example: "(1)전혀 아니다", orders: 1 },
  { example_uid: "E4", example: "(4)그렇다", orders: 4 },
  { example_uid: "E2", example: "(2)아니다", orders: 2 },
  { example_uid: "E3", example: "(3)보통이다", orders: 3 },
];

let answer_list = [
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

let idx;
let compare; // 비교변수
for (idx = 0; idx < answer_list.length; idx++) {
  //let answer_string = 에다가 `== : ${answer_list[idx]["exampleUid"]}` 을 담아서 아래 콘솔에서는 변수로 출력하기
  if (compare != answer_list[idx]["questionUid"]) {
    console.log(`!= : ${answer_list[idx]["questionUid"]}`);
    console.log(`!= : ${answer_list[idx]["exampleUid"]}`);
  } else {
    console.log(`== : ${answer_list[idx]["exampleUid"]}`);
  }
  compare = answer_list[idx]["questionUid"];
}

console.log(`answer_list.length : ${answer_list.length}, idx : ${idx}`);
