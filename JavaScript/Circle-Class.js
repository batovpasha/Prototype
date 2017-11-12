'use strict';

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    const area = Math.PI * Math.pow(this.radius, 2);
    return area;
  }
  length() {
    const length = 2 * Math.PI * this.radius;
    return length;
  }
}

const circle = new Circle(5);

console.log(circle.area());
console.log(circle.length());
