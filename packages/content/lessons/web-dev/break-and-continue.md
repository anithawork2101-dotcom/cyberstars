When you look for your keys, you check your pockets one by one. As soon as you find them, you stop: you don't need to look in the other pockets. A loop can stop early too, the moment it finds what it's looking for.

## `break`

`break` ends the loop at once, whatever lap it's on:

```js
const bags = ["books", "snacks", "keys", "gloves"];
for (const bag of bags) {
  console.log("Checking", bag);
  if (bag === "keys") {
    console.log("Found them!");
    break;
  }
}
```

```text
Checking books
Checking snacks
Checking keys
Found them!
```

The loop never checks "gloves": it stopped at the keys. The script goes on with whatever comes after the loop.

## Remembering what you found

Often you want to know later **what** was found, or if anything was found. Make a name before the loop, and fill it when you find the thing:

```js
let found = "nothing";
for (const bag of bags) {
  if (bag === "keys") {
    found = bag;
    break;
  }
}
console.log(found);
```

If no bag is "keys", the loop runs to the end without `break`, and `found` is still `"nothing"`.

## Break it on purpose

Put the `break` outside the `if`:

```js
for (const bag of bags) {
  if (bag === "keys") {
    found = bag;
  }
  break;
}
```

The loop only ever checks the first bag. `break` stops the loop wherever it runs. So it belongs inside the `if`, where the thing is found.

---

## Mission: The first delay

**What you will see**: under `#reserve`, a paragraph says:

```text
First delay: SL-103
```

With no delayed flight on the board, it says `No delays`.

Passengers want to know quickly if anything is delayed.

- Add a paragraph with the id `first-delay`.
- A loop goes through the flight table's rows, from the top.
- At the first row whose status is `Delayed`, the loop keeps that row's flight code, and stops.
- The paragraph says `First delay: ` and that code.
- If no row was delayed, it says `No delays`.
