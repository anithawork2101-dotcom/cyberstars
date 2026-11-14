A contact on your phone isn't one value. It's a name, a number and a birthday, all about the same person. You could keep each one in its own variable, but they belong together. JavaScript keeps things that belong together in an **object**.

## Making an object

You write an object in curly brackets, with a **name** and a **value** for each piece, and commas between them:

```js
const friend = {
  name: "Sam",
  age: 13,
  city: "Bristol",
};
```

Each `name: value` pair is a **property**. The names have no quotes. The values can be any values you like: strings, numbers, booleans.

## Reading a property

Write a dot, then the property's name:

```js
console.log(friend.name);
console.log(`${friend.name} is ${friend.age}`);
```

```text
Sam
Sam is 13
```

You used dots like this before: `name.length`, `element.textContent`. A string and an element are objects too, with their own properties.

## Writing it all to the console

```js
console.log(friend);
```

```text
{name: "Sam", age: 13, city: "Bristol"}
```

## Break it on purpose

Ask for a property that isn't there:

```js
console.log(friend.phone);
```

```text
undefined
```

No error, only `undefined`: "nothing there". A typo in a property's name gives the same `undefined`, and that can be hard to see. Check how you wrote it.

---

## Mission: The next flight

**What you will see**: when `schedule.html` opens, the console shows:

```text
Next flight: SL-102 to Mars Relay at 09:45
```

The schedule's script keeps the details of the next flight together, in one object.

- In `schedule.js`, one object holds the flight's `code`, `destination` and `departs`.
- Their values are `SL-102`, `Mars Relay` and `09:45`.
- The console shows `Next flight: SL-102 to Mars Relay at 09:45`.
- The script reads that line from the object's properties.
