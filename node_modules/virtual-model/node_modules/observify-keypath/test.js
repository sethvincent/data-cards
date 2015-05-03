var test = require('tape');
var observify = require('observify');
var keypath = require('./index');

var data = observify({
  nested: {
    obj: {
      arr: [{ cool: 'pizza' }]
    }
  }
});

test('get and set value', function (t) {
  var value = keypath.get(data, 'nested.obj.arr.0.cool');
  t.equal(value, 'pizza');
  keypath.set(data, 'nested.obj.arr.0.cool', 'awesome');
  value = keypath.get(data, 'nested.obj.arr.0.cool');
  t.equal(value, 'awesome');
  t.end();
});