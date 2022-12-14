// Assignment --

// 1. Write a program to print a array of five names in reverses order.

console.log("1. Print a array of five names in reverses order");
let names = ["Sandesh", "Aditi", "Suresh", "Aakash", "Sukruthi"];
for (let i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}

// 2. Create a array of  country objects having name capital and population as properties.
// Print the countries whose population is less than 2000

console.log("2. Countries whose population is less than 2000:");

let countries = [
  {
    name: "India",
    capital: "Delhi",
    population: 4000,
  },
  {
    name: "Bangladesh",
    capital: "Dhaka",
    population: 1800,
  },
  {
    name: "Pakistan",
    capital: "Islamabad",
    population: 3000,
  },
  {
    name: "Nepal",
    capital: "Kathmandu",
    population: 1200,
  },
  {
    name: "China",
    capital: "Beijing",
    population: 5000,
  },
  {
    name: "Bhutan",
    capital: "Thimphu",
    population: 800,
  },
];

for (let a = 0; a < countries.length; a++) {
  if (countries[a].population < 2000) {
    console.log(countries[a].name);
  }
}
