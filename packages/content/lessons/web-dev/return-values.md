Ask a friend "what's 7 times 8?", and they answer "56". They don't write it on the wall. They give the answer back to you, and you do what you like with it. A function can give back an answer too, with `return`.

## `return`

```js
function double(number) {
  return number * 2;
}

const result = double(21);
console.log(result);
```

```text
42
```

`return` ends the function, and gives a value back to the place where you called it. `double(21)` **becomes** 42, as if you had written 42 there. You can keep it under a name, write it in the console, or use it in a sum:

```js
console.log(double(5) + 1);
```

```text
11
```

## The function stops at `return`

```js
function double(number) {
  return number * 2;
  console.log("Done");
}
```

`"Done"` never shows. `return` leaves the function at once, so the lines after it never run.

## Break it on purpose

Forget the `return`:

```js
function double(number) {
  number * 2;
}
console.log(double(21));
```

```text
undefined
```

The function works out 42... and keeps it. Without `return`, a function gives back `undefined`: "nothing". If a function's answer is `undefined`, look for a missing `return`.

---

## Mission: Days of oxygen on the page

**What you will see**: the page shows this line under the oxygen line:

```text
Oxygen for 5 full days
```

The page already works out how many hours the oxygen lasts. Now it also says how many full days that is, with a function that turns hours into days.

- A function, with a name you choose, takes a number of hours.
- It returns how many full days of 24 hours they make.
- Under `#oxygen`, a paragraph with the id `oxygen-days` says `Oxygen for `, then the days your function returns for the oxygen's hours, then ` full days`.
- The hours come from the numbers on the page.
