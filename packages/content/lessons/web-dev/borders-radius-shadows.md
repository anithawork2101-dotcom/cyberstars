Look at the buttons and cards in the apps on your phone. Almost none have sharp corners. They are a little round, like a bank card, or the phone itself. Round corners feel softer and friendlier.

## `border-radius`

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
  }

  /* show */
  .member {
    border-radius: 12px;
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

Each corner of the box becomes a curve. The number is the size of the curve: the bigger it is, the rounder the corner.

It makes everything round: the background, the border, and the box's shadow, as you will see soon. A box with no background and no border shows no change, because there is nothing to make round.

## Values to try

- `4px`: only a little round, like a ticket;
- `12px`: a soft card;
- `50%`: on a square box, a full circle. Half the box's size makes each corner round all the way.

## One corner at a time

Each corner has its own property, like `border-top-left-radius`. Or you can write four values in one, going round like a clock from the top left:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  .tab {
    display: inline-block;
    padding: 8px 16px;
    background-color: #1e3a5f;
  }

  .panel {
    padding: 16px;
    background-color: #1e3a5f;
  }

  /* show */
  .tab {
    border-radius: 12px 12px 0 0;
  }
  /* /show */
</style>
<div class="tab">Games</div>
<div class="panel">Chess, cards and puzzles.</div>
```

Round at the top, square at the bottom, like the tab of a folder.

## Break it on purpose

Give a card a huge radius: `border-radius: 200px`. The card looks like a pill, and the text near its corners is now outside the round shape, cut by the curve. Make it round, but not too round: the padding should still be bigger than the curve.

---

## Mission: Soft corners

**What you will see**: every card on `crew.html` and the duty board have soft, round corners.

Your cards and your duty board are boxes with sharp corners.

- Every card's corners are round by at least 8 pixels.
- The duty list's corners are round by at least 8 pixels.
