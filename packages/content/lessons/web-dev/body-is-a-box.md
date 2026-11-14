Open a news site on a big computer screen. The text doesn't go from one side of the screen to the other. It sits in a column in the middle, with empty space on both sides. Lines 2 metres long would be impossible to read. That column is the page's `body`, with a width.

## The body is a box too

`<body>` is an element like any other, so it's a box like any other. It has:

- a width: by default, the whole window;
- a margin: browsers give it 8 pixels on every side. That's why nothing touches the window's edge. Inspect it to see.

And everything you learned about boxes works on it.

## A column in the middle

```css preview
<style>
  html {
    background-color: #dde6f0;
  }

  body {
    background-color: white;
  }

  /* show */
  body {
    max-width: 800px;
    margin: 0 auto;
  }
  /* /show */
</style>
<h1>Our Station</h1>
<p>The station goes round the Earth every 92 minutes. Six people live here, with a greenhouse full of tomatoes and a gym they use every day.</p>
```

On a wide screen, the whole page sits in a column 800 pixels wide, in the middle. On a phone, it takes the full width. It's the same pair as before: a `max-width`, and `auto` margins on the left and right.

What about the background? A background on the `body` still covers the whole window, not only the column. Browsers use the body's background as the page's background.

## Some space on a phone

With `margin: 0 auto`, the body's left and right margins are 0 on a narrow phone. So the text touches the screen's edges. Add some padding inside:

```css preview
<style>
  html {
    background-color: #dde6f0;
  }

  body {
    background-color: white;
  }

  /* show */
  body {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 16px;
  }
  /* /show */
</style>
<h1>Our Station</h1>
<p>The station goes round the Earth every 92 minutes. Six people live here, with a greenhouse full of tomatoes and a gym they use every day.</p>
```

## Break it on purpose

Give the body `width: 800px` instead of `max-width`. On a big screen, it looks the same. On a phone, the page is 800 pixels wide, and it slides sideways. Most of all on the body, you want `max-width`.

---

## Mission: A column for every page

**What you will see**: on a screen 1600 pixels wide, every page sits in a column in the middle, not wider than 960 pixels. On a phone, it still fits, and nothing slides sideways.

On a wide screen, your pages' lines go across the whole window.

- On a screen 1600 pixels wide, the page's body is at most 960 pixels wide.
- The body is centered in the window.
- On a phone 320 pixels wide, nothing slides sideways.
- The crew directory gets the same column.
