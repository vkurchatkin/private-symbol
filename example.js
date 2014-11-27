var PrivateSymbol = require('./index.js');

var myObj = {};
var privateSymbol = PrivateSymbol();
var publicSymbol = Symbol();

myObj[privateSymbol] = 123;

console.log(Object.getOwnPropertySymbols(myObj).length); // 0

myObj[publicSymbol] = 456;

console.log(Object.getOwnPropertySymbols(myObj).length); // 1


var Ctr;
(function () {

  var keyName = PrivateSymbol();
  function MyConstructor(name) {
    this[keyName] = name;
  }

  MyConstructor.prototype.print = function () {
    console.log(this[keyName]);
  };

  Ctr = MyConstructor;

}());

var obj = new Ctr('test');

obj.print();
