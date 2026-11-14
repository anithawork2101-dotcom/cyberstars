A pizza order without an address can't be delivered, however good the pizza is. Some answers on a form aren't a choice: without them, the form is useless. The browser can refuse to send the form until they are there.

## `required`

```html preview
<form>
  <label for="nickname">Nickname</label><br />
  <input id="nickname" name="nickname" required />
  <button>Join</button>
</form>
```

Click **Join** with the box empty. Nothing is sent. The browser puts the cursor in the box and shows a small message, something like "Please fill out this field". Type a nickname, and click again:

```text
The form was sent: nickname=Rocket
```

Like `checked`, you write `required` alone, with no `=` after it: the word is enough.

The message belongs to the browser. You don't write it. Its words and its look change from one browser to another, in the visitor's own language.

## On a list

`required` works on a list too, when its first choice has an empty value. An empty value counts as "nothing chosen":

```html preview
<form>
  <label for="city">City</label><br />
  <select id="city" name="city" required>
    <option value="">Pick a city</option>
    <option value="lyon">Lyon, France</option>
    <option value="oslo">Oslo, Norway</option>
  </select>
  <button>See the weather</button>
</form>
```

Click the button without choosing a city: the browser asks you to choose one first. That's one more reason for the empty first choice.

## Break it on purpose

Put `required` on the label, not on the box:

```html preview
<form>
  <label for="nickname" required>Nickname</label><br />
  <input id="nickname" name="nickname" />
  <button>Join</button>
</form>
```

Click **Join** with the box empty:

```text
The form was sent: nickname=
```

It is sent. A label is only words. Nobody types in it, so the browser never checks it. `required` only works on what the visitor fills in.

---

## Mission: Four answers first

**What you will see**: click "Book my seat" with the form empty. Nothing is sent, and the browser points at the name box. Fill in the name, the email, the flight and the date, and the form is sent.

Right now, a passenger can send an empty form. Then the station gets a booking for nobody, on no flight, on no day.

- The form isn't sent without a name.
- It isn't sent without an email.
- It isn't sent without a flight.
- It isn't sent without a date.
- Everything else stays optional: with only those four filled in, the form is sent.

Your flight list starts on its empty choice, so `required` works on it too.
