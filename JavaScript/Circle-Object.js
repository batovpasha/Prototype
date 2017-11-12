'use strict';

const circle = {
  radius: 5,
  area() {
    const area = Math.PI * Math.pow(this.radius, 2);
    return area;
  },
  length() {
    const length = 2 * Math.PI * this.radius;
    return length;
  }
};

console.log(circle.area());
console.log(circle.length());
