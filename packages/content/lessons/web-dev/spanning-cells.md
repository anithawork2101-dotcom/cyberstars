On a timetable, a double lesson takes two boxes in a row, joined into one. And a note at the bottom, like "school closes at 15:00 on Friday", goes across all the columns. Table cells can grow like that.

## `colspan`: across columns

```html preview
<style>
  td {
    border: 1px solid gray;
  }
</style>
<table>
  <tr><td>Monday</td><td>Maths</td><td>Art</td></tr>
  <tr><td>Friday</td><td>Music</td><td>Sport</td></tr>
<!-- show -->
<tfoot>
  <tr>
    <td colspan="3">School closes at 15:00 on Friday</td>
  </tr>
</tfoot>
<!-- /show -->
</table>
```

`colspan="3"` makes the cell three columns wide. Now a row in a table with 3 columns needs only this one cell.

## `rowspan`: down rows

```html preview
<style>
  td {
    border: 1px solid gray;
  }
</style>
<table>
<!-- show -->
<tr>
  <td rowspan="2">Monday</td>
  <td>Maths</td>
</tr>
<tr>
  <td>Art</td>
</tr>
<!-- /show -->
</table>
```

`rowspan="2"` makes "Monday" two rows tall. The second row has one cell less: Monday already takes the place on its left.

## Count the cells

When you join cells, you must count. Every row must still add up to the same number of columns. A cell with `colspan="3"` counts as three. A cell with `rowspan="2"` also takes a place in the row under it, so that row has one `td` less.

## Break it on purpose

Keep the extra cell in the second row:

```html preview
<style>
  td {
    border: 1px solid gray;
  }
</style>
<table>
<!-- show -->
<tr>
  <td rowspan="2">Monday</td>
  <td>Maths</td>
</tr>
<tr>
  <td>Art</td>
  <td>Music</td>
</tr>
<!-- /show -->
</table>
```

"Music" comes out into a new column on the right, past the edge of the table. The second row has one cell too many, because Monday was already in its first place.

---

## Mission: The footer and the bays

**What you will see**: the note in the table's footer goes across all four columns. Under the flights, a Docking Bays part shows:

```text
Bay     Time    Ship
Bay 1   08:00   Kestrel
        13:00   Heron
Bay 2   10:30   Albatross
```

The flight table's note should go across the whole table. And the schedule page gets a second table, for the docking bays. One bay has two ships today.

- The footer's note is one cell, as wide as the four columns.
- Add a part called Docking Bays, with a heading one level under the page's heading.
- Under it, add a table with the id `bays`.
- The table has a header row with Bay, Time and Ship, then a row for each ship.
- Bay 1's cell goes down across the rows of its two ships.

A cell that goes down across two rows also takes a place in the row under it.
