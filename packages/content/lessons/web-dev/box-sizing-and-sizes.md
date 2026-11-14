A paragraph takes the whole width of the page, whatever its text. That's fine for long text. But a card for one person, as wide as a huge screen, looks like a long sign. Sometimes a box needs its own size.

## `width` and `height`

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
    width: 250px;
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

Each member box is now 250 pixels wide, however wide the page is. Its text goes onto new lines to fit.

`height` sets how tall a box is:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  .banner {
    background-color: #1e3a5f;
  }

  /* show */
  .banner {
    height: 120px;
  }
  /* /show */
</style>
<div class="banner">
  <h2>Welcome aboard</h2>
</div>
<p>The station goes round the Earth every 92 minutes.</p>
```

Be careful with `height`. Most boxes should be as tall as what they hold, and they do that by themselves. A fixed height on a box of text often goes wrong: write more text, and it doesn't fit any more.

## Pixels or percent

`width` takes `%` too: a part of the space the box sits in.

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
    width: 50%;
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

That's half of the space around it, on any screen. On a wide screen the box is wide, and on a phone it's narrow.

## Break it on purpose

Give a box of text a small height:

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
    height: 30px;
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

The text doesn't get smaller. It comes out under the box, over what comes next. The box is 30 pixels tall, as you asked, but the text doesn't fit in it. Take the height away, and the box grows to hold the text again.

---

## Mission: Card size

**What you will see**: each card on `crew.html` is narrower, about as wide as a postcard, and its text goes onto new lines inside it.

Your cards are as wide as the whole page. A card for one person doesn't need to be that wide.

- Every card is between 200 and 300 pixels wide.
