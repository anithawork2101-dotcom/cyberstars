Before you wrote any CSS, your page already had some style. The `h1` was big and bold, the links were blue and underlined, and the `<em>` was italic. Where did that come from?

From the browser itself. Every browser has its own small style sheet. It's a bit like a new house with white walls, before you paint them. Your CSS is the paint on top.

## The browser's own styles

Here are a few things the browser does by itself:

- headings are **bold**, and the lower the level, the smaller they are;
- `<strong>` is bold and `<em>` is italic;
- links are **blue and underlined**, and purple after you visit them;
- paragraphs and headings have some space above and below them.

None of this is in your files. The browser does it when nobody says something else.

## Your rules win

When your CSS sets a property, your value takes the place of the browser's value. The browser underlines links, so:

```css preview
<style>
  /* show */
  a {
    text-decoration: none;
    color: darkgreen;
  }
  /* /show */
</style>
<p>New to the game? <a href="https://en.wikipedia.org/wiki/Chess">Read about chess</a> before you start.</p>
```

The browser wanted blue and underlined. Your rule says dark green and no line, so that's what you see.

What your rule doesn't say stays as the browser made it. This rule says nothing about bold, so a link inside a `<strong>` is still bold.

## Break it on purpose

Take away the underline, **and** give the link the same color as the text around it:

```css preview
<style>
  /* show */
  a {
    text-decoration: none;
    color: black;
  }
  /* /show */
</style>
<p>New to the game? <a href="https://en.wikipedia.org/wiki/Chess">Read about chess</a> before you start.</p>
```

Which part is the link? Nobody can tell. A link must always look different from the text around it, by its color or its line. Then people know they can click it.

---

## Mission: Links of your own

**What you will see**: Jump to today, Visiting hours, the link about space stations and Write to the crew all show in your own color, with no line under them.

Your page's links still have the browser's blue and underline. Give them the station's own look.

- Every link has no underline.
- Every link has a color of your own, not the browser's blue.
- Links still look different from the text around them.
