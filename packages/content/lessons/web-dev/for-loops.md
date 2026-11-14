"Write 'I will not talk in class' 100 times." A computer would love that punishment. Doing the same thing again and again is what computers do best. A **loop** is how you ask for it, without writing the same line 100 times.

## A `for` loop

```js
for (let i = 1; i <= 3; i++) {
  console.log("Lap", i);
}
```

```text
Lap 1
Lap 2
Lap 3
```

The lines between `{` and `}` run again and again. Each time is called a **lap**. The first line says how many laps, in three parts with `;` between them:

1. `let i = 1`: **start** with a counter, `i`, at 1;
2. `i <= 3`: **keep going** while `i` is smaller than or equal to 3. `<=` means "smaller than or equal to";
3. `i++`: **after each lap**, add 1 to `i`. `i++` is short for `i = i + 1`.

So: `i` is 1, and the lap runs. `i` becomes 2, and it runs. `i` becomes 3, and it runs. `i` becomes 4, and 4 isn't `<= 3`, so the loop stops.

## Counting down

The counter can go the other way:

```js
for (let i = 3; i >= 1; i--) {
  console.log(i);
}
console.log("Go!");
```

```text
3
2
1
Go!
```

Start at 3, keep going while `i >= 1` (bigger than or equal to 1), and `i--` takes 1 away in each lap. The `Go!` line is after the `}`, so it runs once, when the loop is done.

## Break it on purpose

Use `<` instead of `<=`:

```js
for (let i = 1; i < 3; i++) {
  console.log("Lap", i);
}
```

Only 2 laps. When `i` is 3, `3 < 3` is false, so lap 3 never runs. "Smaller than" or "smaller than or equal": one character, one lap.

---

## Mission: Launch countdown

**What you will see**: when `crew.html` opens, the console shows these lines, with its other lines:

```text
5
4
3
2
1
Liftoff!
```

The station's shuttle leaves after a countdown.

- The console shows the numbers 5, 4, 3, 2 and 1, each on its own line.
- One loop writes all five numbers.
- After them, the console shows `Liftoff!`, once.
