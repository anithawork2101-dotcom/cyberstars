You order a picture frame "30 centimetres wide". Do you mean the picture is 30 cm, and the frame adds more? Or is the whole thing 30 cm, frame too, so it fits the space on your wall? CSS asks the same question about boxes.

## The surprise

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  .member {
    background-color: #1e3a5f;
    margin-bottom: 16px;
  }

  /* show */
  .member {
    width: 250px;
    padding: 16px;
    border: 2px solid gold;
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

How wide is a member box on the page? Not 250 pixels. Inspect it:

```text
250 (width) + 16 + 16 (padding) + 2 + 2 (border) = 286 pixels
```

By default, `width` is only the **content**. The padding and the border come on top. Change the padding, and the box's real size changes too.

## `box-sizing: border-box`

One line fixes it:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  .member {
    background-color: #1e3a5f;
    margin-bottom: 16px;
  }

  /* show */
  .member {
    box-sizing: border-box;
    width: 250px;
    padding: 16px;
    border: 2px solid gold;
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

Now `width` means the **whole box**, with the border: 250 pixels on the page. The padding and the border fit **inside** it, and the content gets what is left: 250 − 32 − 4 = 214 pixels. Change the padding, and the box stays 250 pixels wide.

This is so much easier that most websites put it on every element. You will see it written like this: `* { box-sizing: border-box; }`. The `*` chooses every element.

## Break it on purpose

Take `border-box` away, and look at the box in Inspect: 286 again. Then make the padding 40 pixels: 250 + 80 + 4 = 334. Without `border-box`, every change to the padding or the border changes the box's size.

---

## Mission: Exactly 260

**What you will see**: Inspect a card on `crew.html`. The whole box, with its border, is 260 pixels wide.

The cards should be exactly 260 pixels wide on the page, frame too, whatever padding and border they have.

- Every card is 260 pixels wide, with its border and padding.
