Look at the list of messages on your phone. A long message doesn't take three lines. You see the start, then "...", and you tap to read the rest. That "..." is called an **ellipsis**, and CSS can draw it.

## Three lines together

```css preview
<style>
  .card {
    width: 200px;
    padding: 8px;
    background-color: lightyellow;
  }

  /* show */
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  /* /show */
</style>
<div class="card">
  <p class="title">A Very Long Title That Doesn't Fit</p>
  <p>By Sam Green</p>
</div>
```

Each line does one job:

- `white-space: nowrap`: never go onto a second line. The text stays on one line, however long it is;
- `overflow: hidden`: cut off what doesn't fit in the box's width;
- `text-overflow: ellipsis`: where the text is cut, show `...`.

You need all three. Without `nowrap`, the text goes onto new lines, and nothing is cut. Without `hidden`, the line just goes out of the box. Without `ellipsis`, the text stops at a hard edge, in the middle of a letter.

The box needs a width it can't grow past, like your cards have. Then there is an edge where the text can be cut.

## When to use it

Use it for short labels in a small space: a name on a card, a file name, a menu item. Not for real text: a paragraph cut after one line is a paragraph nobody can read. The full text is still in the HTML, so a screen reader reads all of it.

## Break it on purpose

Leave out `white-space: nowrap`. A long name just goes onto a second line, and no `...` shows, because nothing is too long for the box. Then put `nowrap` back, and leave out `overflow: hidden`. Now the name goes straight out of the card, over the next card.

---

## Mission: Long names

**What you will see**: on `crew.html`, a long name stays on one line, and ends in `...` where it reaches the card's edge. The card keeps its size.

A crew member with a long name, like "Maximiliana Ostrowski-Lindqvist", would push their card's name onto two or three lines.

- A name on a card always stays on one line.
- A name too long for the card is cut at the card's edge, with `...`.
