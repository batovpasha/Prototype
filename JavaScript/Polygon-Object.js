'use strict';

const { performance } = require('perf_hooks');

const polygon = {
  numberOfEdges: 10,
  name: 'decagon',
  changePolygon(n) {
    this.numberOfEdges += n;
  },
  toString() {
    if (this.numberOfEdges !== 10) {
      console.log(`now it's ${this.numberOfEdges}-gon`);
    }
    return;
  }
};

console.log(`we have ${polygon.numberOfEdges}-gon`);

const performanceTime = [];

for (let i = 0; i < 11; i++) {
  const t1 = performance.now();
  polygon.changePolygon(4);
  polygon.toString();
  const t2 = performance.now();
  performanceTime.push((t2 - t1).toFixed(3));
}

console.log('median of time performance : ' + performanceTime[5]);
