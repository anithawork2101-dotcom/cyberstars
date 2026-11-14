A cookie cutter makes many cookies with the same shape. A form at the doctor's makes many patient cards with the same boxes: a name, a birthday, an address. When you need many things of one kind, you describe the kind once, then make as many as you like. In JavaScript, that description is a **class**.

## Objects of one kind

The crew panel has six people. Each one is an object with a `name` and a `role`. They come from the API as plain objects. Soon each person will do things too: describe themselves, or say if they're in charge. A class lets you write those things once, for every person.

## `class`, `constructor` and `new`

```js
class Pupil {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

const mia = new Pupil("Mia", 7);
const ben = new Pupil("Ben", 8);

console.log(mia.name, mia.grade);
console.log(ben.name, ben.grade);
```

```text
Mia 7
Ben 8
```

- `class Pupil` describes the kind. By habit, a class's name starts with a capital letter.
- `constructor` runs every time a new pupil is made. Its parameters are what you give it.
- `this` is the new object being made. `this.name = name` keeps the name in it.
- `new Pupil(...)` makes one pupil, runs the constructor, and gives you the object.

Each `new` makes a separate object: change `mia.grade`, and Ben's grade stays 8. Like any function, the constructor can take an object and unpack it: `constructor({ name, grade })`, then `new Pupil({ name: "Mia", grade: 7 })`.

Like a function, a class can be a module's default export: `export default class Pupil { ... }`.

## Break it on purpose

Leave out `new`: `const mia = Pupil("Mia", 7);`. The browser stops: you can only use a class with `new`. Then forget `this.` in the constructor: `name = name;`. There's no error, but the object has no `name`. The value stayed in the parameter.

---

## Mission: The crew, as a class

**What you will see**: the crew panel looks exactly as before. A new file, `crew-member.js`, gives a class by default. `new CrewMember({ name: "Lyra", role: "Engineer" })` makes a crew member whose `name` is `Lyra` and whose `role` is `Engineer`. The tests use your class themselves, and write what they find in the console.

The people of the crew panel should be made from a class, so the next lessons can teach them to do things.

- `crew-member.js` exports by default a class.
- Its constructor takes an object with a `name` and a `role`, and keeps both in the new crew member.
- For each person the API sent, the crew panel makes a crew member with the class.
- The panel shows each person's name and role from that crew member, as before.

You can only use a class with `new`.
