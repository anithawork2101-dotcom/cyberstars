On a TV remote, every button has its own job. One turns the TV on, one changes the channel, one makes it louder. Buttons in a form can have different jobs too, and their `type` says which job.

## `type="submit"`: send the form

You already know this one. A button inside a form sends it, because a button's type is `submit` unless you say something else. These two buttons do exactly the same thing:

```html preview
<button>Join</button>
<button type="submit">Join</button>
```

`type="submit"` makes the job clear to anyone who reads your HTML.

## `type="reset"`: start again

A reset button puts the whole form back as it was when the page opened:

```html preview
<form>
  <label for="nickname">Nickname</label><br />
  <input id="nickname" name="nickname" /><br />
  <input type="checkbox" id="news" name="news" value="yes" checked />
  <label for="news">Send me the club news</label><br />
  <button type="submit">Join</button>
  <button type="reset">Start again</button>
</form>
```

Type a nickname, untick the news, then click **Start again**. The nickname is gone, and the news box is ticked again: back as it was at the start, not empty. Nothing is sent.

Write clearly on the button what it does, and keep it away from the send button. A click on it by mistake removes everything the visitor typed.

## `type="button"`: a button for your script

On the crew page and the schedule, your buttons had `type="button"`, and a script gave them their job. Inside a form, that type matters even more:

```html preview
<form>
  <label for="nickname">Nickname</label><br />
  <input id="nickname" name="nickname" />
  <button type="button">Show the rules</button>
  <button type="submit">Join</button>
</form>
```

Click **Show the rules**: nothing happens, and nothing is sent. The button waits for a script to give it a job.

## Break it on purpose

Leave out the type of **Show the rules**:

```html preview
<form>
  <label for="nickname">Nickname</label><br />
  <input id="nickname" name="nickname" />
  <button>Show the rules</button>
  <button type="submit">Join</button>
</form>
```

Click it:

```text
The form was sent: nickname=
```

The visitor only wanted to read the rules, and the form was sent half empty. Without a type, a button in a form is a send button.

---

## Mission: Start again

**What you will see**: next to "Book my seat", a second button like "Clear the form". Type a name, untick Wi-Fi, choose a flight, then click it. Every box is back as it was at the start, Wi-Fi is ticked again, and nothing is sent.

Your booking form has one button, the one that sends it. A passenger who made a few mistakes wants to start again without reloading the page.

- A second button in the form clears it.
- Every box, list and choice goes back as it was when the page opened.
- Clearing the form sends nothing.
- The first button still sends the form.
