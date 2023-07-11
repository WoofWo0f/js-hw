class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  getDetails() {
    console.log(
      `Name: ${this.name}
Salary: ${this.salary}
Department: ${this.department} `
    );
  }
}

class Developer extends Employee {
  constructor(name, salary, progLang) {
    super(name, salary);
    this.progLang = progLang;
  }
  getDetails() {
    console.log(
      `Name: ${this.name}
Salary: ${this.salary}
Programming language: ${this.progLang} `
    );
  }
}

let manager1 = new Manager("John", "1000$", "Supply");
let manager2 = new Manager("Victoria", "1200$", "Sales");

let developer1 = new Developer("Chris", "2222$", "Javascript");
let developer2 = new Developer("Hanna", "3333$", "Python");

manager1.getDetails();
manager2.getDetails();
developer1.getDetails();
developer2.getDetails();
