var binding = require('bindings')('private_symbol');

function PrivateSymbol (description) {
  if (this instanceof PrivateSymbol)
    throw new TypeError('PrivateSymbol is not a constructor');

  var descriptionString = undefined;

  if (description !== undefined)
    descriptionString = '' + description;

  return binding.Create(descriptionString);
}

PrivateSymbol.for = function (key) {
  var keyString = '' + key;
  return binding.SymbolFor(key);
};


module.exports = PrivateSymbol;
