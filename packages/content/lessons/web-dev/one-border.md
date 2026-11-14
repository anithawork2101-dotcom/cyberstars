Look at a page of a book with a quote on it. Often there is only one line, down the left side of the quote, to make it stand out. Not a box all around, only one side. A border can be like that too.

## One side's border

Every side has its own border property, written like `border`:

```css preview
<style>
  .quote {
    padding-left: 12px;
  }

  /* show */
  .quote {
    border-left: 4px solid gold;
  }
  /* /show */
</style>
<p>My grandpa always says:</p>
<p class="quote">Think twice, move once.</p>
```

You see a gold line, 4 pixels thick, only down the left side. The other sides have no border.

There is one for each side: `border-top`, `border-right`, `border-bottom`, `border-left`. A line under a heading is often a `border-bottom`:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  /* show */
  h2 {
    border-bottom: 1px solid #2c4a7a;
  }
  /* /show */
</style>
<h2>Board Games</h2>
<p>We keep them in the cupboard by the window.</p>
```

It's not like `text-decoration: underline`. A bottom border goes across the whole width of the box, not only under the words. And it can have any thickness and color.

## One side and the others

You can also give a box a border all around, then change one side after it:

```css preview
<style>
  .quote {
    padding: 8px 12px;
  }

  /* show */
  .quote {
    border: 1px solid gray;
    border-left: 6px solid gold;
  }
  /* /show */
</style>
<p>My grandpa always says:</p>
<p class="quote">Think twice, move once.</p>
```

Thin and grey all around, thick and gold on the left. For the side they share, the later declaration wins.

## Break it on purpose

Change the order of the two lines:

```css preview
<style>
  .quote {
    padding: 8px 12px;
  }

  /* show */
  .quote {
    border-left: 6px solid gold;
    border: 1px solid gray;
  }
  /* /show */
</style>
<p>My grandpa always says:</p>
<p class="quote">Think twice, move once.</p>
```

The gold line is gone. `border` sets all four sides. It comes second, so it changes the left side back too. Write the general one first, and the special one after.

---

## Mission: The duty board's edge

**What you will see**: the duty list on `crew.html` has a thick gold line down its left side, and no border on the other sides. Its left corners are square, where the line is, and its right corners are round.

The duty board should look like a page with a quote, with a line down one side.

- The duty list has a border on its left, at least 3 pixels thick.
- It has no border at its top, right and bottom.
- Its two right corners are round.
- Its two left corners are square.
