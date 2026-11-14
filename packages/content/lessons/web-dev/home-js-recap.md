No new theory, just a challenge that uses the first JavaScript of this part: `querySelector`, `textContent`, template literals and a click.

This time, nobody tells you which lines to write. Read what the crew needs, and put the pieces together yourself.

If nothing happens, open the console. A red line tells you where the script stopped. A `null` means a selector found nothing.

---

## Mission: Who's on duty?

**What you will see**: under the wake button, a button says `Who's on duty?`. Click it, and a paragraph under it says something like:

```text
Mara Vega is on duty today
```

The crew wants a button that says who is on duty today: the person on the first card.

- Add a button with the id `on-duty`.
- Under it, add an empty paragraph with the id `duty-today`.
- A click on the button writes in `#duty-today`: the name from the first card's heading, then ` is on duty today`.
- The name is read from the card when someone clicks. If the first card's name changes, the sentence changes too.

A selector in JavaScript works exactly like in CSS.
