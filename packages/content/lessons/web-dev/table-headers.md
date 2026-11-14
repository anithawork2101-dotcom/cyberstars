Look at your timetable again. Across the top, it says Monday, Tuesday, Wednesday. Those aren't lessons. They are labels that say what each column is. Without them, you would have to guess which column is which day.

## `<th>`: a header cell

A cell that **labels** a column is a `<th>`, a table header, not a `<td>`:

```html preview
<table>
  <tr>
    <th scope="col">Day</th>
    <th scope="col">First lesson</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>Maths</td>
  </tr>
</table>
```

The browser shows header cells in bold, and centered. More important, a screen reader now knows that "Maths" is the "First lesson". It can read the label with each cell.

`scope="col"` says that the header is the label of a **column**. A header at the start of a row, the label of the whole row, would be `scope="row"`.

## Tables are for data

A table is for information that really has rows and columns: a timetable, scores, prices. Long ago, people used tables to place whole pages, with a menu in one cell and the text in another. Don't do that. Screen readers read it as a grid of data, and it's very hard to use on a phone. Placing things on the page is a job for CSS.

## Break it on purpose

Make the header row with `<td>` and `<strong>`:

```html preview
<table>
<!-- show -->
<tr>
  <td><strong>Day</strong></td>
  <td><strong>First lesson</strong></td>
</tr>
<!-- /show -->
<tr>
  <td>Monday</td>
  <td>Maths</td>
</tr>
</table>
```

It looks almost the same. But for a screen reader, it's only another row of data, and no cell under it has a label. How it looks isn't what it means: a label is a `<th>`.

---

## Mission: Labelled columns

**What you will see**: the table starts with a row of four bold labels:

```text
Flight   Destination   Departs   Status
```

The flight table has four columns, but nothing says what they are.

- The first row of `#flights` holds four header cells, `<th>`, one for each column.
- They say Flight, Destination, Departs and Status.
- Each one says that it's the label of a column.
