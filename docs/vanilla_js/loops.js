const animals = ["dog", "cat", "bird", "fish", "lizard"];

//normal방식
for (i = 0; i < animals.length; i++) {
  console.log(`${animals[i]}`);
}

// iterable
for (let animal of animals) {
  //animal은 for문 내에서 사용하기 위해서 만든 변수.
  console.log(`${animal}`);
}

const animals_obj = [
  //   animals,
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

for (let animal of animals_obj) {
  console.log(`${animal["name"]} , ${animal["species"]}`);
  console.log();
}

const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(`${car}`);
}
cars.forEach((car) => console.log(`${car}`));

// forEach
const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element)); //제일 많이 쓰는 방법

// Arrow Function
//                (파라미터부분) => {}부분
let arrowFunction = (element, index) => {
  console.log(`${element}, index ${index}`);
};
// const array11 =
// [{1,2,3},{4,5,6},{7,8,9}];

array1.forEach(arrowFunction);

// Normal Function
function elementNormal(element) {
  console.log(element);
}
array1.forEach(elementNormal);
