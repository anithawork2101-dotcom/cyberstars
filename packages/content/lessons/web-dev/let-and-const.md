Think of a jar in the kitchen with a label on it: "Sugar". You don't have to remember what's inside, because the label tells you. And when a recipe says "a spoon of sugar", you know which jar to open.

Programs keep values in jars with labels too. A label with its value is a **variable**.

## `const`

```js
const members = 12;
console.log("Members:", members);
```

```text
Members: 12
```

`const` makes a name, `members`, for a value, `12`. After that, every time the script says `members`, it means 12. You write the name without quotes. `members` is the jar, and `"members"` would be the word "members".

The `=` here doesn't mean "is equal to", like in math. It means "put this value in that name".

## Why do it?

A value you use in several places only needs to change once:

```js
const club = "Game Club";
console.log("Welcome to the", club);
console.log("Thanks for visiting the", club);
```

Change the club's name in one line, and both messages change.

## A constant stays the same

`const` is short for **constant**: the value can never change. Try to put another value in it, and the script stops:

```js
const members = 12;
members = 13;
```

```text
TypeError: Assignment to constant variable.
```

For values that do change, there is another word. You will meet it in the next lesson.

## Break it on purpose

Use the name before you make it:

```js
console.log(club);
const club = "Game Club";
```

You get an error. The script reads from top to bottom, and on line 1 the jar doesn't exist yet. Make the name first, and use it after.

---

## Mission: Station numbers

**What you will see**: when `crew.html` opens, the console shows these lines, with its other lines:

```text
Minutes per orbit: 92
Crew on board: 4
```

The station has a few numbers that never change. Keep them in `crew.js`, each under a name.

- The console shows `Minutes per orbit: 92`.
- The console shows `Crew on board: 4`.
- Each number is kept under a name made with `const`.
- The line that writes each number uses its name.
