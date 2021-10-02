const fs = require('fs');

const people = [];

const genders = ['M', 'F'];
const maleNames = ['John', 'Jerzy', 'Jurand', 'Jonathan', 'Joshua'];
const femaleNames = ['Anna', 'Joanna', 'Marianna', 'Zuzanna', 'Julianna'];
const lastNames = ['Doe', 'Foe', 'Zoe', 'Li', 'Xao'];

// age – wiek, losujemy wartość od 18 do 78.

function randAge() {
    return Math.floor(Math.random() * (78-18) + 18);
}

function chooseRandom (arr) {
  const len = arr.length;
  const randomIdx = Math.floor(Math.random()*len);
  return arr[randomIdx];
}

for (let i=0; i<20; i++) {
  const gender = chooseRandom(genders);
  const person = {
    name: gender == 'M' ? chooseRandom(maleNames) : chooseRandom(femaleNames),
    lastNames: chooseRandom(lastNames),
    age: randAge(),
    gender: gender
  };
  people.push(person);
};

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw console.log('Something went wrong');
  console.log('File has been successfully generated! Check people.json');
});
