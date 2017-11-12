'use strict';

const line = {
  lineName: 'a',
  length: 20,
  expandedLength(x) {
    this.length += x;
  },
  toString() {
    console.log(`now line '${this.lineName}' length = ${this.length}`);
  }
};

console.log(`line '${line.lineName}' length = ${line.length}`);

line.expandedLength(34);
line.toString();
