Before guests come for dinner, you set the table: a plate for each one, a glass, a fork. Nobody is eating yet, but you can already see how many are coming and where each one will sit. When the food arrives, nothing has to move. A page can set the table too, before its data comes.

## What a spinner doesn't say

A spinner says "wait". It doesn't say what is coming, or how much of it. And when the cards finally arrive, the page jumps: the text under the spinner is pushed down, often just when you wanted to click it.

## Skeleton cards

A **skeleton** is a grey block where a card will come, as big as the card. It has no text, only its shape. When the real cards arrive, they take the place of the skeletons, and the page almost doesn't move.

Skeletons are plain elements, styled with what you know: a height, a background, round corners.

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  /* show */
  .news {
    list-style: none;
    padding: 0;
  }

  .skeleton {
    height: 64px;
    margin-bottom: 12px;
    border-radius: 8px;
    background-color: #1e3a5f;
  }
  /* /show */
</style>
<h1>School news</h1>
<!-- show -->
<ul class="news">
  <li class="skeleton" aria-hidden="true"></li>
  <li class="skeleton" aria-hidden="true"></li>
  <li class="skeleton" aria-hidden="true"></li>
</ul>
<!-- /show -->
```

What do you see? Three dark blue blocks with round corners, one under the other. You can already guess that three news cards will come there.

The skeletons are list items, because the news will be list items in the same list. `list-style: none` and `padding: 0` take away the bullets, and the space on the left that a list has. A skeleton is only for the eye, so `aria-hidden="true"` keeps a screen reader away from these empty items. The list's `aria-busy` already tells a screen reader to wait.

## Break it on purpose

Remove `height: 64px;`. The blocks are gone: an empty element is 0px tall, because nothing inside it takes space. A skeleton needs its own height.

Then write `Loading...` inside each skeleton. Now the page says "Loading..." three times, and a skeleton that talks isn't a skeleton any more. The spinner's line already says it once.

---

## Mission: The table is set

**What you will see**: under the loading line, three grey blocks with round corners, one under the other. Each one is as wide as the list, and about as tall as a starship card. There are no bullets, and no text in them.

The tracker shows a spinner, then an empty list. Grey blocks where the starship cards will come would show what is on the way.

- In the list `ships`, add at least three list items with the class `skeleton`.
- They have no text, and only the eye meets them.
- Each one is at least 60px tall and as wide as the list.
- Each one has a background that stands out from the page's, in the light colors and in the dark ones.
- The list shows no bullets.
