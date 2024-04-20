/*  
Object Constructors : Started with Pascal case. In a constructor function this does not have a value. It is a substitute for the new object. 
The value of this will become the new object when a new object is created. Objects of the same type are created by calling the constructor function with the new keyword:
*/

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

/*
Factory Function: When a function creates and returns a new object, it is called a factory function. 
*/

function createPerson(firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName,
      getFullName() {
        return firstName + ' ' + lastName;
      },
    };
  }
  
  let person1 = createPerson('John', 'Doe');
  let person2 = createPerson('Jane', 'Doe');
  
  console.log(person1.getFullName());
  console.log(person2.getFullName());

/*
Object.create() method : The Object.create() method creates a new object using an existing object as the prototype of the new object:
Object.create(proto, [propertiesObject])
*/
  
var personActions = {
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    },
  };
  
  function createPerson2(firstName, lastName) {
    let person = Object.create(personActions);
    person.firstName = firstName;
    person.lastName = lastName;
    return person;
  }
// Now, you can create person objects and call the methods of the personActions object:

let person11 = createPerson2('John', 'Doe');
let person22 = createPerson2('Jane', 'Doe');

console.log(person11.getFullName());
console.log(person22.getFullName());

  