You open a video on your phone, and for a second it isn't there yet. What do you see? A small circle that turns. It tells you: "I'm working on it, don't leave." Without it, you would think the phone stopped working. Today, you will make that circle yourself, only with CSS. It's called a **spinner**.

## A ring with one colored side

A spinner is a ring that turns. You already know every piece of it:

- a box as wide as it is tall,
- a border all around it,
- corners so round that the box becomes a circle (`border-radius: 50%`),
- and one side of the border in another color, so you can see it turn.

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  /* show */
  .loader {
    width: 40px;
    height: 40px;
    border: 5px solid #1e3a5f;
    border-top-color: #ffd166;
    border-radius: 50%;
  }
  /* /show */
</style>
<div class="loader"></div>
```

What do you see? A dark ring, with its top quarter in yellow. `border` gives all four sides the same border, then `border-top-color` only changes the color of the top one. The order matters: written before `border`, it would be replaced.

## Make it turn

Now the animation you know from the settings page: `@keyframes` with `rotate()`, and `infinite` so it never stops. A spinner turns at the same speed all the time, so its timing is `linear`:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  /* show */
  .loader {
    width: 40px;
    height: 40px;
    border: 5px solid #1e3a5f;
    border-top-color: #ffd166;
    border-radius: 50%;
    animation: turn 1s linear infinite;
  }

  @keyframes turn {
    to {
      transform: rotate(360deg);
    }
  }
  /* /show */
</style>
<div class="loader"></div>
```

The ring turns once every second, forever. A keyframes rule with only `to` starts from how the element looks anyway: here, not turned at all.

Change `linear` to `ease`, and look again. Now it slows down at the end of every turn, as if it got tired. That's why spinners use `linear`.

## A spinner in a line of text

A spinner often sits before a text, like "Loading...". A `<span>` fits in a line, but a span is inline: it ignores `width` and `height`. `display: inline-block` makes it a box that still sits in the line:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  /* show */
  .loader {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 3px solid #1e3a5f;
    border-top-color: #ffd166;
    border-radius: 50%;
    vertical-align: middle;
    animation: turn 1s linear infinite;
  }
  /* /show */

  @keyframes turn {
    to {
      transform: rotate(360deg);
    }
  }
</style>
<!-- show -->
<p><span class="loader" aria-hidden="true"></span> Loading the video...</p>
<!-- /show -->
```

The span is only for the eye, so `aria-hidden="true"` keeps a screen reader away from it. The words "Loading the video..." already say everything.

## Break it on purpose

Remove `display: inline-block;` from the last example. The spinner becomes a very thin line: the span has no width and height of its own any more, only its borders. Then remove `border-radius: 50%;`: a square turns, which looks more like a broken fan than a spinner.

---

## Mission: The tracker is working on it

**What you will see**: the loading line now starts with a small ring, about as big as the letters, with one side in another color. It turns round and round before `Loading the starships...`.

The tracker's loading line only says it's loading. A spinner before it would show that the page is really working.

- In the paragraph `tracker-status`, before its text, add an element with the class `spinner` that only the eye meets.
- The spinner is a round ring, with a border of at least 2px all around it.
- It's between 16px and 48px wide and tall, with one side in another color.
- It turns round and round, and never stops by itself.
- It stands still for a visitor who asks for less movement: on their device, or with Less on the settings page.

A span ignores `width` and `height` until it is an inline block.
