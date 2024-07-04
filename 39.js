// destructure and object to gets it's  properties 
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
}

// Old way
// const name = person.name;
// const age = person.age;

// New way
// const {name, age, city} = person;
// console.log(name, age, city); // John 30 New York

const {name,...age} = person;
console.log(age);