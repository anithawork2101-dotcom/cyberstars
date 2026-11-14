A report has a title on top, a header, the main text, and a footer at the bottom of the page. Long tables are built the same way, in parts. Then the browser and screen readers know which part is which.

## A title: `<caption>`

```html preview
<table>
  <!-- show -->
  <caption>Club scores, March</caption>
  <!-- /show -->
  <tr><td>Sam</td><td>12</td></tr>
  <tr><td>Lea</td><td>9</td></tr>
</table>
```

`<caption>` is the table's title. It goes first, right after `<table>`, and the browser shows it centered above the table. A screen reader reads it first, so the listener knows what the table is about before the numbers start.

## Three sections

```html preview
<table>
  <caption>Club scores, March</caption>
  <thead>
    <tr><th scope="col">Name</th><th scope="col">Points</th></tr>
  </thead>
  <tbody>
    <tr><td>Sam</td><td>12</td></tr>
    <tr><td>Lea</td><td>9</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Total</td><td>21</td></tr>
  </tfoot>
</table>
```

- `<thead>`: the header rows, with the labels;
- `<tbody>`: the body, with the rows of data;
- `<tfoot>`: the footer, for totals or a note.

On the screen, they look like plain rows. But with these sections, CSS can style each part, and JavaScript can find only the rows of data: "every row of the `tbody`". When you print a long table, the browser can show the `thead` again on every page.

## Break it on purpose

Put the caption at the end of the table, after `</tbody>`. Some browsers may still show it on top, but the HTML is wrong, and a screen reader may read it last, after all the numbers. The caption always comes first.

---

## Mission: Sections

**What you will see**: a title above the table, like `Departures today`. Then the labels, the five flights, and a last row with a note like `All times in station time`.

The flight table needs a title and its sections.

- `#flights` has a caption, as its title.
- Its header row is in a `<thead>`.
- The five flights are in a `<tbody>`.
- A last row, with a note of your own, is in a `<tfoot>`.
