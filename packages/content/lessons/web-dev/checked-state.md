On a pizza website, you tick "extra cheese", and the whole line lights up. You see at once what you chose. A small tick in a small box is easy to miss. Bright words aren't.

## `:checked`

`:checked` chooses a box to tick, or a round button, while it's ticked:

```css preview
<style>
  /* show */
  input:checked {
    outline: 2px solid orange;
  }
  /* /show */
</style>
<input type="checkbox" id="cheese" name="extras" value="cheese" />
<label for="cheese">Extra cheese</label>
<input type="checkbox" id="olives" name="extras" value="olives" />
<label for="olives">Olives</label>
```

Tick a box: an orange line shows around it. Untick it: the line goes away. It works, but the box is small, and the browser draws most of it.

## The label after it, with `+`

People read the label. It comes right after its box, so `+` reaches it. `input:checked + label` means "a label right after a ticked box":

```css preview
<style>
  /* show */
  input:checked + label {
    color: darkorange;
    font-weight: bold;
  }
  /* /show */
</style>
<input type="checkbox" id="cheese" name="extras" value="cheese" />
<label for="cheese">Extra cheese</label>
<input type="checkbox" id="olives" name="extras" value="olives" />
<label for="olives">Olives</label>
```

Tick Olives: its words turn orange and bold. Untick it: they go back to normal. Round buttons work the same way: only the label of the one chosen lights up.

## Break it on purpose

Use `~` instead of `+`:

```css preview
<style>
  /* show */
  input:checked ~ label {
    color: darkorange;
    font-weight: bold;
  }
  /* /show */
</style>
<input type="radio" id="small" name="size" value="S" />
<label for="small">Small</label>
<input type="radio" id="medium" name="size" value="M" />
<label for="medium">Medium</label>
<input type="radio" id="large" name="size" value="L" />
<label for="large">Large</label>
```

Choose Small: all three labels light up. `~` chooses every label after the ticked box, not only its own label. `+` means right after.

---

## Mission: What did I pick?

**What you will see**: Wi-Fi is ticked at the start, so its label already stands out, for example in bold gold. Choose the aisle seat: "On the aisle" stands out, and "By the window" doesn't. Untick Wi-Fi: its label looks like the others again.

Your form only shows the seat and the extras a passenger chose with a small dot or tick.

- The label of every ticked box stands out from the labels of the choices not chosen.
- The label of the chosen seat stands out too.
- When a choice is no longer chosen, its label looks like the others again.
- A label that stands out is still easy to read: a contrast of at least 4.5:1 with its background.

Each label comes right after its box.
