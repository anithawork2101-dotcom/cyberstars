Many phone apps have a dark mode: white text on a dark background, easier on the eyes at night. Your station's page is all about space, so a night sky behind it would look right. For that, you need to color what is **behind** the text, not the text itself.

## `background-color`

`color` colors the text. `background-color` colors the space behind it:

```css preview
<style>
  /* show */
  .tip {
    background-color: lightyellow;
  }
  /* /show */
</style>
<p>Practice starts at five.</p>
<p class="tip">Bring water to every game.</p>
```

A paragraph is a block, so its background is a band as wide as the page, behind its text.

It takes the same kinds of values as `color`: names, hex codes, `rgb()`, with or without alpha.

## The whole page

To color the whole page, give the background to the `body`. The `body` holds everything you see:

```css preview
<style>
  /* show */
  body {
    background-color: #0b1d3a;
  }
  /* /show */
</style>
<h1>Night Owls</h1>
<p>We play every Friday night.</p>
```

The whole page is now night blue.

## Text and background go together

A dark background needs light text, and a light background needs dark text. When you change one, check the other:

```css preview
<style>
  /* show */
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }
  /* /show */
</style>
<h1>Night Owls</h1>
<p>We play every Friday night.</p>
```

Everything inside the `body` that has no color of its own takes the `body`'s `color`: paragraphs, lists, table cells. You will see exactly why in a later lesson. An element with its own rule, like your paragraphs, keeps that rule's color. So check those too.

## Break it on purpose

Give the body the dark background, and leave the text as it was:

```css preview
<style>
  p {
    color: #333333;
  }
  /* show */
  body {
    background-color: #0b1d3a;
  }
  /* /show */
</style>
<h1>Night Owls</h1>
<p>We play every Friday night.</p>
```

You can hardly see your dark grey paragraphs on the night blue. The text didn't change, but now nobody can read the page. Every time you change a background, look at the text on it.

---

## Mission: Night mode

**What you will see**: the whole page is night blue, and the paragraphs are almost white. The two warnings each sit on a band of their own color. Some headings and links may be hard to read for now. You will fix them in the next lesson.

The station's designer has colors for the night. Night blue, `#0b1d3a`, is for the page. A very light blue-white, `#f0f4ff`, is for its text.

- The page's background is `#0b1d3a`.
- The page's text color, set on the `body`, is `#f0f4ff`.
- Paragraphs that aren't warnings or the address are `#f0f4ff` too.
- The warnings have a background the other paragraphs don't have.
