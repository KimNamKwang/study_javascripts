//let animal = {key : value, key : value, key : value,} map의 형식
let animal = { name: "juju", species: "cat" }; //object

console.log(animal.name);

let animal_keys = Object.keys(animal); //리턴되는 값은 array.
for (let key of animal_keys) {
  console.log(`${key} : ${animal[key]}`); // == animal[`name`],animal[`species`]
}

console.log();

const animals_obj = [
  animal,
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];
