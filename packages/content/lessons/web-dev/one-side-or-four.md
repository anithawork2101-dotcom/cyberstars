A picture frame is often wider at the bottom than at the top, so the picture looks right. Boxes on a page are like that too. You don't always want the same space on every side.

## One side at a time

Every side has its own property:

```css preview
<style>
  .note {
    background-color: lightyellow;
  }

  /* show */
  .note {
    padding-top: 8px;
    padding-right: 16px;
    padding-bottom: 8px;
    padding-left: 40px;
  }
  /* /show */
</style>
<p class="note">Bring your own board on Saturdays: we only have six.</p>
```

Top, right, bottom, left: each has its own value. It's the same for margins: `margin-top`, `margin-right`, `margin-bottom`, `margin-left`. Set only one side, and the other sides keep what they had.

## The short way

Four lines are long to write. `padding` and `margin` can take several values at once:

```css
padding: 16px;                  /* all four sides */
padding: 8px 16px;              /* top and bottom 8, left and right 16 */
padding: 8px 16px 8px 40px;     /* top, right, bottom, left */
```

With four values, the order goes round the box like the hands of a clock, from the top: top, right, bottom, left. To remember it, think of the word **TRouBLe**: T-R-B-L.

With two values, the first is for the top and bottom, and the second for the left and right.

## Break it on purpose

Mix up the order:

```css preview
<style>
  .note {
    background-color: lightyellow;
    /* show */
    padding: 40px 8px 16px 8px;
    /* /show */
  }
</style>
<p class="note">Bring your own board on Saturdays: we only have six.</p>
```

You wanted 40 on the left. But it's the first value, so it's the **top**: a big empty space above the text, and only 8 pixels on the left. When a side looks wrong, count round the clock: top, right, bottom, left.

---

## Mission: The duty board panel

**What you will see**: the duty list on `crew.html` sits on a panel with its own color. It has a little space at the top and bottom, and more on the left, where the numbers are.

The duty board should look like a panel too. Its numbers are on the left, so it needs more space there.

- The duty list has a background the page doesn't have.
- It has at least 8 pixels of space inside at the top.
- It has at least 8 pixels of space inside at the bottom.
- It has at least 32 pixels of space inside on the left.
- It has at most 24 pixels of space inside on the right.
