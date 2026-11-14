Look at the sky at sunset: orange near the horizon, then purple, then dark blue. There is no sharp line anywhere. One color slowly turns into the next. That's a **gradient**, and CSS can draw one, with no picture file at all.

## `linear-gradient`

You use a gradient like a background picture:

```css preview
<style>
  .header {
    padding: 16px;
    color: white;
  }

  /* show */
  .header {
    background-image: linear-gradient(orange, purple);
  }
  /* /show */
</style>
<div class="header">
  <h1>Night Owls</h1>
</div>
```

It goes from orange at the top to purple at the bottom, and mixes them in between.

Add a direction first, and more colors:

```css preview
<style>
  .header {
    padding: 16px;
    color: white;
  }

  /* show */
  .header {
    background-image: linear-gradient(90deg, orange, purple, darkblue);
  }
  /* /show */
</style>
<div class="header">
  <h1>Night Owls</h1>
</div>
```

`90deg` turns it, so it goes from left to right, not from top to bottom. `0deg` is up, `90deg` is to the right, and `180deg` is down. With three colors, it goes orange, then purple, then dark blue.

## `radial-gradient`

A radial gradient goes from the middle outwards, in a circle:

```css preview
<style>
  .spotlight {
    padding: 40px;
    text-align: center;
    color: darkblue;
  }

  /* show */
  .spotlight {
    background-image: radial-gradient(white, darkblue);
  }
  /* /show */
</style>
<div class="spotlight">
  <p>Tonight's show</p>
</div>
```

White in the middle, slowly turning dark blue at the edges, like a spotlight on a stage.

## Easy to read on top

A gradient changes color across the box. So text on it has a different background at each end. Check the contrast at the lightest point and at the darkest point, not only one.

## Break it on purpose

Write it as `background-color`:

```css preview
<style>
  .header {
    padding: 16px;
    color: white;
  }

  /* show */
  .header {
    background-color: linear-gradient(orange, purple);
  }
  /* /show */
</style>
<div class="header">
  <h1>Night Owls</h1>
</div>
```

Nothing shows. A gradient is a kind of **image**, so it goes in `background-image`, never in `background-color`.

---

## Mission: The board's header

**What you will see**: the header cells of the flight table (Flight, Destination, Departs, Status) sit on a gradient in your own colors, and their words are easy to read on it.

The flight table's header row should look like the top of a board with departures, with a soft light.

- The flight table's header cells have a gradient as their background.
- The flights' cells keep their own background, without the gradient.

Choose colors dark enough for the light words to be easy to read, from one end to the other.
