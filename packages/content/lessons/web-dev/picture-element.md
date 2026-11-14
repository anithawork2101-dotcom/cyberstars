A wide photo of a beach looks great on a computer. On a phone, the same photo is a thin band, and the people in it are dots. So for a phone, you might cut it differently: a square, close to the people. That's not the same picture in a smaller size. It's another picture, chosen for a narrow screen.

## `srcset` only chooses a size

`srcset` from the last lesson offers one photo in several sizes, and the browser chooses one. It's always the same photo. On a phone, the wide Earth just gets smaller, and the satellite in its corner becomes a tiny dot.

## `<picture>` and `<source media>`

`<picture>` holds an `<img>` and, before it, one or more `<source>`. Each `<source>` has a media query in `media`, and the file to show when it's true in `srcset`:

```html preview
<picture>
  <source media="(max-width: 400px)" srcset="img/earth-square.jpg" />
  <img src="img/earth-large.jpg" alt="The Earth seen from space, with a satellite" width="640" height="400" />
</picture>
```

Make your preview's panel narrower than 400 pixels: the wide photo turns into a square one, around the satellite. Make it wider: the wide photo comes back.

The browser reads the `<source>`s from the top, and takes the first one whose `media` is true. If none is true, it uses the `<img>`.

## The `<img>` is still the picture

`<picture>` and `<source>` show nothing by themselves. The `<img>` is what shows: it keeps the `alt`, the `class` and the CSS, whatever file it gets. That's why it must be there, and last.

The `<img>` can still have its own `srcset` and `sizes`. Then it chooses its size as before, whenever no `<source>` counts.

## Break it on purpose

Put the `<source>` after the `<img>`. On a narrow window, the square never comes: the browser stops at the `<img>`, and never reads a `<source>` after it. Then remove the `<picture>` around them. A `<source>` only counts inside a `<picture>`, so the browser skips it, and the square never comes either.

---

## Mission: A square Earth for the phone

**What you will see**: on a phone, the photo is a square, around the satellite above the Earth. On a computer, it's the wide photo, as before.

On a phone, the photo of the Earth is a thin band, and the satellite in its corner is too small to see.

- In a window 600 pixels wide or narrower, the photo shows `img/earth-square.jpg`, the square one.
- In a window 640 pixels wide, it shows `img/earth-small.jpg`, as before.
- On a computer, it shows `img/earth-large.jpg`, as before.
- The photo keeps its text for people who can't see it, its caption and its width.
- Nothing comes out sideways.
