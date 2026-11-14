Pour too much juice in a glass, and it runs over the top. Put too much text in a box with a fixed height, and it runs over too: out of the box, over what comes next. This is called **overflow**, and CSS lets you decide what happens with it.

## `overflow`

```css preview
<style>
  .note {
    background-color: lightyellow;
  }

  /* show */
  .note {
    max-height: 100px;
    overflow: auto;
  }
  /* /show */
</style>
<p class="note">Rules of the pool: shower before you swim. No running on the tiles. No glass by the water. Children under eight swim with a grown-up. The deep end is for people who can swim a full length. Lifeguards have the last word. Lost and found is at the desk.</p>
```

The note is at most 100 pixels tall. If its text is longer, `overflow` decides what to do with the rest:

- `visible`: what every box does by default. The text comes out of the box;
- `hidden`: the rest is cut off. It's still in the HTML, but nobody can see it;
- `scroll`: a scroll bar inside the box, always there;
- `auto`: a scroll bar inside the box, but only when the text doesn't fit.

You will use `auto` most. The box keeps its size, and visitors can still read everything by scrolling inside it.

## One direction

`overflow-y` is only for up and down, and `overflow-x` only for left and right:

```css preview
<style>
  .note {
    background-color: lightyellow;
  }

  /* show */
  .note {
    max-height: 100px;
    overflow-y: auto;
  }
  /* /show */
</style>
<p class="note">Rules of the pool: shower before you swim. No running on the tiles. No glass by the water. Children under eight swim with a grown-up. The deep end is for people who can swim a full length. Lifeguards have the last word. Lost and found is at the desk.</p>
```

## Break it on purpose

Use `hidden` on a box of text:

```css preview
<style>
  .note {
    background-color: lightyellow;
  }

  /* show */
  .note {
    max-height: 100px;
    overflow: hidden;
  }
  /* /show */
</style>
<p class="note">Rules of the pool: shower before you swim. No running on the tiles. No glass by the water. Children under eight swim with a grown-up. The deep end is for people who can swim a full length. Lifeguards have the last word. Lost and found is at the desk.</p>
```

The end of the text is gone. Nobody knows there was more, and nobody can read it. `hidden` is for things you really want to cut, like a picture's edges. Never use it on text people need.

---

## Mission: Short bios

**What you will see**: every card on `crew.html` has a paragraph about its crew member. A long paragraph stops after about three lines, and you scroll inside it to read the rest.

Every crew card gets a short biography: a few sentences about each person. But some are long, and they would make their cards much taller than the others.

- Every card has a paragraph with the class `bio`.
- Each bio has a few sentences of your own.
- A bio is at most 100 pixels tall.
- A longer bio scrolls inside its box: nothing comes out of it, and nothing is cut off for good.
