Open an old website on a phone: everything is tiny. You make it bigger with two fingers, then move the page left and right to read each line. The page was drawn for a computer's screen, then made small to fit the phone.

## Why it happens

A phone's browser doesn't know if a page was made for phones. To be safe, it draws every page as if the screen were about 980 pixels wide, like on a computer. Then it makes the whole drawing smaller to fit the phone, text too.

So even a page that could fit a phone, with `max-width`, `rem` and pictures at `max-width: 100%`, shows tiny.

## `<meta name="viewport">`

One line in the `<head>` tells the browser the page was made for phones too:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

- `width=device-width`: draw the page as wide as the screen really is. A phone that is 390 pixels wide gets a page 390 pixels wide.
- `initial-scale=1`: start without making the page bigger or smaller.

The **viewport** is the part of the page you see in the window. Now the text has its real size, and the page fits the screen's width.

On a computer, nothing changes. Open the page on a phone to see the difference, or ask a friend to.

Write it exactly like this on every page. It's the same line for every site, so you don't need to change it.

## Break it on purpose

Write a number instead of `device-width`:

```html
<meta name="viewport" content="width=980" />
```

The phone draws the page 980 pixels wide again, and makes it smaller: tiny text, like with no line at all. A small typo, like `width=device_width`, does the same. The browser doesn't know the word, so it ignores it.

---

## Mission: Made for phones

**What you will see**: on a computer, the pages look as before. On a phone, the text is as big as in other apps, and the page is as wide as the screen.

Many visitors open the station's site on a phone, in the shuttle on the way to the station. Today, every page shows tiny there, like an old website.

- Every page, each wiki page too, is made for the phone's width.
- Each page has the line with `width=device-width` in its `<head>`.
