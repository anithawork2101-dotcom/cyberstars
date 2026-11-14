Have you ever had a song in your head that plays again and again? A loop can get stuck too. If its "keep going" is always true, it never stops. That's an **endless loop**, one of the most common mistakes in programming.

## How it happens

```js
for (let i = 3; i >= 1; i++) {
  console.log(i);
}
```

Read it carefully. `i` starts at 3. The loop keeps going while `i >= 1`. And after each lap... `i++` makes it **bigger**: 4, 5, 6... It never gets below 1, so the loop never stops. It needed `i--`.

## What you see

When a browser runs an endless loop, it freezes. The page stops answering, buttons don't work, and after a while the browser asks if you want to stop the page.

Your preview protects you. When a loop runs for more than 2 seconds, the preview stops it, says in the console which line it was on, and pauses. Fix the loop, then press **Show the page again**.

## Finding the problem

When a loop never ends, check its three parts together:

1. where does the counter **start**?
2. when does it **stop**?
3. does each lap bring it **closer** to stopping?

The problem is usually the third one: a `++` that should be `--`, or a counter that never changes at all.

## Break it on purpose

Leave out the change completely:

```js
for (let i = 3; i >= 1; ) {
  console.log(i);
}
```

`i` stays 3 forever. Your preview stops it after 2 seconds. Look at the console, then fix it.

---

## Mission: The engine cool-down

**What you will see**: once the cool-down is fixed, the console shows these lines, with its other lines:

```text
Cooling: 3
Cooling: 2
Cooling: 1
Engines off
```

Your site has a new file, `countdown.js`: the engines' cool-down. It should count 3, 2, 1, then turn the engines off. But it never ends.

- `crew.html` loads `countdown.js` from its `<head>`, with `defer`.
- The console shows `Cooling: 3`, `Cooling: 2`, `Cooling: 1` and `Engines off`.
- The page doesn't get stuck.
- The console shows no errors.

Ask yourself: does each lap bring the counter closer to stopping?
