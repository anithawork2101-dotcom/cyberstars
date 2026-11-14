In a class photo, everyone stands in a row. One kid sits on a chair in front, lower than the others. That one kid does it their own way. Everyone else stays as they are.

## One item, its own way

A school blog shows each post in a row: a picture, a sentence and a small **New** label. The post has `display: flex`, but no `align-items`. So every item gets as tall as the row, and the label does too:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .photo {
    background-color: #8ecbff;
    width: 100px;
    height: 100px;
  }

  .text {
    margin: 0;
  }

  .new {
    background-color: #ffd166;
    color: #0b1d3a;
    padding: 4px 8px;
    border-radius: 6px;
  }

  /* show */
  .post {
    display: flex;
    gap: 12px;
  }
  /* /show */
</style>
<div class="post">
  <div class="photo"></div>
  <p class="text">Our class trip to the lake: three days of boats, rain and songs.</p>
  <span class="new">New</span>
</div>
```

The label is now a tall yellow bar, as tall as the picture. The sentence gets as tall as the row too, but you can't see it, because it has no background.

## `align-self`

Remember: the box with `display: flex` is the **flex container**, and the boxes inside it are its **flex items**.

`align-items` goes on the container. It places all the items in the row: at the top, in the middle, at the bottom, or as tall as the row (`stretch`). `align-self` goes on one item, and places only that item. For that item, `align-self` is stronger than `align-items`. It takes the same values: `stretch`, `flex-start`, `center` and `flex-end`.

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .photo {
    background-color: #8ecbff;
    width: 100px;
    height: 100px;
  }

  .text {
    margin: 0;
  }

  .new {
    background-color: #ffd166;
    color: #0b1d3a;
    padding: 4px 8px;
    border-radius: 6px;
  }

  /* show */
  .post {
    display: flex;
    gap: 12px;
  }

  .new {
    align-self: flex-start;
  }
  /* /show */
</style>
<div class="post">
  <div class="photo"></div>
  <p class="text">Our class trip to the lake: three days of boats, rain and songs.</p>
  <span class="new">New</span>
</div>
```

The label now sits at the top, and it is only as tall as its word. The picture and the sentence don't change. Now try `center` and `flex-end` on the label, and watch where it goes.

## Break it on purpose

Put `align-self` on the post instead of on the label:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .photo {
    background-color: #8ecbff;
    width: 100px;
    height: 100px;
  }

  .text {
    margin: 0;
  }

  .new {
    background-color: #ffd166;
    color: #0b1d3a;
    padding: 4px 8px;
    border-radius: 6px;
  }

  /* show */
  .post {
    display: flex;
    gap: 12px;
    align-self: flex-start;
  }
  /* /show */
</style>
<div class="post">
  <div class="photo"></div>
  <p class="text">Our class trip to the lake: three days of boats, rain and songs.</p>
  <span class="new">New</span>
</div>
```

The label is a tall bar again. Why? `align-self` places an item inside its flex container, so it goes on the item. The post is the container itself. Nothing around the post has `display: flex`, so `align-self` on the post does nothing.

---

## Mission: Only as tall as its facts

**What you will see**: on a computer, the fact box stands beside the article, as before. Now it has a background of its own. It starts at the top of the row and ends right after its last fact, with no empty space under it. Each wiki article with a fact box shows it like that.

Right now the fact box has the same problem as the label. It goes down as far as the article goes. Give it a background, and you will see the empty space under its facts.

On a computer screen:

- The fact box has a background color of its own.
- The article and the fact box still stand side by side.
- The fact box starts at the top of the row.
- The fact box ends right after its last fact.
