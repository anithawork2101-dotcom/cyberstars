The big screen over the gates at an airport often shows a picture behind its words: a sky, a city, the airline's plane. The picture isn't part of the information. It's a **background**, and CSS can put one behind any box.

## `background-image`

```css preview
<style>
  /* show */
  .banner {
    background-image: url("img/sky.svg");
    height: 160px;
  }
  /* /show */
</style>
<div class="banner"></div>
<p>Flights leave from gate 4.</p>
```

`url(...)` says which picture, with a path like an `<img>`'s `src`. The path starts from the **style sheet**, not from the page.

An empty `div` with this class shows the picture as its background, 160 pixels tall. The picture doesn't need to be in the HTML at all.

## Size and position

By default, a background shows at its own size, starting at the top left corner. It repeats like tiles to fill the box. Usually you want something else:

```css preview
<style>
  /* show */
  .banner {
    background-image: url("img/sky.svg");
    background-size: cover;
    background-position: center;
    height: 160px;
  }
  /* /show */
</style>
<div class="banner"></div>
<p>Flights leave from gate 4.</p>
```

- `background-size: cover`: make the picture bigger or smaller until it **covers** the whole box, in its own shape. Some of its edges may be cut off;
- `background-position: center`: keep the middle of the picture where you can see it.

`background-size: contain` is the opposite of `cover`: the whole picture fits inside the box, with empty space around it if needed.

## Pictures with a meaning

A background has no `alt`, so a screen reader skips it. A picture with information, like a map or a photo of someone, goes in an `<img>`. Backgrounds are for decoration.

## Break it on purpose

Leave out the height on an empty box. It's 0 pixels tall, so its background has no space to show. A box with only a background needs a size.

---

## Mission: A banner

**What you will see**: under the schedule's introduction, a wide banner shows the station picture. The picture fills the banner without being pressed flat, and you can see the middle of the station.

The schedule page gets a banner at the top, like the big screen over the gates of a spaceport.

- Right after the introduction paragraph, add an empty `div` with the class `banner`.
- Its background is `img/station.svg`.
- The picture covers the whole banner, and it's centered.
- The banner is between 120 and 240 pixels tall.

The path in `url()` starts from `style.css`.
