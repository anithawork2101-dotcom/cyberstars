Open a website on your phone and move it sideways by mistake. If the page slides left and right, something on it is wider than the screen. It's usually a picture. A picture 600 pixels wide doesn't fit on a phone 360 pixels wide.

## `max-width: 100%`

`max-width` is the biggest width something can have. With `100%`, the biggest width is "as wide as the space it's in":

```css preview
<style>
  /* show */
  img {
    max-width: 100%;
  }
  /* /show */
</style>
<h2>Our Station</h2>
<img src="img/station.svg" alt="The space station" width="640" height="400" />
<p>And our cat, who came to visit:</p>
<img src="img/cat.svg" alt="A grey cat asleep in a shoebox" width="150" height="100" />
```

- on a wide screen, the picture shows at its own size, because it already fits;
- on a narrow phone, it gets smaller, to the width of the screen, never wider.

`%` is a new unit: a part of the space around. `100%` is all of it, and `50%` is half of it.

## Keep the shape: `height: auto`

But there is a problem. Your pictures have a `height` in the HTML. When the picture gets narrower, the height stays the same, so the picture is pressed flat. Fix it with:

```css preview
<style>
  /* show */
  img {
    max-width: 100%;
    height: auto;
  }
  /* /show */
</style>
<h2>Our Station</h2>
<img src="img/station.svg" alt="The space station" width="640" height="400" />
<p>And our cat, who came to visit:</p>
<img src="img/cat.svg" alt="A grey cat asleep in a shoebox" width="150" height="100" />
```

`height: auto` means "work out the height from the width". So the picture gets smaller in its own shape. The `width` and `height` in the HTML still do their first job: they tell the browser the picture's shape before it loads, so the text doesn't jump.

## Trying it

Your preview is as wide as its panel. Make the panel narrow, and watch the pictures get smaller. Many browsers can also show a page at a phone's width. You will learn how later in the course.

## Break it on purpose

Use `width: 100%` instead of `max-width`:

```css preview
<style>
  /* show */
  img {
    width: 100%;
  }
  /* /show */
</style>
<h2>Our Station</h2>
<img src="img/station.svg" alt="The space station" width="640" height="400" />
<p>And our cat, who came to visit:</p>
<img src="img/cat.svg" alt="A grey cat asleep in a shoebox" width="150" height="100" />
```

Now **every** picture grows to the full width, even a small one, which gets huge and blurry. `max-width` only makes smaller what is too big, and leaves the rest as it is.

---

## Mission: Pictures on a phone

**What you will see**: on a screen 320 pixels wide, both pictures fit in their own shape, and nothing slides sideways.

On a phone, your divider is wider than the screen, and the page slides sideways.

- On a screen 320 pixels wide, the page has nothing to scroll sideways.
- The pictures get smaller to fit.
- The pictures keep their shape.
