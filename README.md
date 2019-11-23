# Spangrid
Span grid items randomly within an interval.


### Usage

`npm i spangrid`


```HTML
<div id="grid">
  <h1>Spangrid</h1>
  <h1>Spangrid</h1>
  <h1>Spangrid</h1>
  <h1>Spangrid</h1>
</div>
```

```javascript
const spangrid = require('spangrid')

const grid = document.getElemnetById('grid')
const minSpan = 15 //percentage 
const maxSpan = 35 //percentage 
const cols = 4

spangrid(grid, minSpan, maxSpan, cols)
