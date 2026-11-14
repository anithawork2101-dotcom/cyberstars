On many phones, you can choose a color in the settings, and the switches and ticks of every app take it. On a web page, boxes to tick and round buttons come in the browser's own blue, whatever colors your page has. One property changes that.

## `accent-color`

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  /* show */
  input[type="checkbox"] {
    accent-color: orange;
  }
  /* /show */
</style>
<input type="checkbox" id="goal" checked />
<label for="goal">Goal scored</label>
<input type="checkbox" id="card" />
<label for="card">Yellow card</label>
```

The ticked box is now orange, not blue. Tick the other one: orange too. The browser still draws the box, and it chooses the color of the tick itself, so the tick shows on your orange.

It works the same way on round buttons:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  /* show */
  input[type="radio"] {
    accent-color: orange;
  }
  /* /show */
</style>
<input type="radio" id="home" name="team" value="home" checked />
<label for="home">Home team</label>
<input type="radio" id="away" name="team" value="away" />
<label for="away">Away team</label>
```

## It's inherited

Like `color`, `accent-color` passes from an element to everything inside it. Set it once on a form, and every box in it takes it:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  /* show */
  form {
    accent-color: orange;
  }
  /* /show */
</style>
<form>
  <input type="checkbox" id="goal" checked />
  <label for="goal">Goal scored</label>
  <input type="radio" id="home" name="team" value="home" checked />
  <label for="home">Home team</label>
</form>
```

## Break it on purpose

Try `color` instead:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  /* show */
  input[type="checkbox"] {
    color: orange;
  }
  /* /show */
</style>
<input type="checkbox" id="goal" checked />
<label for="goal">Goal scored</label>
```

Still blue. `color` is for text, and a box to tick has no text. `background-color` doesn't help either: the browser draws the box by itself, over it.

---

## Mission: Station colors

**What you will see**: Wi-Fi's tick and the dot of the chosen seat show in a color of your site, like the gold of your headings.

The seats and the extras of your form are still ticked in the browser's blue, which doesn't belong to any part of your site.

- Every box to tick has a color you choose, not the browser's.
- Every round button too.
- A box or a round button added to the form later gets the color too.
