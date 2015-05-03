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
    description: 'this has long text that cuts off its cool this has long text that cuts off its cool this has long text that cuts off its cool this has long text that cuts off its cool this has long text that cuts off its cool ',
    someField: 'this is a field',
    another: '123123'
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