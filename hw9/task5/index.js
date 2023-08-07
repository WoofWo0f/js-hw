const person = {
  _firstName: "",
  _lastName: "",

  get firstName() {
    return this._firstName;
  },

  set firstName(value) {
    this._firstName = value;
  },

  get lastName() {
    return this._lastName;
  },

  set lastName(value) {
    this._lastName = value;
  },

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  },

  set fullName(value) {
    [this._firstName, this._lastName] = value.split(" ");
  },
};

person.firstName = "Vasya";
person.lastName = "Pupkin";

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

person.fullName = "John Doe";
console.log(person.fullName);

//---------------------------------------------

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get diameter() {
    return this._radius * 2;
  }

  set diameter(diameter) {
    this._radius = diameter / 2;
  }
}

const circle = new Circle(10);
console.log(circle.radius);
console.log(circle.diameter);

circle.diameter = 15;
console.log(circle.radius);
console.log(circle.diameter);
