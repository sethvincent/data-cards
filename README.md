# data-cards

let's interact with data in some way other than tables/spreadsheets. Demo: [sethvincent.com/data-cards](http://sethvincent.com/data-cards/)

## Status

This module is currently unfinished! It's being developed for use with [flatsheet](http://github.com/flatsheet/flatsheet) and [dat](http://github.com/maxogden/dat).

Mostly this is an experiment. Expect it to be rewritten, redesigned, destroyed, & recreated. At least once or twice.

## API

### `var Cards = require('data-cards')`

### `var cards = Cards([opts])`

**options**

- `titleField`
  - _optional_
  - default: `title`

Any options you can pass to the [view-list](https://github.com/shama/view-list) and [virtual-dom](https://github.com/Matt-Esch/virtual-dom) modules.

### `cards.render([data])`

## Examples

### Example html output:

```html
<ul class="data-card-list">
  <li class="data-card">
    <h2 class="data-card-title">Example</h2>
    <ul class="data-card-fields">
      <li class="data-card-field [fieldname]">
        <span class="field-key">[fieldname]:</span> 
        <span class="field-value">[fieldvalue]</span>
      </li>
    </ul>
  </li>
</ul>
```

### Example usage:

```js
var diff = require('virtual-dom/diff')
var patch = require('virtual-dom/patch')
var createElement = require('virtual-dom/create-element')
var raf = require('raf')

var dataCards = require('./index')({
  height: window.innerHeight - 100,
  rowHeight: 200
})

function render () {
  return dataCards.render()
}

var i = 0
setInterval(function() {
  dataCards.write({
    title: 'this is title ' + i,
    description: 'weeeee a description',
    someField: 'this is a field',
    another: 'huh'
  })
  i++
}, 1000)

var tree = render()
var rootNode = createElement(tree)
document.body.appendChild(rootNode)

raf(function tick () {
  var newTree = render()
  var patches = diff(tree, newTree)
  rootNode = patch(rootNode, patches)
  tree = newTree
  raf(tick)
})
```

## See also

- [view-list](https://github.com/shama/view-list) – this project is a thin wrapper around the view-list module
- [virtual-dom](https://github.com/Matt-Esch/virtual-dom) – data-cards & view-list are created using the virtual-dom module

## Contributing

See the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

[MIT](LICENSE.md)