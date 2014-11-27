# private-symbol

Private symbols for node

# Usage

```
npm install private-symbol
```

and then:

```javascript
var PrivateSymbol = require('private-symbol');

var myObj = {};
var symbol = PrivateSymbol();

myObj[symbol] = 123;

console.log(Object.getOwnPropertySymbols(myObj)); // nothing

```

`PrivateSymbol.for()` works the same way as `Symbol.for()`.
`PrivateSymbol.keyFor()` is NOT implemented.

Private symbols can be used for truly private properties:

```javascript

var keyName = PrivateSymbol();
function MyConstructor(name) {
  this[keyName] = name;
}

MyConstructor.prototype.print = function () {
  console.log(this[keyName]);
};


```

# License

MIT
