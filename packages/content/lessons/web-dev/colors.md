Open a big box of crayons and read the names on them: "sky blue", "forest green", "brick red". Each name is one exact color. CSS has a box like that too, with about 140 color names.

## Color names

You already used a few: `steelblue`, `teal`, `firebrick`. Here are some more from the same box:

```css preview
<style>
  /* show */
  h1 {
    color: navy;
  }

  h2 {
    color: darkolivegreen;
  }

  p {
    color: dimgray;
  }
  /* /show */
</style>
<h1>My Favourite Games</h1>
<h2>Board Games</h2>
<p>We keep them in the cupboard by the window.</p>
```

Names are easy to read in your CSS. You know how `tomato` or `gold` will look before you even try. Most are everyday words, sometimes with `dark`, `light` or `medium` before them: `darkgreen`, `lightblue`, `mediumpurple`.

Some to try: `crimson`, `chocolate`, `darkcyan`, `darkslategray`, `indigo`, `maroon`, `olive`, `sienna`, `tomato`.

## Text that isn't quite black

Pure black text on a white page is hard on the eyes. Many sites use a very dark grey or a very dark blue instead. It's still easy to read, but it feels softer. Try `darkslategray` on your paragraphs, and look at the difference.

## Break it on purpose

Write a name wrong, or make one up:

```css preview
<style>
  /* show */
  p {
    color: darkgrey-blue;
  }
  /* /show */
</style>
<h1>My Favourite Games</h1>
<h2>Board Games</h2>
<p>We keep them in the cupboard by the window.</p>
```

There is no such color. So the browser drops the whole declaration, and the paragraphs stay black. You see no error: the color just doesn't change. A name must be one of the names CSS knows, written as one word, with no spaces and no `-`.

---

## Mission: Softer colors

**What you will see**: your paragraphs in a soft dark color, like dark slate grey, and The Greenhouse heading in its own color.

Your page's paragraphs are still black, and so is The Greenhouse heading.

- Paragraphs that aren't warnings have a color name of your own, not black.
- The small headings that aren't shifts have a color of your own, not black.
