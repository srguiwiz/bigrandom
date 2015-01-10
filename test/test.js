#!/usr/local/bin/node

var bigrandom = require('../lib/bigrandom.js');

var r1 = bigrandom();
var r2 = bigrandom();

if (r1 == r2) {
  throw new Error("twice same random result");
}

if (r1.length != 32) {
  throw new Error("unexpected length of random result");
}

if (r2.length != 32) {
  throw new Error("unexpected length of random result");
}

