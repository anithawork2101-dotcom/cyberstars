Some people can't read small text easily. So they set their phone or browser to show all text bigger. Grandparents often do that. A good page grows with that setting. A page with all its sizes in pixels doesn't: 18 pixels stays 18 pixels, whatever the visitor asked for.

## `rem`

`rem` is a size that follows the visitor's setting. `1rem` means "the normal text size of this browser":

- for most people, that's 16 pixels, so `1rem` is 16 pixels;
- for someone who chose "large text", it may be 20 or 24 pixels, and then `1rem` is that size.

Other sizes are a number of times that size:

```css preview
<style>
  /* show */
  p {
    font-size: 1.125rem;
  }

  h1 {
    font-size: 2.5rem;
  }
  /* /show */
</style>
<h1>My Favourite Games</h1>
<p>We keep them in the cupboard by the window.</p>
```

With the usual 16-pixel setting:

- the paragraphs are 16 × 1.125 = **18 pixels**;
- the heading is 16 × 2.5 = **40 pixels**.

That's exactly what you had before. But for someone whose setting is 24 pixels, the paragraphs are 27 pixels and the heading is 60. The page keeps its proportions: everything grows together.

## Pixels or rem?

For **text sizes**, use `rem`. Then the page gives each visitor what they need.

Pixels are still fine for small things that don't need to grow with the text, like a thin line or a picture's width.

To turn a pixel size into rem, divide it by 16: 40 pixels is 40 ÷ 16 = `2.5rem`.

## Break it on purpose

Write a size in rem, but forget to divide:

```css preview
<style>
  /* show */
  p {
    font-size: 18rem;
  }
  /* /show */
</style>
<h1>My Favourite Games</h1>
<p>We keep them in the cupboard by the window.</p>
```

That's 18 times the normal size. Each letter is almost 300 pixels tall, and one word fills the screen. `rem` counts in "normal text sizes", not in pixels.

---

## Mission: Text that grows

**What you will see**: with the browser's usual setting, the page looks as it does now. With a bigger setting, all its text grows.

Your sizes are in pixels. Some visitors set their browser to show bigger text, and your page doesn't follow them.

- Every paragraph is between `1rem` and `1.25rem`.
- The biggest heading is at least `2rem`.
- Both sizes are written in `rem`, so they follow the visitor's setting.
