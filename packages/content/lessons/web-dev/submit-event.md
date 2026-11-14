Before you put a letter in the mailbox, you look at it one last time: is the address right? A form has a moment like that too. Just before it leaves, the page can still do something.

## The `submit` event

When a form is sent, it gets a `submit` event, just before it leaves. You listen for it on the form:

```html preview
<form id="join">
  <label for="nickname">Nickname</label>
  <input id="nickname" name="nickname" required />
  <button type="submit">Join</button>
</form>
<p id="note"></p>
<script>
  const nickname = document.querySelector("#nickname");
  const note = document.querySelector("#note");

  document.querySelector("#join").addEventListener("submit", () => {
    note.textContent = `Sending the form for ${nickname.value}...`;
  });
</script>
```

Type `Rocket` and click **Join**. The page says `Sending the form for Rocket...`, and the line under it says:

```text
The form was sent: nickname=Rocket
```

The script ran first, then the form was sent as usual. On a real website, the browser would now leave the page, and show the server's answer. In the preview, the page stays, so you see both.

## Only a form that is sent

Empty the box and click **Join** again. The browser shows its own message: the box is required. The form isn't sent, so there is no `submit` event, and the page says nothing new.

A form can be sent in more than one way: a click on its button, or Enter in one of its boxes. The `submit` event comes every time, whatever the way.

## Break it on purpose

Listen on the button, not on the form:

```js
document.querySelector("button").addEventListener("submit", () => {
  note.textContent = `Sending the form for ${nickname.value}...`;
});
```

Type a name and click **Join**: the form is sent, but the page says nothing. The button never gets a `submit` event: the form does. And if you listened for `"click"` on the button instead, the note would show even when the browser refuses the form.

---

## Mission: Last look

**What you will see**: type `Ida Moreau` and an email, choose the flight `SL-102` and a date, then click **Book my seat**. The console says:

```text
Sending the booking for Ida Moreau
```

And then, as before, `The form was sent: passenger=Ida Moreau&...`.

Your booking form goes to the station, but the page doesn't look at it one last time first.

- When the form is sent, the console says `Sending the booking for`, then the name typed.
- The form is still sent, with everything in it.
- When the browser refuses the form, the console doesn't say it.
