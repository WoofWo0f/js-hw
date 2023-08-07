class Student {
  constructor(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }

  get averageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((accum, grade) => accum + grade, 0);
    return sum / this.grades.length;
  }
}

const student1 = new Student("Tony", "Stark", [7, 5, 3, 9]);
console.log(student1.averageGrade);
console.log(student1.fullName);

const student2 = new Student("Steve", "Rogers", [8, 7, 1]);
console.log(student2.fullName);

student2.fullName = "Peter Parker";
console.log(student2.fullName);

//------------------

const car = {
  engine: {
    _size: 1.4,
    _horsepower: 120,

    get horsepower() {
      return this._horsepower;
    },

    set horsepower(value) {
      this._horsepower = value;
    },
  },
};

console.log(car.engine.horsepower);

car.engine.horsepower = 140;
console.log(car.engine.horsepower);
