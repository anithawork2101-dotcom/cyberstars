At a post office, they don't open your package at the counter and take things out one by one in front of you. The package arrives already sorted: letters in one box, packages in another. A function can sort what it gets the moment it arrives.

## Unpacking in the brackets

`showShip` gets a starship, then unpacks it on its first line. You can unpack it right where the function gets it, in its parameter:

```js
function greet({ name, age }) {
  console.log(`${name} is ${age}`);
}

greet({ name: "Mia", age: 13, town: "Cluj" });
```

```text
Mia is 13
```

The function still gets one object, but its parameter takes `name` and `age` out of it straight away. It works the same way in an arrow function: `({ name, age }) => ...`. Whoever reads the first line knows exactly which values the function uses.

## A new name for a value

Sometimes, the key is a bad name for a variable. The starships' `class` is a word JavaScript keeps for itself, so `{ class }` is refused. Write a colon and a name of your own after the key:

```js
function describe({ name, class: kind }) {
  console.log(`${name} is a ${kind}`);
}
```

`class: kind` reads as "take `class`, and call it `kind`". It's the opposite of an object's `key: value`: here, the key is on the left, and **your** name is on the right.

## Break it on purpose

Write `{ name, kind }` without the colon. There is no `kind` key in a starship, so `kind` is `undefined`, and every card loses its class. Then write `{ kind: class }`, the wrong way round. The browser refuses the script, because it reads `class` as the new name.

---

## Mission: A title on every card

**What you will see**: rest the mouse on Aurora's card, and a small box says:

```text
Aurora: 4 crew, Docked
```

When the mouse rests on a starship card, a small box should say everything about it in one line.

- `showShip` takes the starship's `name`, `class`, `status` and `crew` out of its parameter.
- The class gets a name of your own.
- Each card (`li.ship`) gets a `title`: the name, a colon and a space, the crew, a space, the word `crew`, a comma and a space, then the status.
- The card still shows its name, class, status and crew as before.

The box that a mouse shows over an element is its `title` attribute.
