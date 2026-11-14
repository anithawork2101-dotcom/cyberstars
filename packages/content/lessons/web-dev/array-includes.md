At the door of a birthday party, someone holds the list of guests. When you arrive, they ask two things. Are you on the list? And if you are, where, so they can tick your name? An array can answer both questions.

You know `includes` and `indexOf` on a text, from the Boarding Form. Arrays have methods with the same names, and they work almost the same way.

## `includes`: is it in the array?

`includes` answers `true` or `false`:

```js
const guests = ["Mia", "Leo", "Sara", "Tom"];

console.log(guests.includes("Sara"));
console.log(guests.includes("Ana"));
```

```text
true
false
```

Sara is one of the items, and Ana isn't. On a text, `includes` looks for a piece of the text. On an array, it looks for a whole item: `guests.includes("Sa")` is `false`, because no guest is called only "Sa".

## `indexOf`: where is it?

`indexOf` gives the item's index: its place, counted from 0:

```js
const guests = ["Mia", "Leo", "Sara", "Tom"];

console.log(guests.indexOf("Sara"));
console.log(guests.indexOf("Ana"));
```

```text
2
-1
```

Sara is the third guest, so her index is 2: Mia is 0, Leo 1, Sara 2. Ana isn't there, and `indexOf` says so with `-1`, a place no item can have.

A person counts from 1, not from 0. To say "number 3 on the list", add 1 to the index.

## Both together

`includes` reads well in an `if`, and `indexOf` says where:

```js
const guests = ["Mia", "Leo", "Sara", "Tom"];

if (guests.includes("Leo")) {
  console.log(`Leo is guest number ${guests.indexOf("Leo") + 1}`);
} else {
  console.log("Leo isn't invited");
}
```

```text
Leo is guest number 2
```

## Break it on purpose

Check a name with different capital letters: `guests.includes("leo")`. The answer is `false`. For JavaScript, `"leo"` and `"Leo"` are two different texts, so the item has to match exactly, letter by letter.

Then forget the `+ 1`, and write the place: "Leo is guest number 1", but Leo is the second guest. Remember which count you need: the index for JavaScript, from 1 for people.

---

## Mission: Is the commander on duty?

**What you will see**: under the names on duty, the dashboard says:

```text
Commander Vega is on duty, number 1 on the list.
```

When Vega isn't on the list, it says:

```text
Commander Vega is off duty today.
```

The crew's first question every morning: is Commander Vega on duty today? The dashboard should answer it from the list of who is on duty.

- The dashboard gets its own script, `dashboard.js`, which runs after the page is read.
- Under the list `#on-duty`, add a paragraph with the id `duty-check`.
- The script puts the names of the list `#on-duty` in an array, one item for each name. With your list from the last lessons, Vega is number 1.
- When the array holds `Vega`, the paragraph says `Commander Vega is on duty, number `, then Vega's place on the list counted from 1, then ` on the list.`
- If not, it says `Commander Vega is off duty today.`

An index counts from 0, and the crew counts from 1.
