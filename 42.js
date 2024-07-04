// create an object 'person' with properties like name and age.then create a new object student that inherits from person and has additional property studentId. add a method to the person object and demonstrate that student has also access to it.
const Person = {
    name:"john",
    age:20,

    introduce:function () {
        return `Hi my name is ${this.name} and i am ${this.age}`
    }
}

const Student = Object.create(Person)
Student.studentId = '123'


console.log(Student.name);
console.log(Student.studentId);

console.log(Student.introduce());