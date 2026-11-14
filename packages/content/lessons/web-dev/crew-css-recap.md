No new theory, just a challenge that uses the CSS of this part: the layers of the box (padding, border, margin), `display`, and round corners, with colors and contrast from the first part.

This time, nobody tells you which properties to use. Look at how the badge should look, and choose them yourself.

If something looks wrong, Inspect it. The box picture shows each layer, and the styles show which rule won.

---

## Mission: Job badges

**What you will see**: on every card, under the name, after "Job:", the job (Pilot, Engineer...) sits on a small round label with its own color. There is a little space around the word, and it stays on the same line.

On every card, the job should look like a badge: a small, round label with its own color, like the ones on a uniform.

- Every job has a background the card doesn't have.
- Every job has at least 4 pixels of space inside, on its left and on its right.
- Its corners are round by at least 4 pixels.
- It stays on its line.
- Its text has a contrast of at least 4.5:1 with its background.

A job is a `span`. Think about what kind of box it is.
