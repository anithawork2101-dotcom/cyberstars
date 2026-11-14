When you sort the washing, you skip the socks with holes. You don't stop sorting. You just go on to the next sock. A loop can skip one lap like that, and go on with the rest.

## `continue`

`continue` jumps to the next lap at once, and skips the rest of the current lap:

```js
const scores = [12, -1, 8, -1, 5];
let total = 0;
for (const score of scores) {
  if (score === -1) {
    continue;
  }
  total = total + score;
}
console.log(total);
```

```text
25
```

A score of `-1` means "didn't play". For those scores, `continue` skips the adding, and goes straight to the next score. The others are added up: 12 + 8 + 5.

## `break` or `continue`?

- `break`: stop the whole loop. "I found it."
- `continue`: skip this one, and keep going. "Not this one, next!"

## It's like an `else`

You could write the same thing with an `if` around the adding:

```js
for (const score of scores) {
  if (score !== -1) {
    total = total + score;
  }
}
```

Both work. `continue` is useful when there are several lines to skip, or several reasons to skip. Each reason gets its own short `if` at the top of the loop, and the main work stays below, without moving to the right.

## Break it on purpose

Put the adding before the `continue`:

```js
for (const score of scores) {
  total = total + score;
  if (score === -1) {
    continue;
  }
}
```

```text
23
```

The `-1`s were added before the skip: too late. `continue` only skips what comes **after** it in the lap.

---

## Mission: Still flying

**What you will see**: under `#first-delay`, a paragraph says:

```text
4 flights still flying
```

The schedule counts the flights that are still flying today: every flight except the cancelled ones.

- Add a paragraph with the id `active-count`.
- A loop goes through every row of the flight table.
- A row whose status is `Cancelled` is skipped with `continue`.
- Every other row is counted.
- The paragraph says the count, then ` flights still flying`.
