A coffee filter lets the water through and keeps the coffee powder. An email app's filter shows only the messages you haven't read. Choosing the items of a list that pass a test is so common that arrays have a method for it.

## `filter`

```js
function isHigh(score) {
  return score >= 9;
}

const scores = [12, 4, 9, 15, 3];
const high = scores.filter(isHigh);
console.log(high);
```

```text
[12, 9, 15]
```

The question is a function you write. `isHigh` takes one score, and returns whether it's at least 9. You give it to `filter` without brackets, like you give a function to a button. `filter` calls it once for every item. Each item that gets `true` goes into a **new** array. The others are left out.

The first `scores` array doesn't change: `filter` makes a new list.

## On objects

It's even more useful on a list of objects:

```js
const players = [
  { name: "Sam", team: "red" },
  { name: "Lea", team: "blue" },
  { name: "Ola", team: "red" },
];
function isRed(player) {
  return player.team === "red";
}
const red = players.filter(isRed);
console.log(red.length);
```

```text
2
```

## Break it on purpose

Forget the comparison:

```js
function isRed(player) {
  return player.team;
}
```

Every player is kept. `player.team` is a word like `"red"` or `"blue"`, never `false`, so every item passes. The question must answer `true` or `false`, so compare with `===`.

---

## Mission: On time

**What you will see**: under `#active-count`, a paragraph says:

```text
On time: SL-102. SL-105.
```

The schedule lists the flights that are on time.

- Add a paragraph with the id `on-time`.
- With `filter`, the script chooses the flights in `flights` whose status is `On time`.
- The paragraph says `On time: `, then the code of each chosen flight, in the order of the board.
- Each code is followed by a full stop and a space.
