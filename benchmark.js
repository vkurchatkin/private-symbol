var PrivateSymbol = require('./index.js');
var assert = require('assert');

function measure (type, N, key) {

  var objects = Array(N);

  for (var i = 0; i < N; i++)
    objects[i] = {};

  var s = Date.now();


  for (var i = 0; i < N; i++) {
    objects[i][key] = i;
  }

  console.log(type + ' property set', Date.now() - s);

  s = Date.now();

  for (var i = 0; i < N; i++) {
    assert(objects[i][key] === i);
  }

  console.log(type + ' property get', Date.now() - s);

}

measure('String', 1000000, 'prop');
measure('Symbol', 1000000, Symbol('prop'));
measure('PrivateSymbol', 1000000, PrivateSymbol('prop'));
