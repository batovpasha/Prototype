'use strict';

class Line {
  constructor(lineName, length) {
    this.lineName = lineName;
    this.length = length;
  }
  expandedLength(length) {
    this.length += length;
  }
  toString() {
    console.log(`now line '${this.lineName}' length = ${this.length}`);
  }
}

const line = new Line('a', 34);

console.log(`line '${line.lineName}' length = ${line.length}`);

line.expandedLength(343);
line.toString();
