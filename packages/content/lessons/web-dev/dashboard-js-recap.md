No new theory, just a challenge that uses the JavaScript of this part: `includes`, `indexOf`, `slice`, `join` and `split` on arrays, `map`, `filter`, `reduce`, `find`, `some` and `every`, objects with `for...in`, `Object.keys`, `Object.values` and `Object.entries`, dates, timers, and videos and sounds from a script.

Every morning, the commander reads a short report to the crew. It takes the numbers from all over the dashboard. The dashboard could write it.

---

## Mission: The morning report

**What you will see**: after the supplies, a part like "Morning report", with a button. On Wednesday 14 May 2031, a click on it writes:

```text
- Report for Wednesday, May 14, 2031
- On duty: 6, led by Vega and Orion
- Lowest supply: Oxygen at 18%
```

- After the supplies, add a new part with a heading.
- In it, add a button with the id `morning-report`, and a list with the id `report`, empty until the button is pressed.
- A click writes three lines in the list, one item each.
- The first line is `Report for `, then today's date as on the dashboard: the day of the week, the month in words, the day and the year.
- The second line is `On duty: `, how many names the duty list has, `, led by `, then the first two names with the word `and` between them, with a space on each side.
- The third line is `Lowest supply: `, the name of the supply with the lowest level in the whole table, the word `at` with a space on each side, its level, then `%`.
- Another click writes the report again: the list never holds more than its three lines.

The lowest supply isn't always the first one under 25.
