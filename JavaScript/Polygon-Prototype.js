'use strict';

const { performance } = require('perf_hooks');

function Polygon(numberOfEdges, name) {
  this.numberOfEdges = numberOfEdges;
  this.name = name;
}

Polygon.prototype.changePolygon = function(n) {
  this.numberOfEdges += n;
};

Polygon.prototype.toString = function() {
  console.log(`now it's ${this.numberOfEdges}-gon`);
};
const polygon = new Polygon(10, 'decagon');

console.log(`we have ${polygon.numberOfEdges}-gon`);

const performanceTime = [];

for (let i = 0; i < 11; i++) {
  const t1 = performance.now();
  polygon.changePolygon(7);
  polygon.toString();
  const t2 = performance.now();
  performanceTime.push((t2 - t1).toFixed(3));
}

console.log('median of time performance : ' + performanceTime[5]);
