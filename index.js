var filter = require('filter-object')
var ViewList = require('view-list')
var h = require('virtual-dom/h')
var extend = require('extend')

module.exports = function (opts) {

  var options = extend({
    className: 'data-card-list',
    eachrow: rows,
    titleField: 'title'
  }, opts)

  function rows (row) {
    var title = row[options.titleField]
    var fields = filter(row, ['*', '!'+options.titleField])
    var fieldElements = Object.keys(fields).map(eachField)

    function eachField (key, i) {
      return h('li.data-card-field', [
        h('span.data-card-field-key.'+key, key),
        h('span.data-card-field-value', fields[key])
      ])
    }

    return h('li.data-card', [
      h('h2.data-card-title', title),
      h('ul.data-card-fields', fieldElements)
    ])
  }

  return new ViewList(options)
}
