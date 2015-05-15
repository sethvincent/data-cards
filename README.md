# data-cards

Let's interact with data in some way other than tables/spreadsheets. 

Demo: [sethvincent.com/data-cards](http://sethvincent.com/data-cards/)

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
var through = require('through2')
var debounce = require('lodash.debounce')
var raf = require('raf')

var dataCards = require('data-cards')({
  appendTo: document.body,
  height: window.innerHeight,
  rowHeight: 200
})

var render = debounce(dataCards.render.bind(dataCards), 100)

var all = []
var model = through.obj(function (chunk, enc, cb) {
  this.push(chunk)
  cb()
})

model.on('data', function (data) {
  all.push(data)
  render(all)
})

for (var i=0;i<=100000;i++) {
  model.write({
    key: i,
    value: {
      title: 'this is title ' + i,
      description: 'this has long text that cuts off its cool this has long text that cuts off its cool this has long text that cuts off its cool this has long text that cuts off its cool this has long text that cuts off its cool ',
      someField: 'this is a field',
      another: '123123'
    }
  })
}
```

## See also

- [data-ui](https://github.com/sethvincent/data-ui) – a collection of resources & modules for building interfaces for managing data
- [data-grid](https://github.com/sethvincent/data-grid) – a similar project except the data is in a spreadsheet-like grid
- [view-list](https://github.com/shama/view-list) – this project is a thin wrapper around the view-list module
- [virtual-dom](https://github.com/Matt-Esch/virtual-dom) – data-cards & view-list are created using the virtual-dom module

## Contributing

See the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

[MIT](LICENSE.md)