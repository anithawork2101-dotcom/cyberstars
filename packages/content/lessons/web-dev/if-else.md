"If it's colder than 15 degrees, I take a sweater. If not, a t-shirt is enough." You make choices like that every day, without thinking. A program can make them too: do one thing **if** something is true, and another thing **else**.

## `if`

```js
const temperature = 12;
if (temperature < 15) {
  console.log("Take a jumper");
}
```

```text
Take a jumper
```

The question goes in the brackets after `if`. When its answer is `true`, the lines between `{` and `}` run. When it's `false`, they are skipped.

## `else`

`else` says what to do when the answer is `false`:

```js
const temperature = 20;
if (temperature < 15) {
  console.log("Take a jumper");
} else {
  console.log("A t-shirt is enough");
}
```

```text
A t-shirt is enough
```

Exactly one of the two blocks runs: never both, and never none.

## On the page

The question can come from the page, and the answer can go back to it:

```js
const open = document.querySelector("#open").textContent === "Yes";
if (open) {
  document.querySelector("#note").textContent = "Come on in!";
} else {
  document.querySelector("#note").textContent = "See you tomorrow";
}
```

## Break it on purpose

Put a `;` after the brackets:

```js
if (temperature < 15); {
  console.log("Take a jumper");
}
```

"Take a jumper" shows even at 30 degrees. The `;` ends the `if` right there, with nothing to do. The block after it is now only a block that always runs. Never put a `;` between an `if`'s brackets and its `{`.

---

## Mission: Now boarding

**What you will see**: under the flight table, a paragraph says:

```text
Now boarding: SL-101
```

When the first flight isn't boarding, it says `Nobody is boarding yet`.

The schedule page says which flight is boarding now.

- Under the flight table, add a paragraph with the id `boarding-now`.
- If the first row's status is `Boarding`, the paragraph says `Now boarding: `, then that row's flight code.
- If not, it says `Nobody is boarding yet`.
