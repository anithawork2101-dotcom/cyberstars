When you write a message on your phone, the keyboard shows letters. When you call someone, it shows big number keys. The phone chooses the keyboard that fits the job. A box on a web page can tell the phone which keyboard it needs.

## `type="email"`

The `type` attribute says what kind of answer a box takes. A box without a `type` takes any text at all: it's the same as `type="text"`. For an email address, there is `type="email"`:

```html preview
<label for="mail">Your email</label><br />
<input type="email" id="mail" />
```

On a computer, it looks like any other box. On a phone, tap it: the keyboard shows an **@** key, ready to use, so nobody has to look for it.

There is more. The browser checks the address before the form is sent:

```html preview
<form>
  <label for="mail">Your email</label><br />
  <input type="email" id="mail" name="mail" />
  <button>Sign up</button>
</form>
```

Type `rocket` and click **Sign up**. Nothing is sent. The browser shows a small message that says the address needs an @. Now type `rocket@mail.example` and send again:

```text
The form was sent: mail=rocket@mail.example
```

## `type="tel"`

`tel` is short for telephone:

```html preview
<label for="phone">Phone number</label><br />
<input type="tel" id="phone" />
```

On a phone, tap it. You get the keyboard you call with: big digits and the keys `+`, `*` and `#`. The browser doesn't check this one. Phone numbers look different in every country: with spaces, with dashes, with a + at the start. So any text is fine.

## Break it on purpose

Make a small spelling mistake in the type:

```html preview
<form>
  <label for="mail">Your email</label><br />
  <input type="emial" id="mail" name="mail" />
  <button>Sign up</button>
</form>
```

Type `rocket` and send. It is sent! The browser doesn't know a type called `emial`, so it makes a plain text box: no check, and no @ key on a phone. A wrong type gives no error at all. Check how you wrote it.

---

## Mission: How can we reach you?

**What you will see**: under the name, a box for the email and one for the phone number, each with its own label. Fill in all three and send. The console under your page says something like:

```text
The form was sent: passenger=Ida Moreau&email=ida@example.com&phone=+33 6 12 34 56 78
```

Your booking form has a box for the passenger's name, and a button that sends it. The station also needs a way to reach each passenger before the flight.

- Add a box for the email address, with the id `email`, sent as `email`.
- On a phone, it shows the keyboard with the @, and the browser doesn't send an address without an @.
- Add a box for the phone number, with the id `phone`, sent as `phone`.
- On a phone, it shows the keyboard for calling.
- Each box has a label, and a click on the label puts the cursor in its box.

Check how you wrote each type: a wrong one gives no error, only a plain box.
