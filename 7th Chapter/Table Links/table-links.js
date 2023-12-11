let t = document.body.firstElementChild.firstElementChild
console.log(t);

console.log(t.rows)//collection of all rows (tr)

console.log(t.caption);//caption will be print <caption>

console.log(t.tHead);//<thead>
console.log(t.tHead.firstElementChild);//gives first element of thead
console.log(t.tFoot)//<tfoot>
console.log(t.tBodies)//collection of all bodies <tbody>
console.log(tbody.rows)//collection of rows <tr> inside 
console.log(t.cells);//collection of td and th
console.log(t.rows[0])
console.log(t.rows[0].sectionRowIndex)//index of tr inside enclosing element
console.log(t.rows[0].rowIndex);//row number starting from 0
console.log(t.td.cellIndex)//no of cells inside enclosing <tr>

// quick quiz

typeof document //object

typeof window //object