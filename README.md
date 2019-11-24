# Spangrid
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Linux Build][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/spangrid.svg
[npm-url]: https://www.npmjs.com/package/spangrid
[downloads-image]: https://img.shields.io/npm/dm/spangrid.svg
[downloads-url]: https://www.npmjs.com/package/spangrid
[travis-image]: https://img.shields.io/travis/strazan/spangrid/master.svg
[travis-url]: https://travis-ci.org/strazan/spangrid

Span grid items randomly within an interval.

<img src="https://github.com/strazan/spangrid/blob/master/docs/images/spangrid-example-01.png" width="100%"></img>

### Usage
```HTML
<div id="grid">
  <h1>Spangrid</h1>
  <h1>Spangrid</h1>
  <h1>Spangrid</h1>
  <h1>Spangrid</h1>
</div>

<script src="https://cdn.jsdelivr.net/npm/spangrid@1.0.1/src/index.min.js"></script>
```

```javascript
const grid = document.getElemnetById('grid')
const minSpan = 15 //percentage 
const maxSpan = 35 //percentage 
const cols = 4

spangrid(grid, minSpan, maxSpan, cols)
```
#### npm
`npm i spangrid`
