Is 03/04 the 3rd of April or the 4th of March? It depends on the country. People write dates in many ways. When a form sends one, the server can't ask what you meant.

## `type="date"`

A box for a date is `type="date"`:

```html preview
<label for="party">Party day</label><br />
<input type="date" id="party" />
```

The box shows the parts of a date, and a small calendar button. Click it: a calendar opens, and you choose the day. You can also click a part and type it. On a phone, a calendar or a date wheel opens.

The order of the parts on the screen follows the language of your computer. Someone in Lyon sees the day first, and someone in New York sees the month first. Each person reads the date the way they know.

## The value it sends

Now put the box in a form, with a name:

```html preview
<form>
  <label for="party">Party day</label><br />
  <input type="date" id="party" name="party" />
  <button>Invite</button>
</form>
```

Choose the 14th of May 2031 and click **Invite**:

```text
The form was sent: party=2031-05-14
```

Whatever the box shows, the form always sends the date in the same way: the year, the month, then the day, with dashes. Four digits, two, two. Someone in Lyon and someone in New York send exactly the same text, so the server never has to guess.

## Break it on purpose

Use a plain text box for the date:

```html preview
<form>
  <label for="party">Party day</label><br />
  <input id="party" name="party" />
  <button>Invite</button>
</form>
```

Type `03/04` and send:

```text
The form was sent: party=03/04
```

March or April? Nobody can tell. And the next guest types `next Friday`. A date box doesn't allow that: every date it sends looks the same.

---

## Mission: Which day?

**What you will see**: a box like "Travel date", with a calendar button. Choose the 14th of May 2031 and send: the console's line has `date=2031-05-14` in it.

Your booking form asks for the name, the email, the phone and the bags, but not the day of the trip.

- Add a date box with the id `travel-date`, sent as `date`.
- It has a label that puts the cursor in it.
- The form sends the day chosen, as year-month-day.

An id and a name don't have to be the same word.
