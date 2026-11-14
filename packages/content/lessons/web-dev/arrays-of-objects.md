Your phone doesn't have one contact. It has hundreds: a list of contacts, each with its own name and number. A list where every item is an object is one of the most common shapes of data.

## An array of objects

```js
const friends = [
  { name: "Sam", age: 13 },
  { name: "Lea", age: 12 },
  { name: "Ola", age: 14 },
];
```

Square brackets for the list, and curly brackets for each item. Every item has the same properties.

## Reading one

First the item, by its index, then its property:

```js
console.log(friends[1].name);
```

```text
Lea
```

`friends[1]` is Lea's object, and `.name` is her name.

## A loop through all of them

```js
for (const friend of friends) {
  console.log(`${friend.name} is ${friend.age}`);
}
```

```text
Sam is 13
Lea is 12
Ola is 14
```

In each lap, `friend` is one whole object, and you read the properties you need.

## Break it on purpose

Forget the index:

```js
console.log(friends.name);
```

```text
undefined
```

The **array** has no `name`: only each item has one. First choose an item, then its property.

---

## Mission: Tomorrow's flights

**What you will see**: when `schedule.html` opens, the console shows:

```text
Tomorrow: SL-201 to Moon Base
Tomorrow: SL-202 to Titan Dock
Tomorrow: SL-203 to Mars Relay
```

Tomorrow's three flights are already planned, and the script keeps them as a list of objects.

- In `schedule.js`, one array holds three objects.
- Each object has a `code` and a `destination`: `SL-201` to `Moon Base`, `SL-202` to `Titan Dock`, `SL-203` to `Mars Relay`.
- A loop writes `Tomorrow: `, each flight's code, `to`, and its destination.
