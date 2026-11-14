A calculator does sums for you. You type `12 × 4`, and it says 48. JavaScript can be your calculator too, and a better one. It can do the sum with values it keeps under names, and use the answer on the page.

## The four sums

```js
console.log(12 + 4);
console.log(12 - 4);
console.log(12 * 4);
console.log(12 / 4);
```

```text
16
8
48
3
```

- `+` adds, and `-` takes away;
- `*` multiplies: there is no × key, so it's a star;
- `/` divides.

They work on names too:

```js
const pizzas = 3;
const slicesEach = 8;
const slices = pizzas * slicesEach;
console.log(slices);
```

```text
24
```

Like in math, `*` and `/` go before `+` and `-`: `2 + 3 * 4` is 14, not 20. Brackets go first: `(2 + 3) * 4` is 20.

## `%`: what's left

Here, `%` isn't a percent. It gives the **remainder** of a division: what is left after you share as many whole times as you can.

```js
console.log(25 % 8);
```

```text
1
```

25 slices for 8 people: 3 each makes 24, and 1 slice is left. `%` says 1.

It's useful for anything that goes round in a circle: hours on a clock, days of a week.

## Break it on purpose

Add a number that is really a string:

```js
const slices = "24";
console.log(slices + 1);
```

```text
241
```

Not 25! With a string on one side, `+` joins, it doesn't add. Numbers you do math with must be numbers, without quotes. (`*`, `-` and `/` would still work, so the mistake is harder to see.)

---

## Mission: How long the oxygen lasts

**What you will see**: when `crew.html` opens, the console shows these lines, with its other lines:

```text
Oxygen lasts 140 hours
Hours past the last full day: 20
```

Your `crew.js` keeps the number of oxygen tanks, 7, and how long each one lasts, 20 hours. Work out how long they last together.

- The console shows `Oxygen lasts 140 hours`.
- The 140 is worked out from the two names.
- The console shows `Hours past the last full day: 20`: what is left of those hours after every full day of 24 hours is taken out.
