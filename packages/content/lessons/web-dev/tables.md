A school timetable is a grid: days across the top, lessons down the side, and one subject in each box. You read it along a row, or down a column. Lists can't do that. Some information only makes sense in rows and columns. That's a **table**.

## `<table>`, `<tr>`, `<td>`

You build a table row by row:

```html preview
<table>
  <tr>
    <td>Monday</td>
    <td>Maths</td>
    <td>Art</td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>History</td>
    <td>Music</td>
  </tr>
</table>
```

- `<table>` holds the whole table;
- `<tr>` is a **table row**;
- `<td>` is a **cell** in that row, short for "table data".

The browser puts the cells in columns by itself: the first cell of every row goes in the first column, and so on. Each row should have the same number of cells.

## Break it on purpose

Leave out the `<tr>`s:

```html preview
<table>
  <td>Monday</td>
  <td>Maths</td>
  <td>Tuesday</td>
  <td>History</td>
</table>
```

All four cells are in one long row. The browser only starts a new row where you start a new `<tr>`. Now forget one cell in a row: that row is shorter, and its last column stays empty.

---

## Mission: The flight schedule

**What you will see**: a new page, `schedule.html`, on the site's night blue. It shows a heading and the five flights in a grid, one flight in each row.

The station gets a third page: the flight schedule. Today's flights are:

```text
SL-101   Moon Base        08:30   Boarding
SL-102   Mars Relay       09:45   On time
SL-103   Europa Outpost   07:15   Delayed
SL-104   Lunar Gateway    11:00   Cancelled
SL-105   Orbital Yard     10:20   On time
```

- `schedule.html` is a whole page: in English, it can show any letter, and it has a name for its tab.
- It has a biggest heading, and it uses the site's `style.css`.
- It has a table with the id `flights`.
- The table has one row for each flight, in this order.
- Each row has a cell for each of the four columns.
- Every page's menu has a third link, to `schedule.html`.
