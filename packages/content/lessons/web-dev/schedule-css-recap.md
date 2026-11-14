No new theory, just a challenge that uses the CSS of this part: combinators, attribute selectors, pseudo-classes and pseudo-elements, with what you know about boxes and colors.

This time, nobody tells you which selectors to use. Look at how the board should look, and choose them yourself. If a rule seems to do nothing, Inspect the element: the styles show which rule won.

---

## Mission: Status signs

**What you will see**: in the flight table, every status cell shows a small colored dot before its word. Each kind of status looks different: Boarding, On time, Delayed and Cancelled.

On a board with departures, each status has its own sign, so travellers can see it from far away.

- Every status cell of the flight table's body has something added before its word with `::before`.
- The four kinds of status look different from each other: Boarding, On time, Delayed and Cancelled.
- Every status cell's text has a contrast of at least 4.5:1 with its background.

The rows already have the classes `delayed` and `cancelled`. For the other statuses, you can add classes of your own.
