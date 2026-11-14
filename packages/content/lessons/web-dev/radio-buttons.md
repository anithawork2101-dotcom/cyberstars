A T-shirt comes in small, medium or large. You choose one size, never two. On a paper form, people sometimes tick two boxes by mistake. On a web page, there is a kind of button that makes that impossible.

## `type="radio"`

```html preview
<input type="radio" id="small" name="size" value="S" />
<label for="small">Small</label><br />
<input type="radio" id="medium" name="size" value="M" />
<label for="medium">Medium</label><br />
<input type="radio" id="large" name="size" value="L" />
<label for="large">Large</label>
```

You see round buttons, each with its label. Click **Small**, then **Large**: Small isn't on any more. Only one can be on.

They are called **radio buttons**, after the buttons of old car radios. You pushed the button for one station, and the button pushed before jumped out.

## One name, one choice

The `name` ties the buttons together. All the round buttons with the same name are one question, and only one of them can be on. Each one has its own `value`, and the form sends the one that is on:

```html preview
<form>
  <input type="radio" id="small" name="size" value="S" />
  <label for="small">Small</label><br />
  <input type="radio" id="large" name="size" value="L" />
  <label for="large">Large</label><br />
  <button>Order</button>
</form>
```

Choose **Large** and click **Order**:

```text
The form was sent: size=L
```

Once one is on, a second click on it doesn't turn it off. To change your answer, you choose another one.

## Break it on purpose

Give each button its own name:

```html preview
<input type="radio" id="small" name="small" value="S" />
<label for="small">Small</label><br />
<input type="radio" id="medium" name="medium" value="M" />
<label for="medium">Medium</label><br />
<input type="radio" id="large" name="large" value="L" />
<label for="large">Large</label>
```

Click all three: all three are on, and you can't turn any of them off. Three names make three questions, each with only one answer.

---

## Mission: Window or aisle?

**What you will see**: two round buttons, like "By the window" and "On the aisle". Choose the aisle and send: the console's line has `seat=aisle` in it.

Your booking form asks about the extras, but not about the seat. A passenger sits by the window or by the aisle, the path between the seats. Never both.

- Add two round buttons named `seat`.
- Their values are `window` and `aisle`.
- Only one can be on at a time, and the form sends the one chosen.
- Each has a label, and a click on the label chooses its button.
