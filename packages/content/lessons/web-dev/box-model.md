Look at a photo in a frame on a wall. There is the photo itself, then a white band of card around it, then the frame, and then some empty wall before the next picture. Every element on a web page is built the same way: a **box**, with layers around what it holds.

## Every element is a box

Even when you can't see it, every element sits in a rectangle: a heading, a paragraph, a card. Give one a background, and you see its box:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  /* show */
  .member {
    background-color: #1e3a5f;
  }
  /* /show */
</style>
<div class="member">
  <h3>Sam Green</h3>
  <p>Plays chess on Sundays.</p>
</div>
```

The whole `div` is blue, from side to side. Its text sits right against the edges, with no space.

## `padding`: space inside the box

`padding` is like the white card around the photo. It is space **inside** the box, between its edges and what it holds:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  /* show */
  .member {
    background-color: #1e3a5f;
    padding: 16px;
  }
  /* /show */
</style>
<div class="member">
  <h3>Sam Green</h3>
  <p>Plays chess on Sundays.</p>
</div>
```

Now there are 16 pixels of blue all around the text, on every side. The box grows to make space, and the text isn't against the edges any more.

The padding has the box's background color. It's part of the box, only empty.

In the next lessons, you will meet the other layers: the **border** (the frame) and the **margin** (the empty wall around it).

## Break it on purpose

Give the padding, but no background:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  /* show */
  .member {
    padding: 16px;
  }
  /* /show */
</style>
<div class="member">
  <h3>Sam Green</h3>
  <p>Plays chess on Sundays.</p>
</div>
```

The text moves away from where it was, but you can't see a box. The space is there, but you can't see it. Padding shows best on a box with a background or a border.

---

## Mission: Real cards

**What you will see**: each card on `crew.html` is a panel with its own color. The name and job are a little away from the panel's edges.

Your crew cards are only text for now. Make them look like cards.

- Every card has a background the page doesn't have.
- Every card has at least 12 pixels of space inside it, on every side.
