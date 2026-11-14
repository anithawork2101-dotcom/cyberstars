Have you ever tried to tap a tiny link on a phone, and hit the link next to it? Fingers are much bigger than a mouse pointer. A link that is only as big as its words is a small target. Good sites make links bigger.

## Padding on a link

Padding makes a box bigger without changing its text. A click anywhere on the padding counts as a click on the link:

```css preview
<style>
  .links a {
    background-color: lightyellow;
  }

  /* show */
  .links a {
    padding: 8px 12px;
  }
  /* /show */
</style>
<p class="links">
  <a href="index.html">Home</a>
  <a href="games.html">Games</a>
  <a href="members.html">Members</a>
  <a href="rules.html">Rules</a>
  <a href="contact.html">Contact</a>
  <a href="photos.html">Photos</a>
  <a href="news.html">News</a>
  <a href="join.html">Join the club</a>
</p>
```

But a link is **inline**, and inline boxes don't really use their padding at the top and bottom. The padding shows, but it covers the lines above and below, and it doesn't push anything away. The fix is the box you just met:

```css preview
<style>
  .links a {
    background-color: lightyellow;
  }

  /* show */
  .links a {
    display: inline-block;
    padding: 8px 12px;
  }
  /* /show */
</style>
<p class="links">
  <a href="index.html">Home</a>
  <a href="games.html">Games</a>
  <a href="members.html">Members</a>
  <a href="rules.html">Rules</a>
  <a href="contact.html">Contact</a>
  <a href="photos.html">Photos</a>
  <a href="news.html">News</a>
  <a href="join.html">Join the club</a>
</p>
```

Now each link is a real tile, with 8 pixels of space above and below its words and 12 on the sides. You can click or tap all of it.

## How big?

A good rule: anything people tap on a phone should be at least about **44 pixels** tall, the size of a fingertip. For a menu on a computer, a little smaller is fine, but more space is always easier.

## Break it on purpose

Give the links padding, but leave them inline. Look at a link's padding with Inspect: the box is there. But on a page with several lines of links, the padding of one line covers the links of the next line. A link that should be a real target is `inline-block`.

---

## Mission: Easy to tap

**What you will see**: every menu link is a bigger target, with space around its words, and that space is part of the link.

The links in your menu are only as big as their words.

- On every page, every link in the menu is at least 32 pixels tall.
- Every link in the menu has at least 8 pixels of space on its left and on its right.
- The menu grows to hold the links: it's at least 32 pixels tall too.

If the links' padding covers the menu's edges, read Break it on purpose again.
