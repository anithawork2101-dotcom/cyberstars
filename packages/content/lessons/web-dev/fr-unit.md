Three friends share a pizza. Nobody measures the pieces in centimetres: each one gets a third, whatever the size of the pizza. A big pizza gives big pieces, and a small one gives small pieces. A grid can share its width in the same way.

## Columns in pixels don't share

The columns from the last lesson have a fixed width:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .app {
    background-color: #1e3a5f;
    padding: 8px;
    margin: 0;
    text-align: center;
  }

  /* show */
  .apps {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    gap: 12px;
  }
  /* /show */
</style>
<div class="apps">
  <p class="app">Camera</p>
  <p class="app">Music</p>
  <p class="app">Maps</p>
  <p class="app">Clock</p>
  <p class="app">Notes</p>
  <p class="app">Games</p>
</div>
```

On a wide screen, the apps stay small on the left, and the rest of the row is empty. On a narrow one, they come out of the box. 100 pixels is 100 pixels, whatever space there is.

## `fr`: a share of the space

`fr` means a **fraction**: a share. `1fr` is one share of the space left in the grid:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .app {
    background-color: #1e3a5f;
    padding: 8px;
    margin: 0;
    text-align: center;
  }

  /* show */
  .apps {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }
  /* /show */
</style>
<div class="apps">
  <p class="app">Camera</p>
  <p class="app">Music</p>
  <p class="app">Maps</p>
  <p class="app">Clock</p>
  <p class="app">Notes</p>
  <p class="app">Games</p>
</div>
```

Three shares, so each column gets a third of the width. The grid takes away the gaps first, then cuts what is left into three equal parts. Make your preview's panel wider and narrower: the apps grow and get smaller, and the row always ends at the right edge.

## Shares of different sizes

A column can get more shares than another. `2fr` is twice as much as `1fr`:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .app {
    background-color: #1e3a5f;
    padding: 8px;
    margin: 0;
    text-align: center;
  }

  /* show */
  .apps {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 12px;
  }
  /* /show */
</style>
<div class="apps">
  <p class="app">Camera</p>
  <p class="app">Music</p>
  <p class="app">Maps</p>
  <p class="app">Clock</p>
  <p class="app">Notes</p>
  <p class="app">Games</p>
</div>
```

Now there are four shares. The first column takes two of them, half of the width, and the other two columns take one each.

## Break it on purpose

Write the shares as percents instead: `33% 33% 33%`. It looks almost right, but look at the right edge: the row comes out a little. The three columns take 99% of the width, and the two gaps come on top of that. `fr` only shares the space the gaps leave, so it never comes out.

---

## Mission: Cards that fill the row

**What you will see**: the same six cards in three columns. But the first card now starts at the left edge of `.stats`, and the third one ends at its right edge, whatever the width of the window.

Your cards have fixed widths. On a computer, there is an empty band on the right of the cards. On a smaller window, the third column comes out of the box.

- The three columns share the whole width of `.stats`, the same for each one.
- That's true on a computer and on a window 800 pixels wide.
- The cards keep at least 16 pixels between them, across and down.
