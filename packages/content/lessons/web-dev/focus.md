Not everyone uses a mouse. Some people move around a page with the **Tab** key: each press jumps to the next link or button. Try it now, on any website. How do you know where you are? A ring or a frame shows around the link that is ready. That link has the **focus**.

## `:focus`

```css preview
<style>
  /* show */
  a:focus {
    outline: 3px solid gold;
  }
  /* /show */
</style>
<p><a href="games.html">Our games</a> · <a href="members.html">Members</a> · <a href="rules.html">Rules</a></p>
```

This means "a link, while it has the focus". Press Tab until you get to a link: a thick gold line shows around it. Press Enter, and the link opens. This example is only one page, so here a line under it says which page would open.

`outline` is like a border, and you write it the same way. But it doesn't take any space: it's drawn around the element without moving anything. That's why people use it for focus: nothing on the page jumps when you press Tab.

## Never take it away

Browsers draw a thin focus ring by themselves. Some people think it looks ugly, and they remove it with `outline: none`. Don't! For someone who uses a keyboard, it's the only way to see where they are. Change it to something that goes with your page, and make it clear, but always keep one.

## Break it on purpose

Remove the outline:

```css preview
<style>
  /* show */
  a:focus {
    outline: none;
  }
  /* /show */
</style>
<p><a href="games.html">Our games</a> · <a href="members.html">Members</a> · <a href="rules.html">Rules</a></p>
```

Now press Tab a few times. Where are you? You can't tell. Imagine moving around a whole site like that.

---

## Mission: Where am I?

**What you will see**: press Tab on any page. The first link of the menu gets a thick outline in a color of your own, and every press moves it to the next link.

Someone who moves around your site with the Tab key should always see clearly which link they are on.

- A link with the focus has an outline at least 2 pixels thick.
- The outline's style is one you chose, not the browser's own.
