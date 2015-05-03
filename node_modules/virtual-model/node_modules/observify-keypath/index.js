var isString = require('amp-is-string');
var isNumber = require('amp-is-number');

module.exports = {
  get: get,
  set: set
};

function get (data, key) {
  if (!key) return data();
  
  var keys = parseKeys(key);
  var current = keys[0];
  
  if (typeof data === 'function') var obj = data();
  else var obj = data;

  if (keys.length == 1) return obj[current]
  return get(obj[current], keys.slice(1));
}
  
function set (data, key, value) {
  var keys = parseKeys(key);
  var current = keys[0];
  
  if (keys.length == 1) data[current].set(value);  
  else {
    if (data.get) set(data.get(current), keys.slice(1), value)
    else set(data[current], keys.slice(1), value);
  }
}

function parseKeys (key) {
  if (isString(key)) {
    var keys = key.split('.').map(function (key){
      if (isNumber(key)) return parseInt(key);
      return key;
    });
    return keys;
  }
  else return key;
}
