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
