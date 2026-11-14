A class teacher introduces themselves like every teacher: "I'm Mr Pop, I teach maths". Then they add one thing: "and I'm the class teacher of 7B". They don't learn a new way to introduce themselves. They say the usual sentence, then add their part.

## `super.method()`

A class that starts from another one can replace one of its methods. Inside the new method, it can still use the old one, through `super`:

```js
class Captain extends Pupil {
  introduce() {
    return `${super.introduce()}, and I'm the captain`;
  }
}
```

```text
I'm Ana, in grade 8, and I'm the captain
```

`super.introduce()` runs the `introduce` of `Pupil`, with the same `this`, and the new method adds to its answer. Change the sentence in `Pupil`, and captains change with it.

## `super()` in a constructor

A class that starts from another one may have a constructor of its own, to keep something more. First, it must let the other class do its part: it calls `super(...)` with what that constructor needs:

```js
class Captain extends Pupil {
  constructor(name, grade) {
    super(name, grade);
    this.armband = "C";
  }
}
```

`super(name, grade)` runs the constructor of `Pupil`, which keeps the name and the grade. Then `Captain` adds its own value.

## Break it on purpose

Leave out `super(name, grade)` and keep `this.armband = "C"`. The browser stops: a class that starts from another one must call `super` before it uses `this`. Then write `this.introduce()` instead of `super.introduce()` in the new `introduce`. It calls itself, again and again, until the browser gives up with `too much recursion`.

---

## Mission: A badge for the commander

**What you will see**: the first line of the crew panel is `★ Vega, Commander`. Every other line looks as before.

The commander should wear a badge, `★`, and show it in the crew panel.

- `Commander` has a constructor.
- It lets `CrewMember` keep the name and the role.
- Then it keeps a `badge`, `★`, in the new commander.
- `Commander` has its own `describe()`: the badge, a space, then what the `describe()` of `CrewMember` says.
- The crew panel writes what `describe()` returns, as before.

In the constructor, `super(...)` comes first, before any `this`.
