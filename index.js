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