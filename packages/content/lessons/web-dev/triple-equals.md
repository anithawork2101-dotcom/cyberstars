"Is your name Sam?" You don't answer "a little". Either it is, or it isn't. Checking if two things are **the same** is one of the most common questions a program asks.

## `===`: the same

```js
console.log(3 === 3);
console.log("Sam" === "Sam");
console.log("Sam" === "sam");
```

```text
true
true
false
```

Three equals signs ask "are these exactly the same?". Strings must match letter by letter, with the same capitals.

The opposite is `!==`: "are these different?".

```js
console.log("Sam" !== "Lea");
```

```text
true
```

## `=` is not `===`

One `=` doesn't ask anything. It **puts** a value in a name. `score = 3` changes `score`. `score === 3` asks if it's 3. People often mix them up.

## `==`: almost the same

There is also `==`, with two signs. It tries to make both sides the same kind first:

```js
console.log(5 == "5");
console.log(5 === "5");
```

```text
true
false
```

`==` turns the string `"5"` into a number before it compares, so it says "yes". `===` sees a number and a string, and says "no". That sounds helpful, but `==` has strange rules: for example, `0 == ""` is `true`. Always use `===`. If both sides should be the same kind, make them the same kind yourself, with `Number()`.

## Break it on purpose

Compare text from the page, with a different capital letter:

```js
console.log(status === "on time");
```

The page says `On time`, so it's `false`. `===` is exact, so check what the page really says.

---

## Mission: Boarding?

**What you will see**: when `schedule.html` opens, the console shows:

```text
First flight boarding: true
```

The schedule's script checks if the first flight on the board is boarding.

- The console shows `First flight boarding: `, then `true` or `false`.
- The answer comes from the status in the first row of the flight table.
- The script compares that status with `Boarding`, using `===`.
