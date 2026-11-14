Your age isn't written anywhere on you. It's worked out from your birthday, every time someone asks. Next year the answer changes, but nobody wrote a new number down. Some values are like that: it's better to work them out when someone asks than to keep them.

## A value that is really a method

A **getter** is a method you read like a value. Write `get` in front of it, and leave out the brackets when you use it:

```js
class Pupil {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }
}

const mia = new Pupil("Mia", "Pop");
console.log(mia.fullName);
mia.last = "Ionescu";
console.log(mia.fullName);
```

```text
Mia Pop
Mia Ionescu
```

`mia.fullName` looks like a value, but it runs the method each time you read it. So it always fits the other values. If you kept it in the constructor instead, `this.fullName = ...` would still say "Mia Pop" after the change.

## When to use one

Use a getter for a value that comes from the object's other values, when reading it shouldn't change anything. For example: a name put together, a total, or the answer to a yes-or-no question. Use a method, with brackets, for something that does a job.

## Break it on purpose

Read a getter with brackets: `mia.fullName()`. The browser says `mia.fullName is not a function`: what it reads is a text, and you can't call a text. Then write the getter without `return`. Every read gives `undefined`.

---

## Mission: Call signs

**What you will see**: rest the mouse on `★ Vega, Commander` in the crew panel, and a small box says `VEG`. Orion's says `ORI`.

Every crew member has a call sign for the radio: the first three letters of their name, in capitals.

- `CrewMember` has a getter `callSign`.
- It gives the first three letters of the member's name, in capitals.
- It is worked out each time it's read, so it fits a new name too.
- Each line of the crew panel gets the person's call sign as its `title`.

You read a getter without brackets.
