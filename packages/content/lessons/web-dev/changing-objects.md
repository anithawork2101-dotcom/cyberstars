A friend moves house, so you change their address in your contacts. Later, you add their new phone number, which wasn't there before. An object can change like that: properties get new values, and new properties are added.

## Changing a property

```js
const friend = { name: "Sam", city: "Bristol" };
friend.city = "Leeds";
console.log(friend.city);
```

```text
Leeds
```

A dot, the property, `=`, and the new value. It's like a `let` variable, but inside the object.

The object is a `const`, and it still changed? Yes. Like with arrays, `const` means the name always points at the **same** object. What is inside it can change.

## Adding a property

Give a value to a property that doesn't exist yet, and it's added:

```js
friend.phone = "0117 496 0123";
console.log(friend);
```

```text
{name: "Sam", city: "Leeds", phone: "0117 496 0123"}
```

## Using the old value

Like with variables, the new value can come from the old one:

```js
const player = { name: "Lea", points: 10 };
player.points = player.points + 5;
console.log(player.points);
```

```text
15
```

## Break it on purpose

Write the property's name differently when you change it:

```js
friend.Ciy = "Leeds";
```

No error. `friend.city` is still "Bristol", and the object now has a new property, `Ciy`. JavaScript can't know you meant `city`. Write the whole object to the console to see what is really in it.

---

## Mission: A change of plan

**What you will see**: when `schedule.html` opens, the console shows these lines after the next flight's line:

```text
New time: 10:05
Gate: 3
```

The next flight leaves later, and it gets a gate.

- The next flight's `departs` changes to `10:05`.
- The console shows `New time: 10:05`, read from the object.
- The object gets a new property, `gate`, with the number `3`.
- The console shows `Gate: 3`, read from the object.
