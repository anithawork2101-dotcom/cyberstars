"Keep stirring **until** the sauce is thick." You don't know how many times you will stir. You keep going while it's still too thin. A `for` loop counts laps that you know about. A `while` loop keeps going as long as something is true, however many laps that takes.

## `while`

```js
let water = 10;
let cups = 0;
while (water >= 3) {
  water = water - 3;
  cups = cups + 1;
}
console.log(cups);
```

```text
3
```

Before every lap, `while` asks its question. While the answer is `true`, the block runs again:

- 10 litres: enough for a cup, 7 left, 1 cup;
- 7: another cup, 4 left, 2 cups;
- 4: another cup, 1 left, 3 cups;
- 1: not enough. The loop stops.

Nobody said "3 laps". The loop found it out.

## Something must change

A `while` loop only stops when its question becomes `false`. So something inside it must change what the question looks at: here, `water` goes down in each lap. If nothing changes, the question stays `true`, and the loop never ends. That's the endless loop from part 2, and your preview stops it after 2 seconds.

## Break it on purpose

Forget the line that takes water away:

```js
while (water >= 3) {
  cups = cups + 1;
}
```

`water` stays 10 forever, so the loop never stops. Check every `while` loop: what in it brings the answer closer to `false`?

---

## Mission: Fuel

**What you will see**: under the flight count, a paragraph shows the fuel, and another one shows how long it lasts. For example:

```text
Fuel: 100 units, burning 15 a minute
Enough fuel for 6 minutes
```

A shuttle's tank holds some fuel, and the engines burn the same amount every minute. How many full minutes can it fly?

- Under `#flight-count`, add a paragraph: `Fuel: `, the units in a `span` with the id `fuel-start`, then `, burning `, the units per minute in a `span` with the id `burn-rate`, then ` a minute`.
- Under it, add a paragraph with the id `fuel`.
- It says `Enough fuel for `, the number of whole minutes, then ` minutes`.
- A `while` loop works it out. It takes away one minute of fuel, as long as there is enough fuel left for a whole minute.

Ask yourself: what in your loop brings it closer to stopping?
