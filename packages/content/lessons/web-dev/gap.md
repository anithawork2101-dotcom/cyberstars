At the cinema, there is a little space between the seats of a row, but the first seat is right next to the wall. A flex container can leave space like that between its items.

## `gap`

`gap` puts space between the items of a flex container. Only between them: never before the first one, and never after the last one.

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .badge {
    background-color: #1e3a5f;
    padding: 8px 12px;
    margin: 0;
  }

  /* show */
  .badges {
    display: flex;
    gap: 16px;
  }
  /* /show */
</style>
<div class="badges">
  <p class="badge">Swimmer</p>
  <p class="badge">Reader</p>
  <p class="badge">Cook</p>
</div>
```

The three badges have 16 pixels between them, and the first one still starts at the left edge. One rule on the container, and every space between the items is the same.

## Why not a margin?

A margin goes around each item, so it adds space at the ends of the row too:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .badge {
    background-color: #1e3a5f;
    padding: 8px 12px;
    margin: 0;
  }

  /* show */
  .badges {
    display: flex;
  }

  .badge {
    margin: 0 8px;
  }
  /* /show */
</style>
<div class="badges">
  <p class="badge">Swimmer</p>
  <p class="badge">Reader</p>
  <p class="badge">Cook</p>
</div>
```

Here, the badges have 16 pixels between them too: 8 from each side. But now the first badge doesn't start at the left edge, and the last one leaves 8 pixels at the end. With `gap`, the edges stay as they were.

## Break it on purpose

Give `gap` to the badges, not to their container:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .badge {
    background-color: #1e3a5f;
    padding: 8px 12px;
    margin: 0;
  }

  /* show */
  .badges {
    display: flex;
  }

  .badge {
    gap: 16px;
  }
  /* /show */
</style>
<div class="badges">
  <p class="badge">Swimmer</p>
  <p class="badge">Reader</p>
  <p class="badge">Cook</p>
</div>
```

The badges touch again. `gap` is the space between the items of a container, so it goes on the container. A badge isn't a flex container, so its `gap` does nothing.

---

## Mission: Room between them

**What you will see**: the cards have clear space between them, so each one reads as its own card. In the header, there is space between the station's name and the menu's first link.

Your wiki cards stand in the middle of the list, but they touch each other. And in the header, the station's name is right next to the menu.

- On `wiki.html`, there are at least 16 pixels between the cards.
- On every page, there are at least 24 pixels between the station's name and the menu.
