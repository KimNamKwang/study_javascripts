let querySingle = document.querySelector("#single");
// querySingle.addEventListener("click", singleEvent);
querySingle.addEventListener("click", (event) => {
  //arrow function .실무에서는 이런식
  singleEvent(event);
});
querySingle.addEventListener("double-click", singleEvent);

function singleEvent(event) {
  console.log(event);
  querySingle.innerHTML = "Take One Event";
}

let queryKeydown = document.querySelector("#keydown");
queryKeydown.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.code == "Enter") {
    keydownDesc(queryKeydown.value);
  }
  console.log(event.target);
});

function keydownDesc(desc) {
  let queryKeydownDesc = document.querySelector("#keydownDesc");
  queryKeydownDesc.innerHTML = desc;
}

let queryload = document.querySelector(
  "#keydownDesc" /**또는 Body에 걸어주기도 가능 */
);
queryload.addEventListener("load", queryLoad()); //앞으로도 Load는 이렇게 걸기.

function queryLoad() {
  queryload.innerHTML = "Done On Load";
}
