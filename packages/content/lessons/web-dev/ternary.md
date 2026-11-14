"1 flights" sounds wrong. So does "3 flight". The word changes with the number: one flight, two flights. It's a tiny choice between two words, and a whole `if` and `else` for it feels like too much.

## `? :`

The **ternary** makes a choice between two values in one line:

```js
const count = 1;
const word = count === 1 ? "flight" : "flights";
console.log(`${count} ${word}`);
```

```text
1 flight
```

Read it as a question: "is `count` 1? If yes, `"flight"`. If not, `"flights"`."

- the question comes first, then `?`;
- then the value for `true`;
- then `:`, and the value for `false`.

The whole thing **is** a value. So it can go anywhere a value can go, even inside a template:

```js
console.log(`${count} ${count === 1 ? "flight" : "flights"}`);
```

## Ternary or `if`?

- To choose between two **values**: a ternary. It's short and clear.
- To choose between two **things to do**, each with several lines: `if` and `else`.

If a ternary doesn't fit on one line, or has more ternaries inside it, use `if`.

## Break it on purpose

Change the order of the two values:

```js
const word = count === 1 ? "flights" : "flight";
```

"1 flights", "3 flight": the wrong way round. The value for `true` always comes right after the `?`.

---

## Mission: How many cancelled

**What you will see**: under the gate message, a paragraph says:

```text
1 flight cancelled
```

With two cancelled flights on the board, it says `2 flights cancelled`.

The schedule page says how many flights are cancelled, in good English.

- Under `#gate-message`, add a paragraph with the id `flight-count`.
- It says how many rows of the flight table's body have the class `cancelled`.
- Then it says `flight` or `flights`, to match the number.
- Then it says ` cancelled`.
