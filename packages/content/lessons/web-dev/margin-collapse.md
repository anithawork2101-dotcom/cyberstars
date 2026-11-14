Two people stand in a line. One says "I need a metre of space around me". The other says "I need a metre and a half". How far apart do they stand? Not two and a half metres: a metre and a half is enough for both. Margins between boxes work the same way.

## Margins don't add up

Here are two boxes, one under the other:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  .member {
    background-color: #1e3a5f;
    padding: 16px;
  }

  /* show */
  .member {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  /* /show */
</style>
<div class="member">
  <h3>Sam Green</h3>
  <p>Plays chess on Sundays.</p>
</div>
<div class="member">
  <h3>Lea Park</h3>
  <p>Runs the card games.</p>
</div>
```

You might expect 30 + 20 = 50 pixels between two members: the first one's bottom margin plus the second one's top margin. But there are only **30**. When the margin under one box meets the margin over the next box, they become one margin, as big as the bigger of the two. This is called **margin collapse**.

The browser does this on purpose. Paragraphs have a margin above and below them. Without margin collapse, the space between two paragraphs would be twice the space at the top of the page.

## When it happens

Margins collapse only:

- **up and down**, between boxes one above the other. Margins side by side never collapse;
- **margins**, never padding. Padding always adds up, because it's inside each box.

## Inspect shows it

Inspect the first box, then the second one. Both show their margins in orange, and the two orange parts **cover each other** in the gap. That's the margin collapse.

## Break it on purpose

You want 50 pixels between the members. Making both margins bigger doesn't work the way you think:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  .member {
    background-color: #1e3a5f;
    padding: 16px;
  }

  /* show */
  .member {
    margin-top: 25px;
    margin-bottom: 25px;
  }
  /* /show */
</style>
<div class="member">
  <h3>Sam Green</h3>
  <p>Plays chess on Sundays.</p>
</div>
<div class="member">
  <h3>Lea Park</h3>
  <p>Runs the card games.</p>
</div>
```

You get 25, not 50. To get 50, give one side all of it: `margin-bottom: 50px`, and no margin on top.

---

## Mission: The right gap

**What you will see**: the gap between each card on `crew.html` and the next grows to 24 pixels or more.

The cards should stand further apart. Use Inspect to see the cards' margins, and check if two of them cover each other.

- There are at least 24 pixels between each card and the next one.
