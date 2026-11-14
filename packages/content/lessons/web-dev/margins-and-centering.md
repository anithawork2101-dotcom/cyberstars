To hang a picture in the middle of a wall, you measure the empty wall on the left and on the right, and make them the same. CSS can do that measuring for you.

## `margin: 0 auto`

You can center a box that is narrower than its space, with `auto` margins on the left and right:

```css preview
<style>
  .notice {
    background-color: lightyellow;
  }

  /* show */
  .notice {
    max-width: 200px;
    margin: 0 auto;
  }
  /* /show */
</style>
<p class="notice">The pool is closed on Monday.</p>
```

`0 auto` is the short way with two values: `0` for the top and bottom, `auto` for the left and right. `auto` means "the browser works it out". It takes the space that is left, and gives the same amount to each side. So the box ends up in the middle.

On a phone, there is no space left. So each `auto` is 0, and the box just takes the full width.

## It needs a width

`auto` margins only center a box that is **narrower** than its space. A paragraph with no width already takes the full width. There is no space left to share, so nothing moves:

```css preview
<style>
  .notice {
    background-color: lightyellow;
  }

  /* show */
  .notice {
    margin: 0 auto;
  }
  /* /show */
</style>
<p class="notice">The pool is closed on Monday.</p>
```

So they always go together: a `width` or `max-width`, and `margin: 0 auto`.

## Break it on purpose

Write `margin: auto 0` instead:

```css preview
<style>
  .notice {
    background-color: lightyellow;
  }

  /* show */
  .notice {
    max-width: 200px;
    margin: auto 0;
  }
  /* /show */
</style>
<p class="notice">The pool is closed on Monday.</p>
```

The notice is on the left again. Now `auto` is on the top and bottom, and the left and right are 0. With two values, the first is for the top and bottom, and the second for the left and right.

---

## Mission: The duty board in the middle

**What you will see**: on a wide screen, the duty board on `crew.html` is in the middle of the page, with the same empty space on its left and on its right.

Your duty board stops at 600 pixels, but it sits on the left, with empty space on its right.

- The duty list is centered across the page.
