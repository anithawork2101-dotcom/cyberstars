Put a sheet of paper on a desk under a lamp. It makes a soft shadow, and you can see it lies on top of the desk. On a screen, a shadow does the same thing: it makes a box look like it floats above the page.

## `box-shadow`

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  .member {
    background-color: #1e3a5f;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 12px;
  }

  /* show */
  .member {
    box-shadow: 0 4px 12px rgb(0, 0, 0, 0.4);
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

Four values, in this order:

1. `0`: how far the shadow moves to the **right**. 0 means not at all;
2. `4px`: how far it moves **down**. A shadow a little below the box looks like the light comes from above;
3. `12px`: how **blurry** it is. 0 is a hard edge, and bigger is softer;
4. `rgb(0, 0, 0, 0.4)`: its **color**. Here, black at 40%: a see-through shadow.

The shadow takes the box's shape, round corners too. It never takes any space, so it doesn't push anything away.

## Soft and quiet

The best shadows are hard to notice: moved a little, very blurry, with a see-through color. A hard black shadow, like `5px 5px 0 black`, looks like a cartoon. That's fun sometimes, but not for a card.

On a dark page like yours, a shadow must be darker than the page, or you can't see it. Pure black at 40 to 60% works.

## Break it on purpose

Give the shadow a light color on the dark page: `0 4px 12px rgb(255, 255, 255, 0.4)`. Now the cards seem to shine, not float. That's not wrong, only a different look. Then make the blur `0`: a copy of the card with hard edges sits under it. Try a few values, and find the one you like.

---

## Mission: Floating cards

**What you will see**: every card on `crew.html` seems to float a little above the page, with a soft shadow under it.

Your cards lie flat on the page.

- Every card has a shadow.
