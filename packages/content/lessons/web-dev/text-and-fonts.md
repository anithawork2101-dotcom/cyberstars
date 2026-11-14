Look at a birthday card, a road sign and a comic book. The letters look very different: curly, plain, drawn by hand. Each style of letters is a **font**. The font changes how a page feels before anyone reads a word.

## `font-family`

`font-family` chooses the font:

```css preview
<style>
  /* show */
  body {
    font-family: Verdana;
  }
  /* /show */
</style>
<h1>My Favourite Games</h1>
<h2>Board Games</h2>
<p>We keep them in the cupboard by the window.</p>
```

The `body` holds everything you see, so everything on the page takes this font. You will learn exactly why in a later lesson.

A font name with spaces goes in quotes: `font-family: "Times New Roman";`.

## A list, not one font

But there is a problem. A font only shows if the visitor's device has it. Verdana is on almost every computer, but not on every phone. If it's missing, the browser uses its own default font, and your page looks different from your plan.

So you give a **list**, the best font first:

```css preview
<style>
  /* show */
  body {
    font-family: Verdana, Geneva, sans-serif;
  }
  /* /show */
</style>
<h1>My Favourite Games</h1>
<h2>Board Games</h2>
<p>We keep them in the cupboard by the window.</p>
```

The browser tries Verdana. If the device doesn't have it, it tries Geneva. If the device has neither, it takes any `sans-serif` font it has.

The last word is a **generic family**: a kind of font that every device has.

- `sans-serif`: plain letters, with no little feet at the ends, like this text;
- `serif`: letters with little feet, like in a printed book;
- `monospace`: every letter has the same width, like in code.

Always end your list with one of them. Then the page always gets the right **kind** of font.

## Break it on purpose

Choose a font almost nobody has, with nothing after it:

```css preview
<style>
  /* show */
  body {
    font-family: Papyrus;
  }
  /* /show */
</style>
<h1>My Favourite Games</h1>
<h2>Board Games</h2>
<p>We keep them in the cupboard by the window.</p>
```

On your computer, it may look as you wanted. But on a phone without Papyrus, the browser shows its default font, often a `serif` one, and your page looks like a newspaper. Add `, sans-serif` at the end, and the browser uses the right kind of font.

---

## Mission: The station's fonts

**What you will see**: the paragraphs in a plain font like Verdana, and the biggest heading in a font with little feet, like Georgia.

Your page still uses the browser's default font.

- The page's text uses a list of fonts that ends with `sans-serif`.
- The biggest heading uses a different font from the paragraphs.
