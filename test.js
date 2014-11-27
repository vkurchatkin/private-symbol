var PrivateSymbol = require('./index.js');
var assert = require('assert');

var s = PrivateSymbol('test');
var obj = {};

obj[s] = 42;

assert.equal(obj[s], 42);
assert.equal(Object.getOwnPropertySymbols(obj).length, 0);
assert.equal(Object.getOwnPropertyNames(obj).length, 0);
assert.equal(s.toString(), 'Symbol(test)');
assert.equal(s.__proto__, Symbol.prototype);
assert.notEqual(s, PrivateSymbol('test'));

s = PrivateSymbol();
obj[s] = 16;

assert.equal(obj[s], 16);
assert.equal(Object.getOwnPropertySymbols(obj).length, 0);
assert.equal(Object.getOwnPropertyNames(obj).length, 0);
assert.equal(s.toString(), 'Symbol()');
assert.equal(s.__proto__, Symbol.prototype);
assert.notEqual(s, PrivateSymbol());

assert.equal(PrivateSymbol.for('test'), PrivateSymbol.for('test'));
