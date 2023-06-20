//Object orient programming

//constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastname;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return `${firstname} ${lastName}`;
  };
}

//using prototype

Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};
Person.prototype.getFullName = function () {
  return `${firstname} ${lastName}`;
};

//Class
//method is function inside of the class
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastname;
    this.dob = new Date(dob);
  }
  getBirthyear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${firstname} ${lastName}`;
  }
}

//Instantiate object
const person1 = new Person("John", "Doe", "4-3-1998");
console.log;

console.log(person1.getBirthYear);
