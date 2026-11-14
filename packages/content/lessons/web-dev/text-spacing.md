Write a page of notes with the lines very close together, and it's hard to read later. Your eyes keep jumping to the wrong line. Leave a little space between the lines, and it's easy to read. Space between letters matters too: think of a shop sign with its letters far apart.

## `line-height`: space between lines

`line-height` sets how tall each line of text is. That leaves space above and below the letters:

```css preview
<style>
  /* show */
  p {
    line-height: 1.6;
  }
  /* /show */
</style>
<h2>Board Games</h2>
<p>We keep the board games in the cupboard by the window. Chess, Monopoly and cards are on the top shelf, and the puzzles sit under them, next to the spare dice.</p>
```

`1.6` means "each line is 1.6 times as tall as the text's size". With text 16 pixels tall, each line is 16 × 1.6, about 26 pixels. Long paragraphs are much easier to read with a line height of about 1.5 to 1.7.

A plain number like `1.6` is the best way to write it. If you make the text bigger later, the lines grow with it.

## `letter-spacing`: space between letters

`letter-spacing` adds space between the letters of each word:

```css preview
<style>
  /* show */
  h2 {
    letter-spacing: 2px;
  }
  /* /show */
</style>
<h2>Board Games</h2>
<p>We keep the board games in the cupboard by the window. Chess, Monopoly and cards are on the top shelf, and the puzzles sit under them, next to the spare dice.</p>
```

`2px` adds 2 pixels after every letter. It's good for short things, like headings in capitals, or labels. On a whole paragraph, it makes the words hard to read.

## Break it on purpose

Make the lines very short:

```css preview
<style>
  /* show */
  p {
    line-height: 0.8;
  }
  /* /show */
</style>
<h2>Board Games</h2>
<p>We keep the board games in the cupboard by the window. Chess, Monopoly and cards are on the top shelf, and the puzzles sit under them, next to the spare dice.</p>
```

Now the lines cover each other: the bottom of one line touches the top of the next. Try the other way, `line-height: 4`, and each line is far away from the others. Something near 1.5 is just right.

---

## Mission: Room to breathe

**What you will see**: more space between the lines of your paragraphs, and the letters of the part headings a little further apart.

The paragraphs on your page feel too full, and the part headings could look more like signs.

- In every paragraph, each line is at least 1.5 times as tall as the text (24 pixels for 16-pixel text).
- The part headings have at least 1 pixel of space between their letters.
