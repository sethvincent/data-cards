var diff = require('virtual-dom/diff')
var patch = require('virtual-dom/patch')
var createElement = require('virtual-dom/create-element')
var raf = require('raf')

var dataCards = require('data-cards')({
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