No new theory, just a challenge that uses the JavaScript of this part: loops, functions, `createElement` and `append`, and reading the page.

This time, nobody tells you which lines to write. Read what the crew needs, and put it together yourself.

If nothing happens, open the console. If a list doesn't change when it should, look for an old snapshot.

---

## Mission: Roll call

**What you will see**: under the welcome list, a button says `Roll call`. A click fills a numbered list under it with every name of the crew list, each followed by ` - present`. A paragraph under that says how many answered. For example:

```text
1. Mara Vega - present
2. Tomas Okafor - present
3. Ines Lindqvist - present
4. Kenji Arano - present

4 crew members answered
```

Every morning, the commander presses a button to call every crew member by name.

- Add a button with the id `roll-call-button`.
- Add an empty numbered list with the id `roll-call`.
- Add an empty paragraph with the id `roll-summary`.
- A click fills `#roll-call` with an item for every name of the crew list at that moment, in order.
- Each item is the name, then ` - present`.
- Then `#roll-summary` says how many items `#roll-call` has, then ` crew members answered`.
- A second click doesn't add the names twice: the list starts again from empty.

`textContent = ""` empties an element.
