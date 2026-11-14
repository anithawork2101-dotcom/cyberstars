On a shelf with extra space, you decide where the books go. You push them all to the left, put them in the middle, or spread them out with the same space between each one. The books stay the same. Only the empty space around them moves.

## `justify-content`

In a flex container, `justify-content` says where the items sit along the line: from left to right, in a row. A music app puts its three buttons in the middle:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  /* show */
  .player {
    display: flex;
    justify-content: center;
  }
  /* /show */
</style>
<div class="player">
  <button>Back</button>
  <button>Play</button>
  <button>Next</button>
</div>
```

The buttons stand together in the middle of the line, with the same space on their left and on their right. Try the other values instead of `center`:

- `flex-start`: at the start of the line, on the left. You get this when you don't write it.
- `flex-end`: at the end of the line, on the right.
- `space-between`: the first item at the start, the last one at the end, and the same space between each one.
- `space-evenly`: the same space everywhere, at the ends too.

## No space left, no move

`justify-content` moves the items in the space that is left. When the items fill the whole line, there is nothing to move:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .tip {
    background-color: #1e3a5f;
    padding: 0 12px;
    margin: 4px;
  }

  /* show */
  .tips {
    display: flex;
    justify-content: center;
  }
  /* /show */
</style>
<div class="tips">
  <p class="tip">Drink water before the game, and again at half time.</p>
  <p class="tip">Bring a second pair of socks, in case it rains.</p>
</div>
```

The two tips are long, so together they take the whole line, and `center` changes nothing. Now give each tip a width:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .tip {
    background-color: #1e3a5f;
    padding: 0 12px;
    margin: 4px;
  }

  /* show */
  .tips {
    display: flex;
    justify-content: center;
  }

  .tip {
    width: 120px;
  }
  /* /show */
</style>
<div class="tips">
  <p class="tip">Drink water before the game, and again at half time.</p>
  <p class="tip">Bring a second pair of socks, in case it rains.</p>
</div>
```

Now there is space left, and the two tips stand in the middle of the line.

## Break it on purpose

Give `justify-content` to the buttons, not to their parent:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  /* show */
  .player {
    display: flex;
  }

  button {
    justify-content: center;
  }
  /* /show */
</style>
<div class="player">
  <button>Back</button>
  <button>Play</button>
  <button>Next</button>
</div>
```

The buttons stay on the left. `justify-content` places the items of a flex container, so it goes on the container. `text-align: center` on the container doesn't help either: it centers the words inside each item, not the items.

---

## Mission: Cards in the middle

**What you will see**: on a computer, the three cards are narrower than now. They stand together in the middle of the list, with the same space on their left and on their right.

Your wiki cards fill the whole row of the list, so there is no space left to move them.

- Each card on `wiki.html` is between 200 and 300 pixels wide.
- The cards stand in the middle of the list, with as much space on their left as on their right.
