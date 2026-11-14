In a shop's list online, an item that is sold out often stays on the list, grey, with "sold out" next to it. You see it exists, but you can't put it in your basket. A form can do the same with a box.

## `disabled`

```html preview
<form>
  <input type="checkbox" id="snack" name="extras" value="snack" />
  <label for="snack">A snack</label>
  <input type="checkbox" id="drink" name="extras" value="drink" disabled />
  <label for="drink">A drink (sold out)</label>
  <button>Order</button>
</form>
```

Try to tick the drink, on the box or on its label: nothing happens. Press Tab: the focus jumps over it. Like `required`, you write `disabled` alone, with no `=` after it: the word is enough.

A disabled box is never sent with the form, even when it's ticked. Tick the snack and click **Order**:

```text
The form was sent: extras=snack
```

## `:disabled`

The browser makes the box a little paler, but its label looks like the others. `:disabled` chooses a disabled element, and `+` reaches its label:

```css preview
<style>
  /* show */
  input:disabled + label {
    color: gray;
  }
  /* /show */
</style>
<input type="checkbox" id="snack" name="extras" value="snack" />
<label for="snack">A snack</label>
<input type="checkbox" id="drink" name="extras" value="drink" disabled />
<label for="drink">A drink (sold out)</label>
```

Now the words show it too.

## Say why

A grey box alone is hard to understand. Is it broken? Is it for someone else? Always say why in its label: "sold out", "for members only", "closed today".

## Break it on purpose

Make the label grey, but leave `disabled` out:

```css preview
<style>
  /* show */
  #drink + label {
    color: gray;
  }
  /* /show */
</style>
<input type="checkbox" id="snack" name="extras" value="snack" />
<label for="snack">A snack</label>
<input type="checkbox" id="drink" name="extras" value="drink" />
<label for="drink">A drink (sold out)</label>
```

It looks like you can't choose it. But click it: the box ticks, and a form would send it. The look must follow what the box really does. So start from `disabled`, and let `:disabled` give the look.

---

## Mission: Sold out

**What you will see**: after Wi-Fi, a fourth extra: "A space walk (sold out this week)". Its label looks paler than the others, and a click on it ticks nothing.

The station offers space walks to its passengers, but this week every place is taken.

- The extras have one more box to tick, with the id `extra-spacewalk`, the name `extras` and the value `spacewalk`.
- Its label says why it can't be chosen.
- Nobody can tick it.
- Its label looks different from the labels of the extras you can choose.
- The label of any other extra turned off later would look different too.
