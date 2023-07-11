class Shape {
  constructor(name) {
    this.name = name;
  }
  getArea() {
    console.log("Метод getArea() должен быть реализован в подклассах");
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
  getArea() {
    console.log(3.14 * this.radius ** 2);
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
  getArea() {
    console.log(this.width * this.height);
  }
}

let shape1 = new Shape("blablabla");
let circle1 = new Circle("Circle", 10);
let rectangle1 = new Rectangle("Rectangle", 5, 10);

shape1.getArea();
circle1.getArea();
rectangle1.getArea();
