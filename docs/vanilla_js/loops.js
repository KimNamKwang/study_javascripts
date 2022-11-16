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
