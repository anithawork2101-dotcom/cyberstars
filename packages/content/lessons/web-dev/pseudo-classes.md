Move your mouse over a button on almost any website. It changes color a little, as if to say "yes, you can click me". The button itself hasn't changed. It's in a different **state**: the mouse is on it. CSS can style an element only for that state.

## `:hover`

A **pseudo-class** is a word after a `:`. It chooses an element only while it's in some state:

```css preview
<style>
  /* show */
  a:hover {
    color: gold;
  }
  /* /show */
</style>
<p>New to the game? <a href="https://en.wikipedia.org/wiki/Chess">Read about chess</a> before you start.</p>
```

This means "a link, while the mouse is over it". Move the mouse onto a link: it turns gold. Move it away: it goes back.

It works on any element:

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
  #scores tbody tr:hover {
    background-color: #1e3a5f;
  }
  /* /show */
</style>
<table id="scores">
  <thead>
    <tr><th scope="col">Name</th><th scope="col">Points</th></tr>
  </thead>
  <tbody>
    <tr><td>Sam</td><td>12</td></tr>
    <tr><td>Lea</td><td>9</td></tr>
    <tr><td>Ana</td><td>7</td></tr>
  </tbody>
</table>
```

Every row of the table lights up while the mouse is on it. So your eye can follow the row across, even in a wide table.

## Phones

A phone has no mouse, so nothing has the mouse over it. Some phones use a quick tap like a hover, and others don't. So `:hover` is only for extra help, never for something people need. Never hide important information until a hover.

## Break it on purpose

Put a space before the colon:

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
  #scores tbody tr :hover {
    background-color: #1e3a5f;
  }
  /* /show */
</style>
<table id="scores">
  <thead>
    <tr><th scope="col">Name</th><th scope="col">Points</th></tr>
  </thead>
  <tbody>
    <tr><td>Sam</td><td>12</td></tr>
    <tr><td>Lea</td><td>9</td></tr>
    <tr><td>Ana</td><td>7</td></tr>
  </tbody>
</table>
```

Now it means "any element **inside** a row, while the mouse is over it". The cells light up one at a time, not the whole row. The `:` goes right after the element it's about, with no space.

---

## Mission: Follow the row

**What you will see**: move the mouse over a flight, and its whole row lights up in a color of your own. Move the mouse away, and the row goes back.

The flight table is wide, and it's easy to lose your place in a row.

- While the mouse is over a row of the flight table's body, the row has a background.
- Without the mouse on it, the row has no background.
