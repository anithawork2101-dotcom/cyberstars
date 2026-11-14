You have a box of beads and a piece of string. Put them on the string one after the other, and you get one necklace. If you tie a small knot between the beads, the knots are in the necklace too. `join` puts an array's items together into one text, with what you choose between them.

## Building a text in a loop

Until now, to turn an array into a line, you built the text in a loop:

```js
const fruits = ["apple", "pear", "plum"];

let line = "";
for (const fruit of fruits) {
  line = line + `${fruit}, `;
}
console.log(line);
```

```text
apple, pear, plum,
```

It works, but look at the end: there is a comma after the last fruit. Removing it takes more code.

## `join`

`join` does the whole loop, and only puts the separator **between** the items. The **separator** is what goes between them:

```js
const fruits = ["apple", "pear", "plum"];

console.log(fruits.join(", "));
console.log(fruits.join(" and "));
console.log(fruits.join(""));
```

```text
apple, pear, plum
apple and pear and plum
applepearplum
```

The separator can be any text: a comma and a space, a word, or nothing at all. With one item, there is nothing to put between, so you get the item alone. With no items, you get an empty text.

## `join` gives a text

`join` doesn't change the array. It gives back a new value, a text, that you can put in a template literal or on the page:

```js
const team = ["Ana", "Ben"];
console.log(`Team: ${team.join(" & ")}`);
```

```text
Team: Ana & Ben
```

## Break it on purpose

Put the array straight into a text, without `join`:

```js
console.log(`Team: ${team}`);
```

```text
Team: Ana,Ben
```

JavaScript turns the array into a text by itself, but with a comma and **no space**. The same happens with `join()` and nothing between its brackets. When your words touch, give `join` the separator you want.

---

## Mission: Everyone on duty in one line

**What you will see**: under the names on duty, the dashboard says:

```text
On duty: Vega, Orion, Lyra, Altair, Nova, Rigel
Commander Vega is on duty, number 1 on the list.
Shift leads: Vega and Orion
6 on duty today
```

The duty list shows one name in each box. The crew also wants it as one line of text, to read out on the radio. And the shift leads would sound better with an "and".

- Between the list `#on-duty` and `#duty-check`, add a paragraph with the id `duty-line`.
- It says `On duty: `, then every name of the list, with a comma and a space between two names.
- `#shift-leads` now says `Shift leads: `, then the first two names with the word `and` between them, with a space on each side.
- With only one name on duty, it says only that one.
