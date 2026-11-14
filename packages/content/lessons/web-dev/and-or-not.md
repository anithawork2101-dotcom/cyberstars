"You can go out if you've done your homework **and** cleaned your room." "We'll take the bus **or** a taxi." "Do **not** touch." Everyday rules join questions with and, or and not. JavaScript has the same three words, written as signs.

## `&&`: and

Both sides must be true:

```js
const homeworkDone = true;
const roomTidy = false;
console.log(homeworkDone && roomTidy);
```

```text
false
```

The room isn't clean, so the whole answer is `false`. `&&` is `true` only when **both** sides are true.

## `||`: or

At least one side must be true:

```js
const busComing = false;
const taxiFree = true;
console.log(busComing || taxiFree);
```

```text
true
```

The bus isn't coming, but a taxi is free, so you can go: `true`. `||` is `false` only when **both** sides are false. The `|` key is usually above Enter, and you type it with Shift.

## `!`: not

`!` turns `true` into `false`, and `false` into `true`:

```js
const raining = false;
console.log(!raining);
```

```text
true
```

"Not raining" is true.

## Joining questions

You often use them with comparisons:

```js
const age = 13;
console.log(age >= 12 && age <= 18);
```

```text
true
```

"At least 12 and at most 18": a teenager.

## Break it on purpose

Use one `&` or one `|`:

```js
console.log(homeworkDone & roomTidy);
```

```text
0
```

A number, not a boolean! One `&` is something very different, for working with numbers in a special way. For "and" and "or", always use two signs.

---

## Mission: Ready to fly

**What you will see**: when `schedule.html` opens, the console shows:

```text
Second flight ready: true
```

A flight is ready for its passengers when it's on time **and** it leaves before 10:00.

- The console shows `Second flight ready: `, then `true` or `false`.
- It's `true` only when the second row's status is `On time`, and its departure time is before `10:00`.
- Both are read from the table.
