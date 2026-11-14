On a full bus, people move closer to make space. But a seat never gets narrower than one person: below that, nobody can sit on it. A grid's column can have a smallest size too, and a biggest one.

## Shares can get too small

Two columns that share the space, in a narrow box:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .main,
  .side {
    background-color: #1e3a5f;
    padding: 8px;
    margin: 0;
  }

  /* show */
  .page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    width: 300px;
  }
  /* /show */
</style>
<div class="page">
  <p class="main">Our class trip goes to the mountains on Monday.</p>
  <p class="side">Bring warm clothes</p>
</div>
```

The box is 300 pixels wide, so each column gets about 146. The note on the right has to go onto two lines, though it's only three words.

## `minmax()`

`minmax()` gives a column two sizes: the smallest it may get, and the biggest:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .main,
  .side {
    background-color: #1e3a5f;
    padding: 8px;
    margin: 0;
  }

  /* show */
  .page {
    display: grid;
    grid-template-columns: 1fr minmax(180px, 1fr);
    gap: 8px;
    width: 300px;
  }
  /* /show */
</style>
<div class="page">
  <p class="main">Our class trip goes to the mountains on Monday.</p>
  <p class="side">Bring warm clothes</p>
</div>
```

The note's column is now never narrower than 180 pixels, and never wider than its share, `1fr`. In 300 pixels, an equal share would be too small, so the note takes its 180, and the column on the left gets what is left.

Now change `width: 300px` to `width: 600px`. There is space for both now, and the two columns are equal again. Each one's share is more than 180, so the smallest size doesn't matter.

## The biggest size

The second size can be in pixels too. `minmax(100px, 200px)` is a column between 100 and 200 pixels. It takes its share of the space, but never more than 200, even on a very wide screen.

## Break it on purpose

Make the smallest size bigger than the box: `minmax(400px, 1fr)` in a box 300 pixels wide. The column takes its 400 pixels anyway, and the row comes out of its box. The grid always keeps the smallest size, even when it has no space for it. Keep it small enough for the narrowest screen you think of.

---

## Mission: Room for the launch

**What you will see**: in a window 600 pixels wide, the last launch keeps 300 pixels, and the pad camera gets what is left. In a wide window, the two are as wide as each other, as before.

In a narrow window, the pad camera and the last launch share the width, and the last launch's caption has to fit in a thin column.

- The last launch's panel is never narrower than 300 pixels.
- When there isn't space for both, the pad camera's panel gets narrower.
- When there is space, the two panels have the same width, on a computer and in a window 800 pixels wide.
- Nothing comes out sideways, in a window 600 pixels wide too.
