function changeText() {
  let queryChangeText = document.querySelector("#changetext");
  queryChangeText.innerHTML = "Change Me";
}

let queryClickalert = document.querySelector("#clickalert");
//형식 //element.addEventListener(event, function,useCapture); //useCapture는 잘 안 쓰기도 함
queryClickalert.addEventListener("click", clickAlert);

function clickAlert() {
  alert("click on Me");
}

let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click", targetText);

function targetText(
  event /**event는 기본적으로 들어가는 파라미터이다. 어떤 것이든 입력을 의미 */
) {
  let queryTargetText = document.querySelector("#targetText");
  queryTargetText.innerHTML = "Target Text!";
}
