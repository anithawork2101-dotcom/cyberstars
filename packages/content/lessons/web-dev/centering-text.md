You now know two ways to put things in the middle: `text-align: center` and `margin: 0 auto`. They sound like the same thing. They're not, and people mix them up very often in CSS.

Think of a shelf. `margin: 0 auto` moves the **shelf** to the middle of the wall. `text-align: center` moves the **books** to the middle of the shelf.

## `text-align` centers what's inside

`text-align: center` goes on a box. It centers the **lines of text and the inline elements inside it**. The box itself doesn't move:

```css preview
<style>
  .links {
    background-color: lightyellow;
  }

  /* show */
  .links {
    text-align: center;
  }
  /* /show */
</style>
<p class="links"><a href="a.html">One</a> <a href="b.html">Two</a></p>
```

```html preview
<p class="links"><a href="a.html">One</a> <a href="b.html">Two</a></p>
```

The paragraph still takes the full width. The links are inline, so they move to the middle of it.

## `margin: 0 auto` centers the box

`margin: 0 auto` goes on a box with a width. It moves **the box itself** to the middle of its space. What is inside stays as it was: text in a centered box still starts on the box's left.

## Which one?

- Words or links to the middle: `text-align: center` on the box **around** them.
- A box with a width to the middle: `margin: 0 auto` on the box **itself**.

## Break it on purpose

Try to center a menu's links with `margin: 0 auto` on the links:

```css preview
<style>
  .links {
    background-color: lightyellow;
  }

  /* show */
  .links a {
    margin: 0 auto;
  }
  /* /show */
</style>
<p class="links"><a href="a.html">One</a> <a href="b.html">Two</a></p>
```

Nothing moves. A link is inline: it has no width of its own to center, and inline elements don't use `auto` margins. Put `text-align: center` on the box around them instead.

---

## Mission: The menu in the middle

**What you will see**: on every page, Home and Crew are together in the middle of the menu's line.

On every page, the menu's links are on the left.

- On every page, the menu's links are centered across the page, as a group.
