Look at a messy drawer with jars called "x", "thing" and "stuff2". You would have to open every jar to find the salt. Names in a program are labels too, and good names save you from opening jars.

## A name that says what's inside

```js
const m = 12;
const x = 4;
```

What are those? Nobody knows, not even you next week. Now look at this:

```js
const members = 12;
const tablesInTheRoom = 4;
```

Now each line explains itself. A good name says **what the value is**, not only that it's a number.

## How to write a name

JavaScript has some rules:

- letters, digits, `_` and `$` only: no spaces, and no `-`;
- it can't start with a digit: `2players` isn't allowed, but `players2` is;
- capital letters matter: `score` and `Score` are two different names.

When a name has several words, put them together, and start each new word with a capital letter: `tablesInTheRoom`, `minutesPerOrbit`. That's called **camelCase**, because the capitals stand up like a camel's back. Almost all JavaScript is written this way.

## Not too long, not too short

`n` is too short to say anything. `theNumberOfPeopleWhoAreMembersOfTheClubRightNow` is too long to read. `members` says it all. Try to use one to three words.

A few words can't be names at all, because JavaScript uses them itself: `let`, `const`, `if`, `for`, and some others.

## Break it on purpose

Use a `-` in a name:

```js
const tables-in-the-room = 4;
```

You get a `SyntaxError`. JavaScript reads the `-` as a minus: `tables` minus `in` minus... and it gets lost. That's why names use camelCase.

---

## Mission: Oxygen supplies

**What you will see**: when `crew.html` opens, the console shows these lines, with its other lines:

```text
Oxygen tanks: 7
Hours per tank: 20
```

The station keeps extra oxygen tanks: 7 of them, and each one lasts 20 hours. Keep both numbers in `crew.js`, with names that say what they are.

- The console shows `Oxygen tanks: 7`.
- The console shows `Hours per tank: 20`.
- Each number is kept under a name in camelCase that says what it is.
- The line that writes each number uses its name.
