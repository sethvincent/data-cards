var filter = require('filter-object')
var ViewList = require('view-list')
var h = require('virtual-dom/h')
var extend = require('extend')

module.exports = function (opts) {

  var options = extend({
    className: 'data-card-list',
    eachrow: rows,
    titleProperty: 'title',
  }, opts)

  // optional includeProperties option
  // otherwise uses first 3 properties

  function rows (row) {
    if (!row.value) row = { value: row }
    var title = row.value[options.titleProperty]
    var properties = filter(row.value, ['*', '!'+options.titleProperty])
    var propertyElements = []

    if (options.includeProperties) {
      propertyElements = options.includeProperties.map(function (key) {
        return propertyElement(key, properties)
      })
    }

    else {
      var i = 0
      for (var key in properties) {
        propertyElements.push(propertyElement(key, properties))
      }
    }

    function propertyElement (key, properties) {
      return h('li.data-card-property', [
        h('span.data-card-property-key.' + key, key),
        h('span.data-card-property-value', properties[key])
      ])
    }

    return h('li.data-card', { 
        attributes: { 'data-key': row.key }
      }, [
      h('h2.data-card-title', title),
      h('ul.data-card-properties', propertyElements)
    ])
  }

  return new ViewList(options)
}
