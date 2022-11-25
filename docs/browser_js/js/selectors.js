let queryLists = document.querySelectorAll(".list");
let queryList = document.querySelector(".list");

let pByTagName = document.getElementsByTagName("button");
console.log(`${pByTagName}`);
// pByTagName.innerHTML = "Reset";
let listByClassName = document.getElementsByClassName("list"); //elements 복수
console.log(`${listByClassName}`);

let titleById = document.getElementById("title"); //element 단수, id는 페이지상에서 유니크하기때문
titleById.innerHTML = "Title By Id";

let queryTitle = document.querySelector("#title");
queryTitle.innerHTML = "queryTitle"; //권장되는 방식

let queryItems = document.querySelectorAll(".item"); //클래스명은 .붙이기
queryItems.forEach((item, index) => console.log(item));
/** window. 는 생략가능*/
// let elementById = document.getElementById("selector");
// console.log(`elementById : ${elementById}`);
// elementById.innerHTML = "<b>Change selector</b>";

// change properties from querySelector
queryTitle.style.color = "blue";
queryTitle.style.fontSize = "2rem";
queryTitle.style.backgroundColor = "rgba(255, 0, 0, 0.5)";

let queryContent = document.querySelector("#contentId");
