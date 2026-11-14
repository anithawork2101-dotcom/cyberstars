Look at a printed bank statement, or a big timetable. Every second row is often shaded: white, grey, white, grey. It's called **zebra stripes**, and it helps your eye stay on the right line. CSS can choose every second row by its place.

## First and last

```css preview
<style>
  /* show */
  li:first-child {
    font-weight: bold;
  }

  li:last-child {
    color: gray;
  }
  /* /show */
</style>
<ul>
  <li>Chess</li>
  <li>Cards</li>
  <li>Puzzles</li>
  <li>Dominoes</li>
</ul>
```

`:first-child` chooses an element when it's the **first** child of its parent. `:last-child` chooses it when it's the last child. In a list, that's the first and the last items.

## `:nth-child`

`:nth-child(...)` chooses children by their number, counting from 1:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  #scores td {
    padding: 4px 12px;
  }

  /* show */
  tr:nth-child(3) {
    color: gold;
  }
  /* /show */
</style>
<table id="scores">
  <thead>
    <tr><th scope="col">Name</th><th scope="col">Points</th><th scope="col">Games</th></tr>
  </thead>
  <tbody>
    <tr><td>Sam</td><td>12</td><td>5</td></tr>
    <tr><td>Lea</td><td>9</td><td>4</td></tr>
    <tr><td>Ana</td><td>7</td><td>4</td></tr>
    <tr><td>Tom</td><td>6</td><td>3</td></tr>
  </tbody>
</table>
```

Only the third row. Inside the brackets, you can also write:

- `even`: the 2nd, 4th, 6th...
- `odd`: the 1st, 3rd, 5th...

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  #scores td {
    padding: 4px 12px;
  }

  /* show */
  #scores tbody tr:nth-child(even) {
    background-color: #13294f;
  }
  /* /show */
</style>
<table id="scores">
  <thead>
    <tr><th scope="col">Name</th><th scope="col">Points</th><th scope="col">Games</th></tr>
  </thead>
  <tbody>
    <tr><td>Sam</td><td>12</td><td>5</td></tr>
    <tr><td>Lea</td><td>9</td><td>4</td></tr>
    <tr><td>Ana</td><td>7</td><td>4</td></tr>
    <tr><td>Tom</td><td>6</td><td>3</td></tr>
  </tbody>
</table>
```

Every even row of the table's body is shaded: zebra stripes. Add a row, and the stripes follow, with no class to add by hand.

## Break it on purpose

Put the `:nth-child` on the cells, not on the rows:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  #scores td {
    padding: 4px 12px;
  }

  /* show */
  #scores td:nth-child(even) {
    background-color: #13294f;
  }
  /* /show */
</style>
<table id="scores">
  <thead>
    <tr><th scope="col">Name</th><th scope="col">Points</th><th scope="col">Games</th></tr>
  </thead>
  <tbody>
    <tr><td>Sam</td><td>12</td><td>5</td></tr>
    <tr><td>Lea</td><td>9</td><td>4</td></tr>
    <tr><td>Ana</td><td>7</td><td>4</td></tr>
    <tr><td>Tom</td><td>6</td><td>3</td></tr>
  </tbody>
</table>
```

Now it's every second **cell** of each row, so the stripes go down the columns, not across. `:nth-child` counts the element it's on, among its own siblings.

---

## Mission: Zebra stripes

**What you will see**: in the flight table's body, every second row has its own background, starting with the second flight. The other rows stay as they were.

The flight table's rows all look the same, and it's easy to move to the wrong row.

- The even rows of the flight table's body have a background the odd rows don't have.
