const fs = require("fs");
const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/cases/javascriptWithPoll_us.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const questions_list = [
  {
    //이 부분은 object를 감싸고 있는 배열이기때문에 index값으로 접근해야한다
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
    //이 안의 부분은 object이기 때문에 key값으로 접근 가능하다
    questions_uid: "Q1",
    order: 1,
  },
  {
    question: "주문시 직원은 고객님께 친절 하였습니까?",
    questions_uid: "Q2",
    order: 2,
  },
  {
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    questions_uid: "Q3",
    order: 3,
  },
  {
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 4,
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 5,
  },
];

const answer_list = [
  { answer: "전혀 아니다", answer_uid: "E1", order: 1 },
  { answer: "아니다", answer_uid: "E2", order: 2 },
  { answer: "보통이다", answer_uid: "E3", order: 3 },
  { answer: "그렇다", answer_uid: "E4", order: 4 },
  { answer: "매우 그렇다", answer_uid: "E5", order: 5 },
];

const questions_answers = [
  { questions_uid: "Q1", answer_uid: "E1" },
  { questions_uid: "Q1", answer_uid: "E2" },
  //   { questions_uid: "Q1", answer_uid: "E3" },
  { questions_uid: "Q2", answer_uid: "E1" },
  { questions_uid: "Q2", answer_uid: "E2" },
  { questions_uid: "Q2", answer_uid: "E3" },
  //   { questions_uid: "Q2", answer_uid: "E4" },
  { questions_uid: "Q3", answer_uid: "E1" },
  { questions_uid: "Q3", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E1" },
  { questions_uid: "Q4", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E3" },
  { questions_uid: "Q4", answer_uid: "E4" },
  { questions_uid: "Q4", answer_uid: "E5" },
  { questions_uid: "Q5", answer_uid: "E1" },
  { questions_uid: "Q5", answer_uid: "E2" },
  { questions_uid: "Q5", answer_uid: "E3" },
];

// 아래처럼 오브젝트로 담는것이 정석.

//1차 처리 : [Q1, Q2, Q3, Q4, Q5]
//2차 처리 : Array in Array [[Q1, E1, E2],[Q2, E1, E2, E3],[Q3, E1, E2]... ]
//3차 처리 : obvect in Array [{questions_uid: Q1, answer_uid : E1, E2}]

let question_compare; //idx가 0일때 -1이 되기 때문에 만들어줌
let questions = {}; // 내부 묶음
let answer_uids = []; // 내부 설문 답변 묶음
let polls = []; // 데이터 전체를 묶음

for (let idx = 0; idx < questions_answers.length; idx++) {
  if (question_compare != questions_answers[idx]["questions_uid"]) {
    if (Object.keys(questions).length > 0) {
      questions["answer_uids"] = answer_uids;
      polls.push(questions);
      questions = {};
      answer_uids = [];
    }

    // console.log(`!= : ${questions_answers[idx]["questions_uid"]}`);
    // console.log(`!= : ${questions_answers[idx]["answer_uid"]}`);
    questions["questions_uid"] = questions_answers[idx]["questions_uid"];
    answer_uids.push(questions_answers[idx]["answer_uid"]);
  } else {
    // console.log(`== : ${questions_answers[idx]["answer_uid"]}`);
    answer_uids.push(questions_answers[idx]["answer_uid"]);
    if (idx + 1 >= questions_answers.length) {
      //마지막에 Q5를 넣어주는 구문
      questions["answer_uids"] = answer_uids;
      polls.push(questions);
    }
  }
  question_compare = questions_answers[idx]["questions_uid"]; // 이전 uid 입력
}

//후보군을 만들어놓는게 좋다.
console.log(`${polls}`);

//출력
// [.. 전체를 감싼 것은 array
// {questions_uid: Q1, answer_uid : [E1, E2]} 오브젝트-키로 접근
// {questions_uid: Q2, answer_uid : [E1, E2]}
// ....]
//polls[0]['questions_uid']
//polls[0]['answer_uid'][0] //array기 때문에 인덱스 번호 필요.
//polls[0]['answer_uid'][1] //array기 때문에 인덱스 번호 필요.

//polls[1]['questions_uid']
//polls[1]['answer_uid'][0] //array기 때문에 인덱스 번호 필요.
//polls[1]['answer_uid'][1] //array기 때문에 인덱스 번호 필요.
//polls[1]['answer_uid'][2] //array기 때문에 인덱스 번호 필요.

//설문 문항을 가져오는 function
//아래처럼 출력해보기
//Q1. 해당 매장을 방문시 매장은 청결 하였습니까?
//1. E1
//2. E2
//...
function getQuestionsByUid(question_uid) {
  question_desc = []; //내부코드를 잘못 짬. 수정해야함.
  for (let idx = 0; idx < questions_list.length; idx++) {
    if (question_uid == questions_list[idx].questions_uid) {
      (question_desc = questions_list[idx].order), questions_list[idx].question;
    }
  }
  return question_desc;
}

//iterator방법
for (/*item*/ poll of polls) {
  // poll == polls[idx]
  console.log(`${poll["questions_uid"]}`);
  let answer_uids = poll["answer_uids"];
  answer_uids.forEach((answer_uid /*item도 가능*/, index) => {
    console.log(`${index + 1}. ${answer_uid}`);
  });
}

console.log();
// for (/*item*/ poll of polls) {
//   // poll == polls[idx]
//   console.log(`${poll["questions_uid"]}`);
//   let answer_uids = poll["answer_uids"];
//   answer_uids.forEach((answer_uid /*item도 가능*/, index) => {
//     console.log(`${index + 1}. ${answer_uid}`);
//   });
// }
