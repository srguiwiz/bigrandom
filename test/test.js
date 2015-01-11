#!/usr/local/bin/node

var bigrandom = require('../lib/bigrandom.js');

var r1 = bigrandom();
var r2 = bigrandom();
var r3 = bigrandom("E.g. document content.");

if (r1 == r2 || r1 == r3 || r2 == r3) {
  throw new Error("twice same random result");
}

if (r1.length != 32 || r2.length != 32 || r3.length != 32) {
  throw new Error("unexpected length of random result");
}

