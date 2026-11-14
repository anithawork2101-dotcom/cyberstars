A suitcase for a plane has a rule: no bigger than this, so it fits above the seats. A gift box may have the opposite rule: at least this big, so the present fits. Boxes on a page can have rules like that too: grow with what you hold, but never past a size, or never under one.

## `max-width`: never wider

You already met it with pictures. On any box, `max-width` lets the box be narrower, but never wider:

```css preview
<style>
  .notice {
    background-color: lightyellow;
  }

  /* show */
  .notice {
    max-width: 500px;
  }
  /* /show */
</style>
<p class="notice">The pool is closed on Monday for cleaning. On Tuesday it opens again at eight, with the water a little warmer than before.</p>
```

On a wide screen, the notice stops at 500 pixels, so its lines don't get too long to read. On a phone narrower than that, it just takes the phone's width. A fixed `width: 500px` would come out of the phone's screen instead.

That's the big difference. `width` is always that size. `max-width` is "that size at most".

## `min-height`: never shorter

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  .member {
    background-color: #1e3a5f;
    padding: 16px;
    margin-bottom: 16px;
  }

  /* show */
  .member {
    min-height: 120px;
  }
  /* /show */
</style>
<div class="member">
  <h3>Sam Green</h3>
  <p>Plays chess.</p>
</div>
<div class="member">
  <h3>Lea Park</h3>
  <p>Runs the card games on Fridays, and keeps the score of every game the club has played this year.</p>
</div>
```

Each member box is at least 120 pixels tall. A member with a short text gets a box of 120. A member with a long text gets a taller box that holds all of it. Not like with `height`, the text never comes out of the box.

So a row of boxes looks even, even when their texts have different lengths.

`min-width` and `max-height` work the same way, for the other direction.

## Break it on purpose

Use the wrong one: give the notice `min-width: 500px`. On a wide screen, nothing changes. On a phone 360 pixels wide, the notice stays 500 pixels wide and comes out of the screen, so the whole page slides sideways. A rule that stops a box from growing is `max`. A rule that stops it from getting smaller is `min`.

---

## Mission: Even cards, readable duties

**What you will see**: on `crew.html`, no card is shorter than the others. The duty board stops growing at a good width for reading, but it still fits a phone.

A card with a long name or job is taller than the others. And the duty board's lines are as long as the whole page.

- Every card is at least 140 pixels tall.
- The duty list is at most 600 pixels wide.

Check the duty list's real width in Inspect: does its width count its padding?
