No new theory, just a challenge that uses the JavaScript of this part: comparisons, `if`, loops, objects, `filter` and `sort`, and the page.

This time, nobody tells you which lines to write. Read what the passengers need, and put it together yourself. If the answer is wrong, write your `flights` and your sorted list to the console: it shows exactly what they hold.

---

## Mission: The next departure

**What you will see**: under the introduction, a line shows the station's time. Under the flight table, a paragraph says which flight leaves next. For example:

```text
Station time: 09:00
Next departure: SL-102 to Mars Relay at 09:45
```

Passengers want one line that says which flight leaves next.

- Add a paragraph `Station time: `, with the time in a `span` with the id `station-time`.
- Add a paragraph with the id `next-departure`.
- It says `Next departure: `, then the code, `to`, the destination, `at`, and the time of the earliest flight that leaves after the station time and isn't cancelled.
- If there is no such flight, it says `No more departures today`.
- It follows the page: change the station time, and the next departure changes too.

Choose the flights with `filter` first, then sort a copy.
