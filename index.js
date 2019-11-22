function initializeGrid(grid, min, max, columns) {
    if (min > max) throw new Error('Max must be higher then min');
    if (max > 100) throw new Error('Max must be lower then 100');
    
    grid.style.display = 'grid'
    grid.style.setProperty('grid-template-columns', 'repeat(' + 100 + ', 1fr)');

    let items = [...grid.children];
    console.log(items)
    let spans = [];
    let rows = getRows(items, columns)

    rows.forEach(row => {
        let sum = 0
        let rowSpan = []
        while (sum !== 100) {
            rowSpan = []
            for (let i = 0; i < columns; i++) {
                rowSpan.push(getRandomSpan(min, max))
            }
            sum = rowSpan.reduce((a,b) => a+b)
        }
        row.forEach((item, i) => {
            setSpan(rowSpan[i], item)
            if(rowSpan[i] > 22){
                // item.style.marginTop = '-15px'
            }
        } )
    })
}

function getRandomSpan(min, max) {
    return max - Math.floor(Math.random() * (1 + max - min))
}

function getRows(items, columns) {
    let row = []
    let rows = [];
    items.forEach((item, i) => {
        if (i % columns === 0 && i !== 0) {
            rows.push(row)
            row = []
        }
        row.push(item)
    })
    if (row) {
        rows.push(row)
    }
    return rows;
}

function setSpan(span, item) {
    console.log(item, span)
    item.style.gridColumn = `span ${span}`
}


initializeGrid(document.getElementById('posts'), 15,35,4)
