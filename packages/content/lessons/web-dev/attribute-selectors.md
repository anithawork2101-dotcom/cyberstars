At the airport, every bag with a "fragile" sticker goes on a special cart. The workers don't care whose bag it is, only that it has the sticker. CSS can choose elements in the same way: by an **attribute** they have.

## `[attribute]`

Square brackets choose elements by their attributes:

```css preview
<style>
  a {
    text-decoration: none;
  }

  /* show */
  a[target] {
    font-style: italic;
  }
  /* /show */
</style>
<p><a href="https://en.wikipedia.org/wiki/Chess" target="_blank">Rules of chess</a></p>
<p><a href="games.html">Our games</a></p>
```

This means "every `a` that **has** a `target` attribute", whatever its value.

## `[attribute="value"]`

With a value, it chooses only elements whose attribute has exactly that value:

```css preview
<style>
  a {
    text-decoration: none;
  }

  /* show */
  a[target="_blank"] {
    text-decoration: underline;
  }
  /* /show */
</style>
<p><a href="https://en.wikipedia.org/wiki/Chess" target="_blank">Rules of chess</a></p>
<p><a href="games.html">Our games</a></p>
```

Links that open a new tab are underlined, so visitors know before they click.

Some more ways to match:

- `a[href^="https"]`: the `href` **starts with** `https`: links to other sites;
- `a[href$=".pdf"]`: the `href` **ends with** `.pdf`;
- `img[alt=""]`: pictures with an empty `alt`, the ones that are only decoration.

## Break it on purpose

Write the value wrong:

```css preview
<style>
  a {
    text-decoration: none;
  }

  /* show */
  a[target="blank"] {
    text-decoration: underline;
  }
  /* /show */
</style>
<p><a href="https://en.wikipedia.org/wiki/Chess" target="_blank">Rules of chess</a></p>
<p><a href="games.html">Our games</a></p>
```

Nothing is underlined. Your links say `_blank`, with the underscore. An attribute selector matches the value exactly, letter by letter.

---

## Mission: Links that leave

**What you will see**: the link to the other site is underlined. The other links on the page have no line.

On the home page, the link about space stations opens another site in a new tab. Visitors should know before they click.

- Every link that opens a new tab is underlined.
- The other links have no underline.
