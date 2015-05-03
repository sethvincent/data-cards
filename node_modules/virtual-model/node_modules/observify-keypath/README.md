# observify-keypath

get/set [observify](https://github.com/maxogden/observify) values using dot-notation keypaths

## Install

```
npm install --save observify-keypath
```

## Example

```js
var keypath = require('observify-keypath');

var data = observify({
  nested: {
    obj: {
      arr: [{ cool: 'pizza' }]
    }
  }
});

// get a value
var value = keypath.get(data, 'nested.obj.arr.0.cool');

// set a value
keypath.set(data, 'nested.obj.arr.0.cool', 'awesome');

```

## Usage

### var keypath = require('observify-keypath');

## Methods

### keypath.get(data, keypath);

`data` is the observify object. 

`keypath` is the path of keys specified using dot notation.

### keypath.set(data, keypath, value);

`data` is that observify object. 

`keypath` is the path of keys specified using dot notation.

`value` is what you will set the value to.

## License

MIT