When you order a pizza, the menu asks: extra cheese? Mushrooms? Olives? You can say yes to none of them, to one, or to all three. Each one is a small yes or no, and a form asks them with small boxes you tick.

## `type="checkbox"`

A box to tick is `type="checkbox"`:

```html preview
<input type="checkbox" id="cheese" />
<label for="cheese">Extra cheese</label>
```

You see a small square. Click it, and a tick shows. Click it again, and the tick is gone. Now click the words: they tick the box too, because the label belongs to it, like with a text box. For a box to tick, the label usually comes right after it.

## `value`: what a ticked box sends

```html preview
<form>
  <input type="checkbox" id="cheese" name="toppings" value="cheese" />
  <label for="cheese">Extra cheese</label><br />
  <input type="checkbox" id="olives" name="toppings" value="olives" />
  <label for="olives">Olives</label><br />
  <button>Order</button>
</form>
```

Tick both boxes and click **Order**:

```text
The form was sent: toppings=cheese&toppings=olives
```

A ticked box sends its name and its `value`. A box that isn't ticked sends nothing at all. Untick the olives and send again: only `toppings=cheese` is sent.

The boxes of one question share the same name, and each one has its own value. That's how the server knows they answer the same question.

## `checked`: ticked from the start

```html preview
<input type="checkbox" id="news" name="news" value="yes" checked />
<label for="news">Send me the club news</label>
```

`checked` makes a box start ticked. Like `defer`, you write it alone, with no `=` after it: the word is enough. The visitor can still untick it.

## Break it on purpose

Take the values away:

```html preview
<form>
  <input type="checkbox" id="cheese" name="toppings" />
  <label for="cheese">Extra cheese</label><br />
  <input type="checkbox" id="olives" name="toppings" />
  <label for="olives">Olives</label><br />
  <button>Order</button>
</form>
```

Tick both and send:

```text
The form was sent: toppings=on&toppings=on
```

A box without a value sends `on`. Which toppings? Nobody can tell.

---

## Mission: Extras on board

**What you will see**: three boxes, each with its words next to it, and Wi-Fi already ticked. Tick the meal and send: the console's line has `extras=meal&extras=wifi` in it.

Your booking form asks who is flying, when, and with how many bags. The station also offers a few extras for the trip: a hot meal, a warm blanket, and Wi-Fi on board.

- Add three boxes to tick, all named `extras`.
- Their values are `meal`, `blanket` and `wifi`.
- Each box has a label, and a click on the label ticks or unticks it.
- Wi-Fi is free and most passengers want it, so its box starts ticked.
- The other two boxes start empty.
