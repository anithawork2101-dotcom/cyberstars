"Is it raining?" "Are you older than 12?" "Is the shop open?" Some questions have only two answers: yes or no. Programs ask questions like that all the time, and JavaScript has a value for each answer: `true` and `false`.

## Booleans

`true` and `false` are values, like numbers and strings. They are called **booleans**. They have no quotes: `true` is a boolean, but `"true"` is only a word.

```js
const doorOpen = true;
console.log(doorOpen);
```

```text
true
```

## Comparisons give a boolean

A comparison asks a question, and its answer is `true` or `false`:

```js
console.log(12 > 8);
console.log(12 < 8);
console.log(12 >= 12);
console.log(5 <= 3);
```

```text
true
false
true
false
```

- `>` bigger than, `<` smaller than;
- `>=` bigger than or equal to, `<=` smaller than or equal to.

You already used them in `for` loops: `i <= 3` is a question the loop asks before every lap.

## Comparing strings

You can compare strings too, letter by letter, like words in a dictionary:

```js
console.log("apple" < "banana");
console.log("08:30" < "10:00");
```

```text
true
true
```

Times written as two digits, a colon and two digits compare just like the clock: `"08:30"` comes before `"10:00"`. That only works when every time starts with its zero. `"8:30"` would come **after** `"10:00"`, because the character `8` comes after `1`.

## Break it on purpose

Compare numbers from the page without `Number()`:

```js
console.log("9" > "10");
```

```text
true
```

As strings, `"9"` comes after `"1"`, so `"9"` is "bigger". Numbers from the page must become numbers before you compare them.

---

## Mission: Before ten

**What you will see**: when `schedule.html` opens, the console shows:

```text
First flight leaves before 10:00: true
```

Your site gets one more script, `schedule.js`, for the schedule page. Its first job: say if the first flight on the board leaves before 10:00.

- `schedule.html` loads `schedule.js` from its head, with `defer`.
- The console shows `First flight leaves before 10:00: `, then `true` or `false`.
- The answer comes from the departure time in the first row of the flight table.
- Change that time to `11:15`, and the console says `false`.

The times on the board start with a zero, so they compare like the clock.
