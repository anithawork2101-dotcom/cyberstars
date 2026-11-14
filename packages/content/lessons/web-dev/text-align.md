The title of a poster is usually in the middle. A letter starts on the left. A price in a shop window is sometimes on the right. Where a line of text sits, on the left, in the middle or on the right, is its **alignment**.

## `text-align`

```css preview
<style>
  /* show */
  h1 {
    text-align: center;
  }
  /* /show */
</style>
<h1>My Favourite Games</h1>
<p>We keep them in the cupboard by the window.</p>
```

The heading's text is now in the middle of the page.

The values:

- `left`: the start of the line. Text does this when you don't say anything else;
- `center`: the middle;
- `right`: the end of the line;
- `justify`: makes each line fill the whole width, so both sides are straight, like in a newspaper.

## It works on a block

`text-align` places the text **inside** a block. A heading or a paragraph is as wide as the page, so its text can move across that whole width.

On an inline element, like a `<strong>` in the middle of a sentence, it does nothing. The `<strong>` is only as wide as its words, so the words have no room to move. To center some words, put them in their own paragraph, and center the paragraph.

## Use it with care

Centered text is good for short things: a title, a line of links, a name at the end. A long paragraph in the middle is hard to read. Every line starts in a different place, and your eyes have to look for it. Keep long text on the left.

## Break it on purpose

Center a link that's inside a sentence:

```css preview
<style>
  /* show */
  a {
    text-align: center;
  }
  /* /show */
</style>
<p>New to the game? <a href="https://en.wikipedia.org/wiki/Chess">Read about chess</a> before you start.</p>
```

Nothing moves. The link is inline, so it's only as wide as its words. Put the rule on the paragraph that holds the link, and the whole line moves to the middle.

---

## Mission: Centered on top

**What you will see**: Welcome aboard in the middle of the page, and the line with Jump to today and Visiting hours in the middle too.

The top of your page should feel like the sign at a station's door.

- The biggest heading is centered.
- The paragraph with the jump links has the class `jumps`.
- That paragraph is centered.
