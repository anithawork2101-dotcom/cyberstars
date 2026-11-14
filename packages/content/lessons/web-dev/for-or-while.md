A hammer and a screwdriver can both push a screw in, but one of them is clearly the right tool. `for` and `while` can both repeat things, but each one is right for its own job.

## When you know how many: `for`

When you know the number of laps before you start, use `for`: five laps of the track, every item of a list, a countdown from 10.

```js
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

Everything about the loop is on its first line: where it starts, when it stops, and how it moves.

And for every item of a list, `for...of` is even simpler.

## When you don't: `while`

When you only know **when to stop**, use `while`: until the tank is empty, until the player guesses right, until you have saved enough money.

```js
let savings = 0;
let weeks = 0;
while (savings < 50) {
  savings = savings + 6;
  weeks = weeks + 1;
}
console.log(weeks);
```

```text
9
```

How many weeks to save 50, with 6 each week? The loop finds out.

## A simple test

Ask: "Can I say how many times, before it starts?"

- Yes: `for`.
- No, only when to stop: `while`.

## Break it on purpose

Go through a list with `while`:

```js
let i = 0;
while (i < games.length) {
  console.log(games[i]);
}
```

It never ends. The counter never moves, because there is no `i++`. In a `for` loop, the counter's step is right there on the first line, so it's much harder to forget.

---

## Mission: Two loops, two jobs

**What you will see**: under `#fuel`, two paragraphs show:

```text
Destinations: Moon Base. Mars Relay. Europa Outpost. Lunar Gateway. Orbital Yard.
Reserve reached after 5 minutes
```

The schedule page shows the destinations of the day. It also shows how long it takes for the fuel to go below a safe amount, the reserve.

- Add a paragraph with the id `destinations`.
- It says `Destinations: `, then every destination of the flight table, in order, each followed by a full stop and a space.
- Use the right loop to go through every row.
- Add a paragraph with the id `reserve`.
- It says `Reserve reached after `, the number of minutes, then ` minutes`: how many minutes of burning, from the fuel on the page, until the fuel is below 30.
- Use the right loop for "until".
