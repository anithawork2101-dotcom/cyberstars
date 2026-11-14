No new theory, just a challenge that uses the HTML of this part: lists, numbered lists, lists inside lists, `div`, `span`, and jump links from the first part.

Read what the crew needs, then choose the elements yourself.

If something looks wrong, check that every inner list is inside its `<li>`, and that every `div` closes where it should.

---

## Mission: Duty board

**What you will see**: on `crew.html`, after the cards, a Duty Board part. It has the day's jobs in order, and who works on one of them. For example:

```text
Duty Board

1. Inspect the solar panels
    • Tomas Okafor
    • Ines Lindqvist
2. Harvest the greenhouse
3. Log the day's dockings
```

Every morning, the crew checks who does what. `crew.html` gets a duty board.

- Add a part with a heading at the same level as Crew.
- The heading has the id `duty`.
- Right under its heading, the day's duties are listed in the order they are done.
- There are at least three duties.
- At least one duty has a list inside it of the crew members who work on it, at least two.
- Under the page's heading, a link jumps straight to the duty board.
