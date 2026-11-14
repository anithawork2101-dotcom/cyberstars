A class teacher is a teacher. Like every teacher, they teach lessons, mark tests and come to the staff room. But they also do one more thing: they look after one class. You wouldn't describe a class teacher from zero. You'd say "a teacher who also looks after a class".

## `extends`

`extends` makes a class that starts from another one. It gets everything the first class has, and adds or changes only what is different:

```js
class Pupil {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  introduce() {
    return `I'm ${this.name}, in grade ${this.grade}`;
  }

  isCaptain() {
    return false;
  }
}

class Captain extends Pupil {
  isCaptain() {
    return true;
  }
}

const ana = new Captain("Ana", 8);
console.log(ana.introduce());
console.log(ana.isCaptain());
```

```text
I'm Ana, in grade 8
true
```

`Captain` has no constructor and no `introduce` of its own: it uses the ones of `Pupil`. Its own `isCaptain` replaces the one of `Pupil`, so a captain answers `true` and every other pupil answers `false`. The page can ask any pupil `isCaptain()`, and doesn't need to check what kind of pupil it is.

A captain **is** a pupil: everywhere a pupil fits, a captain fits too.

When the new class is in a file of its own, it imports the class it starts from:

```js
import Pupil from "./pupil.js";

export default class Captain extends Pupil { ... }
```

## Break it on purpose

Copy `Pupil` into `Captain` instead of using `extends`. It works today. Then change `introduce` in `Pupil`. Captains still introduce themselves the old way: there are two copies, and you fixed only one. Then leave out `isCaptain` in `Pupil`. Every pupil who isn't a captain throws `isCaptain is not a function`.

---

## Mission: The commander

**What you will see**: in the crew panel, `Vega, Commander` stands out from the rest, in another color or in bold. Every other line looks as before.

On a station, the commander isn't just one of the crew: they're in charge. The crew panel should show it.

- `CrewMember` has a method `isInCharge()` that returns `false`.
- A new file, `commander.js`, exports by default a class `Commander` that starts from `CrewMember`.
- The `isInCharge()` of `Commander` returns `true`.
- The crew panel makes a `Commander` for a person whose role is `Commander`, and a `CrewMember` for everyone else.
- The line of a person in charge gets the class `in-charge`, which makes it stand out.

The new class gets everything else from the class it starts from.
