var PrivateSymbol = require('./index.js');
var assert = require('assert');

var s = Date.now();

var obj = {};
var key = 'prop';

for (var i = 0; i < 1000000; i++) {
  obj[key] = i;
}

console.log('String property', Date.now() - s);

var s = Date.now();
var obj = {};
var key = Symbol('prop');

for (var i = 0; i < 1000000; i++) {
  obj[key] = i;
}

console.log('Symbol', Date.now() - s);


var s = Date.now();
var obj = {};
var key = PrivateSymbol('prop');

for (var i = 0; i < 1000000; i++) {
  obj[key] = i;
}

console.log('PrivateSymbol', Date.now() - s);
