You are looking for a free seat on the bus. You walk down the bus, and you sit on the first free seat you see. You don't check every seat, and you don't count how many are free: one is enough. `find` looks through an array in the same way.

## `filter` keeps them all

`filter` gives an array of every item that matches:

```js
const seats = [
  { number: 1, free: false },
  { number: 2, free: true },
  { number: 3, free: false },
  { number: 4, free: true },
];

console.log(seats.filter((seat) => seat.free));
```

```text
[{number: 2, free: true}, {number: 4, free: true}]
```

But you only need one seat.

## `find`: the first one

`find` takes the same kind of question, and gives the **first** item that matches. Not an array: the item itself:

```js
const seat = seats.find((seat) => seat.free);

console.log(seat);
console.log(`Sit on seat ${seat.number}`);
```

```text
{number: 2, free: true}
Sit on seat 2
```

`find` stops at seat 2. It never looks at seat 4, even though it's free too.

## When nothing matches

On a full bus, no seat is free. Then `find` gives `undefined`: "nothing":

```js
const fullBus = [
  { number: 1, free: false },
  { number: 2, free: false },
];
const seat = fullBus.find((seat) => seat.free);

console.log(seat);
```

```text
undefined
```

`undefined` counts as false in an `if`, and an object counts as true. So an `if` or a ternary can tell them apart:

```js
console.log(seat ? `Sit on seat ${seat.number}` : "No free seat, stand up");
```

```text
No free seat, stand up
```

## Break it on purpose

Leave out the check, on the full bus:

```js
console.log(`Sit on seat ${seat.number}`);
```

```text
TypeError: Cannot read properties of undefined (reading 'number')
```

The console says it clearly: you asked for `number`, but `seat` is `undefined`, and nothing has no properties. The script stops at that line, so nothing after it runs either. When `find` might find nothing, check before you use what it gives.

---

## Mission: What to refill first

**What you will see**: under the average, the dashboard says:

```text
Refill first: Oxygen
```

When no supply is low, it says:

```text
Nothing to refill
```

The crew fills the supplies again in the order of the table. The dashboard should say which one to start with.

- Under `#supplies-average`, add a paragraph with the id `first-refill`.
- It says `Refill first: `, then the name of the first supply of the table, from the top, whose level is under 25.
- When no supply is under 25, it says `Nothing to refill`.
- Then the page shows no error.

`find` gives one supply, or `undefined`.
