140 names sound like a lot, but your screen can show more than 16 million colors. What if you want the exact blue of your school's logo? It has no name. For that, CSS lets you write a color as a **code**.

## Mixing light

Every color on a screen is a mix of three lights: **red**, **green** and **blue**. Each pixel has a tiny red, green and blue lamp, and makes each one brighter or darker. All three at full: white. All three off: black. Red and green at full, and blue off: yellow.

A **hex color** gives the strength of each light as a code of two characters:

```css preview
<style>
  /* show */
  h2 {
    color: #1d4e89;
  }
  /* /show */
</style>
<h2>Board Games</h2>
<p>We keep them in the cupboard by the window.</p>
```

You read `#1d4e89` in pairs: `1d` for red, `4e` for green, `89` for blue. Each pair goes from `00` (off) to `ff` (full). It counts with the digits `0` to `9`, then the letters `a` to `f`. Here the blue pair is the biggest, so it's a blue. All three are quite small, so it's a dark blue.

Some codes to compare:

- `#000000`: all off, black;
- `#ffffff`: all full, white;
- `#ff0000`: only red, at full;
- `#ffd166`: a lot of red, quite a lot of green, a little blue: a warm gold.

You don't work these out by hand. Designers choose colors in a design app and send you the codes. And any "color picker" website shows you the code of a color you click.

## Codes with three characters

When each pair is the same character twice, you can write it once: `#ffffff` is `#fff`, `#ff0000` is `#f00`, `#336699` is `#369`.

## Break it on purpose

Forget the `#`:

```css preview
<style>
  /* show */
  h2 {
    color: 1d4e89;
  }
  /* /show */
</style>
<h2>Board Games</h2>
<p>We keep them in the cupboard by the window.</p>
```

Without the `#`, the browser doesn't know it's a color code. It drops the declaration, and the heading keeps its old color. Write five characters, `#1d4e8`, and the same thing happens: a hex color has exactly 3 or 6.

---

## Mission: The designer's colors

**What you will see**: About the Station, Visiting Hours and Station Rules in the logo's deep blue, and Welcome aboard in its dark gold. Today on Board keeps its own color.

A designer made the station's logo, and sent you two of its colors as hex codes: a deep blue, `#1d4e89`, and a dark gold, `#7a4f01`.

- Every part heading except Today on Board is `#1d4e89`.
- The biggest heading is `#7a4f01`.
