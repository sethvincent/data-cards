# data-cards

let's interact with data in some way other than tables/spreadsheets.

## Status

This module is currently unfinished! It's being developed for use with [flatsheet](http://github.com/flatsheet/flatsheet) and [dat](http://github.com/maxogden/dat).

Mostly this is an experiment. Expect it to be rewritten, redesigned, destroyed, & recreated. At least once or twice.

## API

### `var Cards = require('data-cards')`

### `var cards = Cards([opts])`

**options**

- `titleField` – _optional_ – default: `title`
- `descriptionField` – _optional_ – default: `description`

### `cards.render([data])`

## Examples

### Example html output:

```
<div class="data-card-list">
  <div class="data-card">
    <h2 class="data-card-title">Example</h2>
    <p class="data-card-description">This is a field in the row that describes the data.</p>
    <ul class="data-card-fields">
      <li class="data-card-field [fieldname]">
        <span class="field-key">[fieldname]:</span> 
        <span class="field-value">[fieldvalue]</span>
      </li>
    </ul>
  </div>
</div>
```

