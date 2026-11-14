Put a sheet of very thin paper over a drawing. You still see the drawing, only softer, as if it were further away. Colors on a screen can be like that too: a little **see-through**.

## `rgb()`: the same mix, in numbers

You know that a color is a mix of red, green and blue light. `rgb()` writes that mix with plain numbers, from `0` (off) to `255` (full):

```css preview
<style>
  /* show */
  h3 {
    color: rgb(0, 128, 96);
  }
  /* /show */
</style>
<h3>Chess</h3>
<p>Our club meets on Fridays.</p>
<p class="note">Updated on 3 May.</p>
```

`rgb(0, 128, 96)` means: no red, green at half, and a little blue. That's a sea green. It's the same idea as a hex color, but easier to read and change. To make it a little more blue, you make the last number bigger.

- `rgb(0, 0, 0)` is black, and `rgb(255, 255, 255)` is white;
- `rgb(255, 0, 0)` is pure red;
- `rgb(29, 78, 137)` is exactly `#1d4e89`, the station's blue.

## A fourth number: see-through

Add a fourth number, the **alpha**, and the color becomes see-through:

```css preview
<style>
  /* show */
  .note {
    color: rgb(0, 0, 0, 0.5);
  }
  /* /show */
</style>
<h3>Chess</h3>
<p>Our club meets on Fridays.</p>
<p class="note">Updated on 3 May.</p>
```

Alpha goes from `0` to `1`:

- `1` is solid, as if there were no fourth number;
- `0.5` is half see-through: black text at 0.5 on a white page looks grey;
- `0` can't be seen at all.

See-through text looks quieter than the text around it. That's useful for things that matter less: a date, a side note, an address.

## Break it on purpose

Write the alpha as a big number, like 50:

```css preview
<style>
  /* show */
  .note {
    color: rgb(0, 0, 0, 50);
  }
  /* /show */
</style>
<h3>Chess</h3>
<p>Our club meets on Fridays.</p>
<p class="note">Updated on 3 May.</p>
```

Any number above 1 counts as 1. So the text is solid black, not half see-through. Alpha is a number from 0 to 1, or a percent with its `%`: `50%`.

---

## Mission: Quieter details

**What you will see**: Morning Shift and Night Shift in slate grey, and the address in a softer blue than the part headings.

Your designer sent two more colors. One is a slate grey for the shift headings: `rgb(84, 104, 125)`. The other is for the station's address: the logo's blue, see-through at 70%.

- The shift headings are `rgb(84, 104, 125)`.
- The address paragraph has the class `address`.
- The address text is the logo's blue, `rgb(29, 78, 137)`, with an alpha of `0.7`.
