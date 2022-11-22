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

let queryList = document.querySelector("#list");
let products;
productsData.forEach((productData, index) => {
  products += `<div class='product'>${productData["title"]} : ${productData["weight"]} </div> `;
});

queryList.innerHTML = products;
