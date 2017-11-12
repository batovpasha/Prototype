'use strict';

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  const area = Math.PI * Math.pow(this.radius, 2);
  return area;
};

Circle.prototype.length = function() {
  const length = 2 * Math.PI * this.radius;
  return length;
};

const circle = new Circle(5);

console.log(circle.area());
console.log(circle.length());
