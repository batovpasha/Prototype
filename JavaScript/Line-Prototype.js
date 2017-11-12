'use strict';

function Line(lineName, length) {
  this.lineName = lineName;
  this.length = length;
}

Line.prototype.expandedLength = function(length) {
  this.length += length;
};

Line.prototype.toString = function() {
  console.log(`now line '${this.lineName}' length = ${this.length}`);
};

const line = new Line('a', 24);

console.log(`line '${line.lineName}' length = ${line.length}`);

line.expandedLength(345);
line.toString();
