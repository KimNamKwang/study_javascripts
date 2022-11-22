// div.inner 태그 내부에 <div>hello</div>를 추가
// 프로그래밍 방식 적용
let queryinner = document.querySelector("#container > .inner");

//create element
let element = document.createElement("div");
let HelloText = document.createTextNode("Hello");

element.appendChild(HelloText);
queryinner.appendChild(element);

//inner html
let animal = { name: "dog", age: 10 };
let queryApp = document.querySelector("#app");
let item = "<div class='item'>" + animal["name"] + animal["age"] + "</div>";
//위 방식은 +에 '' 인지 ""인지 신경써야해서 매우 불편

//아래 ${} 활용방식이 편하다.
item = `<div class="item">${animal["name"]} ${animal["age"] + "</div>"}</div>`;
queryApp.innerHTML = item;

//<div list> 안에다가 넣기 </div>
const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 },
];

let snacks = document.querySelector("#list");
let insertProducts = `<div id="list">${productsData["title"]} ${productsData["weight"]}</div>`;

for (let i = 0; i < productsData.length; i++) {
  `<div id="list">${productsData[i]["title"]} ${productsData[i]["weight"]}</div>`;
}

let element1 = document.createElement("li");
let element2 = document.createElement("li");
let element3 = document.createElement("li");

let HelloText1 = document.createTextNode(
  `${productsData[0]["title"]} ${productsData[0]["weight"]}`
);

element1.appendChild(HelloText1);
snacks.appendChild(element);

// snacks.innerHTML;
//create element
// let element = document.createElement("div");
// let HelloText = document.createTextNode("Hello");

// element.appendChild(HelloText);
// queryinner.appendChild(element);