class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
class Student extends Person {
  constructor(name, age, gender, major) {
    super(name, age, gender);
    this.major = major;
  }
  getDetails() {
    console.log(
      `Name: ${this.name}
Age: ${this.age}
Gender: ${this.gender}
Major: ${this.major}`
    );
  }
}
let student1 = new Student("Pete", 15, "Male", "Math");
let student2 = new Student("Julia", 18, "Female", "Philosophy");

student1.getDetails();
student2.getDetails();
