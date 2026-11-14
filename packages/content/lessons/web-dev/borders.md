Back to the photo in a frame. Around the white band of card comes the frame itself. Some frames are thin and black, some are thick and gold, some are made of little dots. On a web page, that frame is the box's **border**.

## `border`

A border has three parts: how **thick** it is, its **style**, and its **color**:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  .member {
    padding: 16px;
  }

  /* show */
  .member {
    border: 2px solid gold;
  }
  /* /show */
</style>
<div class="member">
  <h3>Sam Green</h3>
  <p>Plays chess on Sundays.</p>
</div>
```

You see a solid gold line, 2 pixels thick, all around the box. It sits right outside the padding.

The three parts can come in any order, with a space between them. The styles you will use most:

- `solid`: one plain line;
- `dashed`: short lines with gaps, like a coupon you cut out;
- `dotted`: a row of dots;
- `double`: two thin lines (it needs at least 3 pixels to show).

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  .coupon {
    padding: 8px;
  }

  /* show */
  .coupon {
    border: 3px dashed tomato;
  }
  /* /show */
</style>
<p class="coupon">10% off at the snack bar this week.</p>
```

## The box grows

A border makes the box bigger. A card with a 2-pixel border is 4 pixels wider than before: 2 on each side. You will see how to control that in a later lesson.

## Break it on purpose

Leave out the style:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  .member {
    padding: 16px;
  }

  /* show */
  .member {
    border: 2px gold;
  }
  /* /show */
</style>
<div class="member">
  <h3>Sam Green</h3>
  <p>Plays chess on Sundays.</p>
</div>
```

No border at all! Without a style, a border's style is `none`. A border with the style `none` doesn't show, whatever its thickness and color. Of the three parts, you can't leave out the style.

---

## Mission: Framed cards

**What you will see**: every card on `crew.html` has a thin line all around it, in a color that goes with its background.

Your crew cards have a background and space inside. Give them a frame.

- Every card has a border all around it.
- The border's style can be anything but `none`.
- The border is at least 1 pixel thick.
