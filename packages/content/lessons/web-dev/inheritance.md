Children often get things from their parents: the color of their eyes, their family name. They **inherit** them. Elements on a page inherit too. You already used this without knowing it: when you gave the `body` a font and a text color, every element inside it took them.

## What's inherited

Some properties pass from an element to everything inside it, unless something inside has its own rule:

```css preview
<style>
  /* show */
  .notice {
    color: gold;
    font-family: Georgia, serif;
  }
  /* /show */
</style>
<div class="notice">
  <h3>Tonight</h3>
  <p>The club closes at <strong>18:00</strong>.</p>
</div>
```

```html preview
<div class="notice">
  <h3>Tonight</h3>
  <p>The club closes at <strong>18:00</strong>.</p>
</div>
```

The heading, the paragraph and the `<strong>` are all gold, and in Georgia. They inherit from the `div` around them.

Text properties are inherited: `color`, `font-family`, `font-size`, `font-style`, `line-height`, `text-align`, `letter-spacing`...

## What isn't

Box properties are **not** inherited: `background-color`, `border`, `padding`, `margin`, `width`. If they were, a border on a `div` would draw a border around every paragraph inside it too.

A background seems to pass down, but it doesn't. You can see through the children by default, so the parent's background shows through them.

## Own rules win

Inheritance is the weakest rule of all. Any rule that chooses the element itself, even only its tag, wins over what it would inherit:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  /* show */
  .notice {
    color: gold;
  }

  p {
    color: white;
  }
  /* /show */
</style>
<div class="notice">
  <h3>Tonight</h3>
  <p>The club closes at <strong>18:00</strong>.</p>
</div>
```

The paragraph in the notice is white. Its own rule, `p`, wins over the gold it would inherit.

## Break it on purpose

Put a border on the notice. Only the notice gets one, not its heading and paragraph. Borders don't pass down, and that's exactly what you want.

---

## Mission: The board's font

**What you will see**: every cell of the flight table, headers too, is in a monospace font. The rest of the page keeps its font.

The boards with departures at stations use a font where every letter has the same width, so the times line up.

- The flight table gets a list of fonts that ends with `monospace`, once, on the table itself.
- Every cell of the table, headers and data, takes it from the table.
