When you print a school project, you choose a size for the title and the text: big for the title, smaller for the rest. On a screen, you measure sizes in a unit of its own: the **pixel**.

## Pixels

Look very closely at a screen, and you will see it's made of tiny dots of light. Each dot is a **pixel**. In CSS, you write a pixel as `px`: `16px` is 16 pixels.

You met pixels with the picture's `width` and `height`. In CSS, you always write the `px` after the number.

## `font-size`

`font-size` sets how big the text is:

```css preview
<style>
  /* show */
  p {
    font-size: 18px;
  }

  h1 {
    font-size: 40px;
  }
  /* /show */
</style>
<h1>My Favourite Games</h1>
<p>We keep them in the cupboard by the window.</p>
```

The browser's normal text is `16px`. With this CSS, paragraphs are a little bigger than normal, and the biggest heading is 40 pixels tall.

Headings already have their own sizes from the browser's styles: an `h1` is usually 32 pixels. `font-size` replaces that with your value.

Bigger isn't always better. Text between 16 and 20 pixels is easy to read on most screens. Headings should be clearly bigger than the text, so the eye finds them first.

## Break it on purpose

Leave out the unit:

```css preview
<style>
  /* show */
  p {
    font-size: 18;
  }
  /* /show */
</style>
<h1>My Favourite Games</h1>
<p>We keep them in the cupboard by the window.</p>
```

`18` what? Pixels? Something else? CSS doesn't guess. It drops the declaration, and the paragraphs keep their size. A size always needs its unit. Only `0` can be written without one, because 0 of anything is nothing.

---

## Mission: Sizes

**What you will see**: the biggest heading clearly bigger than before, and the paragraphs a little bigger than the browser's normal text.

Make the station's page easier to read, and its title bigger and stronger.

- The biggest heading is at least 40 pixels tall.
- Every paragraph's text is between 17 and 20 pixels.
